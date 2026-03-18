function attachListeners() {}

function setPage(page) {
  state.page = page;
  document.getElementById('sidebar')?.classList.remove('open');
  render();
  setTimeout(renderAllCharts, 100);
}

function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
}

// ─── Trade actions ────────────────────────────────────────
function openAddTrade() {
  state.modalType = 'addTrade';
  state.modalOpen = true;
  state.editTrade = null;
  pendingScreenshots = [];
  render();
}

async function openEditTrade(id) {
  try {
    const trade = await api('/trades/' + id);
    state.editTrade = trade;
    state.modalType = 'editTrade';
    state.modalOpen = true;
    render();
  } catch(e) { showToast(e.message, 'error'); }
}

async function openViewTrade(id) {
  try {
    const trade = await api('/trades/' + id);
    state.editTrade = trade;
    state.modalType = 'viewTrade';
    state.modalOpen = true;
    render();
  } catch(e) { showToast(e.message, 'error'); }
}

async function submitTrade(evt, id) {
  if (evt) evt.preventDefault();
  const form = document.getElementById('tradeForm');
  if (!form) return;
  const data = Object.fromEntries(new FormData(form));
  ['entryPrice','exitPrice','stopLoss','takeProfit','pnl','rr','lotSize','commission'].forEach(f => {
    if (data[f] !== undefined && data[f] !== '') data[f] = parseFloat(data[f]);
    else delete data[f];
  });
  if (data.tags) data.tags = data.tags.split(',').map(t => t.trim()).filter(Boolean);
  if (!data.accountId) delete data.accountId;
  if (pendingScreenshots.length > 0) data.screenshots = pendingScreenshots;
  try {
    if (id) {
      await api('/trades/' + id, { method: 'PUT', body: JSON.stringify(data) });
      showToast('Trade mis à jour ✅');
    } else {
      await api('/trades', { method: 'POST', body: JSON.stringify(data) });
      showToast('Trade enregistré ✅');
    }
    pendingScreenshots = [];
    closeModal();
    await loadAll();
  } catch(e) { showToast(e.message, 'error'); }
}

async function deleteTrade(id) {
  if (!confirm('Supprimer ce trade ?')) return;
  try {
    await api('/trades/' + id, { method: 'DELETE' });
    showToast('Trade supprimé');
    closeModal();
    await loadAll();
  } catch(e) { showToast(e.message, 'error'); }
}

// ─── Account actions ──────────────────────────────────────
function openAddAccount() {
  state.modalType = 'addAccount';
  state.editAccount = null;
  state.modalOpen = true;
  render();
}

function openEditAccount(id) {
  state.editAccount = state.accounts.find(a => a._id === id);
  state.modalType = 'editAccount';
  state.modalOpen = true;
  render();
}

async function submitAccount(id) {
  const get = s => document.getElementById(s)?.value;
  const data = {
    name: get('acc-name'), broker: get('acc-broker'), type: get('acc-type'),
    currency: get('acc-currency'),
    initialBalance: parseFloat(get('acc-initial')),
    currentBalance: parseFloat(get('acc-current') || get('acc-initial')),
    target: get('acc-target') ? parseFloat(get('acc-target')) : undefined,
    maxDrawdown: get('acc-maxdd') ? parseFloat(get('acc-maxdd')) : undefined,
    notes: get('acc-notes')
  };
  if (!data.name || !data.initialBalance) { showToast('Remplissez les champs obligatoires', 'error'); return; }
  try {
    if (id) {
      await api('/accounts/' + id, { method: 'PUT', body: JSON.stringify(data) });
      showToast('Compte mis à jour ✅');
    } else {
      await api('/accounts', { method: 'POST', body: JSON.stringify(data) });
      showToast('Compte créé ✅');
    }
    closeModal();
    await loadAll();
  } catch(e) { showToast(e.message, 'error'); }
}

async function deleteAccount(id) {
  if (!confirm('Supprimer ce compte ?')) return;
  try {
    await api('/accounts/' + id, { method: 'DELETE' });
    showToast('Compte supprimé');
    closeModal();
    await loadAll();
  } catch(e) { showToast(e.message, 'error'); }
}

// ─── Goals ────────────────────────────────────────────────
function openGoalsEdit() {
  state.modalType = 'goals';
  state.modalOpen = true;
  render();
}

async function saveGoals() {
  const monthly = parseFloat(document.getElementById('goal-monthly')?.value) || 0;
  const annual  = parseFloat(document.getElementById('goal-annual')?.value) || 0;
  try {
    await api('/auth/settings', { method: 'PATCH', body: JSON.stringify({ monthlyGoal: monthly, annualGoal: annual }) });
    state.user.monthlyGoal = monthly;
    state.user.annualGoal  = annual;
    showToast('Objectifs enregistrés');
    closeModal();
    render();
  } catch(e) { showToast(e.message, 'error'); }
}

// ─── CSV Import ───────────────────────────────────────────
function openImportCSV() {
  state.modalType = 'importCSV';
  state.modalOpen = true;
  render();
}

async function importCSV() {
  const csvData   = document.getElementById('csv-data')?.value;
  const accountId = document.getElementById('import-account')?.value;
  if (!csvData?.trim()) { showToast('Collez vos données CSV', 'error'); return; }
  try {
    const result = await api('/trades/import/csv', { method: 'POST', body: JSON.stringify({ csvData, accountId: accountId || null }) });
    showToast(`${result.imported} trades importés ✅`);
    closeModal();
    await loadAll();
  } catch(e) { showToast(e.message, 'error'); }
}

// ─── Filters ──────────────────────────────────────────────
let filterTimer;
function updateFilter(key, value) {
  state.filters[key] = value;
  state.page_num = 1;
  clearTimeout(filterTimer);
  filterTimer = setTimeout(async () => { await loadTrades(); render(); }, 400);
}

function clearFilters() {
  state.filters = { search:'', asset:'', type:'', status:'', from:'', to:'' };
  state.page_num = 1;
  loadTrades().then(() => render());
}

function changePage(p) {
  state.page_num = p;
  loadTrades().then(() => render());
}

async function changeAccount(id) {
  state.selectedAccount = id;
  state.page_num = 1;
  await loadAll();
}

// ─── Settings ─────────────────────────────────────────────
function openSettings() {
  state.modalType = 'settings';
  state.modalOpen = true;
  render();
}

async function saveProfile() {
  const username = document.getElementById('set-username')?.value?.trim();
  if (!username) { showToast('Pseudo requis', 'error'); return; }
  try {
    await api('/auth/profile', { method: 'PATCH', body: JSON.stringify({ username }) });
    state.user.username = username;
    showToast('Profil mis à jour ✅');
    render();
  } catch(e) { showToast(e.message, 'error'); }
}

async function savePassword() {
  const currentPassword = document.getElementById('set-current-pwd')?.value;
  const newPassword     = document.getElementById('set-new-pwd')?.value;
  if (!currentPassword || !newPassword) { showToast('Remplissez les deux champs', 'error'); return; }
  try {
    await api('/auth/password', { method: 'PATCH', body: JSON.stringify({ currentPassword, newPassword }) });
    showToast('Mot de passe mis à jour ✅');
    document.getElementById('set-current-pwd').value = '';
    document.getElementById('set-new-pwd').value = '';
  } catch(e) { showToast(e.message, 'error'); }
}

async function savePreferences() {
  const currency    = document.getElementById('set-currency')?.value;
  const riskPerTrade = parseFloat(document.getElementById('set-risk')?.value) || 1;
  try {
    await api('/auth/settings', { method: 'PATCH', body: JSON.stringify({ currency, riskPerTrade }) });
    state.user.settings.currency    = currency;
    state.user.settings.riskPerTrade = riskPerTrade;
    showToast('Préférences sauvegardées ✅');
  } catch(e) { showToast(e.message, 'error'); }
}

async function togglePublicJournal() {
  try {
    const newVal = !state.user.isPublic;
    await api('/auth/settings', { method: 'PATCH', body: JSON.stringify({ isPublic: newVal }) });
    state.user.isPublic = newVal;
    showToast(newVal ? 'Journal rendu public ✅' : 'Journal masqué');
    render();
    openSettings();
  } catch(e) { showToast(e.message, 'error'); }
}

// ─── Auth ─────────────────────────────────────────────────
function switchAuthTab(tab) {
  state.authTab = tab;
  state.authError = '';
  state.authSuccess = '';
  render();
  setTimeout(() => { const first = document.querySelector('.auth-input'); if(first) first.focus(); }, 50);
}

function checkPwdStrength(val) {
  const el = document.getElementById('pwd-strength');
  if (!el) return;
  const score = [val.length >= 8, /[A-Z]/.test(val), /[0-9]/.test(val), /[^A-Za-z0-9]/.test(val)].filter(Boolean).length;
  el.style.background = ['','#ef4444','#f59e0b','#3b82f6','#10b981'][score] || 'transparent';
  el.style.width = ['0%','25%','50%','75%','100%'][score];
}

async function submitLogin() {
  const email    = document.getElementById('login-email')?.value?.trim();
  const password = document.getElementById('login-password')?.value;
  const btn      = document.getElementById('login-btn');
  if (!email || !password) { state.authError = 'Remplissez tous les champs.'; render(); return; }
  if (btn) { btn.disabled = true; btn.textContent = 'Connexion…'; }
  try {
    const data = await api('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    setToken(data.token);
    state.user = data.user;
    state.authError = '';
    await loadAll();
  } catch(e) {
    state.authError = e.message;
    render();
    if (btn) { btn.disabled = false; btn.textContent = 'Se connecter'; }
  }
}

async function submitRegister() {
  const username = document.getElementById('reg-username')?.value?.trim();
  const email    = document.getElementById('reg-email')?.value?.trim();
  const password = document.getElementById('reg-password')?.value;
  const btn      = document.getElementById('reg-btn');
  if (!username || !email || !password) { state.authError = 'Remplissez tous les champs.'; render(); return; }
  if (btn) { btn.disabled = true; btn.textContent = 'Création…'; }
  try {
    const data = await api('/auth/register', { method: 'POST', body: JSON.stringify({ username, email, password }) });
    setToken(data.token);
    state.user = data.user;
    state.authError = '';
    await loadAll();
  } catch(e) {
    state.authError = e.message;
    render();
    if (btn) { btn.disabled = false; btn.textContent = 'Créer mon compte'; }
  }
}

async function logout() {
  try { await api('/auth/logout', { method: 'POST' }); } catch {}
  clearToken();
  state.user = null;
  state.authTab = 'login';
  state.authError = '';
  render();
}

// ─── Modal ────────────────────────────────────────────────
function closeModal() {
  state.modalOpen  = false;
  state.modalType  = null;
  state.editTrade  = null;
  state.editAccount = null;
  render();
}

// ─── Toast ────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:999;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:600;font-family:var(--font-body);animation:slideUp .25s;box-shadow:0 8px 30px rgba(0,0,0,.4);${type==='error'?'background:#1a0a0a;color:#f87171;border:1px solid rgba(239,68,68,.3)':'background:#0a1a12;color:#34d399;border:1px solid rgba(16,185,129,.3)'}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ─── Theme ────────────────────────────────────────────────
function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('pj_theme', isLight ? 'light' : 'dark');
  render();
}

function initTheme() {
  if (localStorage.getItem('pj_theme') === 'light') document.body.classList.add('light');
}