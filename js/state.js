const API = window.location.hostname === 'localhost'
  ? 'http://localhost:5000/api'
  : 'https://privatejournal-backend-production.up.railway.app/api';

let state = {
  user: null,
  authTab: 'login',
  authError: '',
  authSuccess: '',
  page: 'dashboard',
  trades: [],
  accounts: [],
  stats: null,
  equityCurve: [],
  monthly: [],
  byAsset: [],
  byWeekday: [],
  bySetup: [],
  calendar: {},
  leaderboard: [],
  publicJournals: [],
  publicProfile: null,
  loading: true,
  modalOpen: false,
  modalType: null,
  editTrade: null,
  editAccount: null,
  filters: { search: '', asset: '', type: '', status: '', from: '', to: '' },
  page_num: 1,
  totalTrades: 0,
  selectedAccount: 'all',
  charts: {}
};

// ─── Token ────────────────────────────────────────────────
function getToken() { return localStorage.getItem('pj_token'); }
function setToken(t) { localStorage.setItem('pj_token', t); }
function clearToken() { localStorage.removeItem('pj_token'); }

// ─── API helper ───────────────────────────────────────────
async function api(path, opts = {}) {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json', ...opts.headers };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  const r = await fetch(API + path, { ...opts, headers });
  const data = await r.json();
  if (!r.ok) throw new Error(data.error || 'API Error');
  return data;
}

// ─── Screenshot upload ────────────────────────────────────
let pendingScreenshots = [];

async function uploadScreenshots(input) {
  const files = Array.from(input.files);
  const progress = document.getElementById('upload-progress');
  const preview = document.getElementById('screenshot-preview');
  if (!preview) return;
  for (const file of files) {
    if (progress) progress.textContent = `Upload en cours... ${file.name}`;
    try {
      const formData = new FormData();
      formData.append('screenshot', file);
      const r = await fetch(API + '/upload/screenshot', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + getToken() },
        body: formData
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      pendingScreenshots.push(data.url);
      const img = document.createElement('div');
      img.style.cssText = 'position:relative;display:inline-block';
      img.innerHTML = `
        <img src="${data.url}" style="height:80px;width:120px;border-radius:6px;border:1px solid var(--border);object-fit:cover;cursor:zoom-in" onclick="openImagePreview('${data.url}')" />
        <button onclick="removeScreenshot('${data.url}',this.parentElement)" style="position:absolute;top:-6px;right:-6px;background:var(--red-2);border:none;border-radius:50%;width:18px;height:18px;color:#fff;cursor:pointer;font-size:10px;display:flex;align-items:center;justify-content:center">✕</button>
      `;
      preview.appendChild(img);
      if (progress) progress.textContent = `✅ ${file.name} uploadé !`;
    } catch(e) {
      if (progress) progress.textContent = `❌ Erreur: ${e.message}`;
    }
  }
  setTimeout(() => { const p = document.getElementById('upload-progress'); if(p) p.textContent = ''; }, 3000);
}

function removeScreenshot(url, el) {
  pendingScreenshots = pendingScreenshots.filter(s => s !== url);
  el.remove();
}

function openImagePreview(url) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;animation:fadeIn .15s';
  overlay.onclick = () => overlay.remove();
  overlay.innerHTML = `
    <div style="position:relative;max-width:90vw;max-height:90vh">
      <img src="${url}" style="max-width:90vw;max-height:90vh;border-radius:10px;object-fit:contain;box-shadow:0 30px 60px rgba(0,0,0,.8)" />
      <button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:-14px;right:-14px;background:var(--red-2);border:none;border-radius:50%;width:28px;height:28px;color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center">✕</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ─── Data loading ─────────────────────────────────────────
async function loadUser() {
  if (!getToken()) return false;
  try {
    state.user = await api('/auth/me');
    return true;
  } catch {
    clearToken();
    return false;
  }
}

async function loadAll() {
  state.loading = true;
  render();
  try {
    const acParam = state.selectedAccount !== 'all' ? `?accountId=${state.selectedAccount}` : '';
    const [stats, equity, monthly, byAsset, byWeekday, bySetup, cal] = await Promise.all([
      api('/stats/overview' + acParam),
      api('/stats/equity-curve' + acParam),
      api('/stats/monthly' + acParam),
      api('/stats/by-asset' + acParam),
      api('/stats/by-weekday' + acParam),
      api('/stats/by-setup' + acParam),
      api('/stats/calendar'),
    ]);
    state.stats = stats;
    state.equityCurve = equity;
    state.monthly = monthly;
    state.byAsset = byAsset;
    state.byWeekday = byWeekday;
    state.bySetup = bySetup;
    state.calendar = cal;
  } catch(e) { console.warn('Stats error:', e.message); }
  await loadTrades();
  await loadAccounts();
  await loadLeaderboard();
  await loadPublicJournals();
  state.loading = false;
  render();
}

async function loadTrades() {
  const f = state.filters;
  const p = new URLSearchParams({ page: state.page_num, limit: 50, sortBy: 'date', sortDir: '-1' });
  if (f.search) p.set('search', f.search);
  if (f.asset)  p.set('asset',  f.asset);
  if (f.type)   p.set('type',   f.type);
  if (f.status) p.set('status', f.status);
  if (f.from)   p.set('from',   f.from);
  if (f.to)     p.set('to',     f.to);
  if (state.selectedAccount !== 'all') p.set('accountId', state.selectedAccount);
  try {
    const r = await api('/trades?' + p);
    state.trades = r.trades;
    state.totalTrades = r.total;
  } catch(e) { console.warn(e.message); }
}

async function loadAccounts() {
  try { state.accounts = await api('/accounts'); } catch(e) {}
}

async function loadLeaderboard() {
  try {
    state.leaderboard = await api('/stats/leaderboard');
  } catch(e) {
    console.warn('Leaderboard error:', e.message);
    state.leaderboard = [];
  }
}

async function loadPublicJournals() {
  try {
    const r = await fetch(API + '/public');
    state.publicJournals = await r.json();
  } catch(e) { state.publicJournals = []; }
}

async function loadPublicProfile(username) {
  try {
    const r = await fetch(API + '/public/' + username);
    const data = await r.json();
    if (data.error) { showToast(data.error, 'error'); return; }
    state.publicProfile = data;
    state.page = 'publicProfile';
    render();
    setTimeout(() => {
      renderPublicEquityChart(data.equityCurve);
      renderPublicMonthlyChart(data.monthly);
    }, 50);
  } catch(e) { showToast('Profil introuvable', 'error'); }
}