// ═══════════════════════════════════════════════════════════
// RENDER ENGINE
// ═══════════════════════════════════════════════════════════
function render() {
  const app = document.getElementById('app');
  if (!state.user) { app.innerHTML = renderLoginPage(); return; }
  app.innerHTML = `
    <aside class="sidebar scrollbar-thin" id="sidebar">${renderSidebar()}</aside>
    <main class="main">
      <div class="topbar">
        <div class="hamburger" onclick="toggleSidebar()"><span></span><span></span><span></span></div>
        <div style="flex:1">
          <div class="topbar-title">${getPageTitle()}</div>
          <div class="topbar-subtitle">${new Date().toLocaleDateString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>
        </div>
        ${renderAccountSelector()}
        <button class="btn btn-primary" onclick="openAddTrade()">${ICONS.plus} Nouveau Trade</button>
      </div>
      <div class="page">${state.loading ? renderSkeleton() : renderPage()}</div>
    </main>
    ${state.modalOpen ? renderModal() : ''}
  `;
  if (!state.loading) { renderAllCharts(); renderCalendarHeatmap(); }
  attachListeners();
}

function renderLoginPage() {
  const isLogin = state.authTab !== 'register';
  const err = state.authError || '';
  const ok  = state.authSuccess || '';
  return `
    <div class="login-page">
      <div class="login-wrap">
        <div class="login-left">
          <div class="login-logo-wrap">
            <div class="login-logo-icon">${ICONS.logo}</div>
            <div class="login-brand">Private<span>Journal</span></div>
          </div>
          <p class="login-tagline">Le journal de trading pour traders sérieux. Analysez vos performances, identifiez vos erreurs, progressez.</p>
          <div class="features-list">
            ${['Equity curve & analytics en temps réel','Journal complet avec captures','Multi-comptes & prop firms','Stats par actif, setup, session','Heatmap & objectifs mensuels'].map(f=>`<div class="feature-item"><div class="feature-dot"></div><span>${f}</span></div>`).join('')}
          </div>
          <div class="login-footer-brand">PRIVATEJOURNAL</div>
        </div>
        <div class="login-right">
          <div class="auth-tabs">
            <div class="auth-tab ${isLogin?'active':''}" onclick="switchAuthTab('login')">Connexion</div>
            <div class="auth-tab ${!isLogin?'active':''}" onclick="switchAuthTab('register')">Inscription</div>
          </div>
          ${isLogin ? `
            <div class="auth-title">Bon retour</div>
            <div class="auth-sub">Connectez-vous à votre journal</div>
            ${err?`<div class="auth-error">${err}</div>`:''}
            ${ok ?`<div class="auth-success">${ok}</div>`:''}
            <div class="auth-form">
              <div class="input-group"><span class="input-icon">${ICONS.mail}</span><input class="auth-input" id="login-email" type="email" placeholder="Votre email" autocomplete="email" /></div>
              <div class="input-group"><span class="input-icon">${ICONS.lock}</span><input class="auth-input" id="login-password" type="password" placeholder="Mot de passe" autocomplete="current-password" onkeydown="if(event.key==='Enter')submitLogin()" /></div>
              <button class="auth-btn" id="login-btn" onclick="submitLogin()">Se connecter</button>
            </div>
          ` : `
            <div class="auth-title">Créer un compte ✨</div>
            <div class="auth-sub">Gratuit · Aucune carte requise</div>
            ${err?`<div class="auth-error">${err}</div>`:''}
            ${ok ?`<div class="auth-success">${ok}</div>`:''}
            <div class="auth-form">
              <div class="input-group"><span class="input-icon">${ICONS.user}</span><input class="auth-input" id="reg-username" type="text" placeholder="Votre pseudo" maxlength="40" autocomplete="username" /></div>
              <div class="input-group"><span class="input-icon">${ICONS.mail}</span><input class="auth-input" id="reg-email" type="email" placeholder="Votre email" autocomplete="email" /></div>
              <div class="input-group"><span class="input-icon">${ICONS.lock}</span><input class="auth-input" id="reg-password" type="password" placeholder="Mot de passe (min. 8 caractères)" oninput="checkPwdStrength(this.value)" autocomplete="new-password" onkeydown="if(event.key==='Enter')submitRegister()" /><div class="pwd-strength" id="pwd-strength"></div></div>
              <button class="auth-btn" id="reg-btn" onclick="submitRegister()">Créer mon compte</button>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

function renderSidebar() {
  const nav = [
    { id:'dashboard',   icon:ICONS.dashboard,   label:'Dashboard' },
    { id:'journal',     icon:ICONS.journal,     label:'Journal', badge:state.totalTrades>0?state.totalTrades:null },
    { id:'stats',       icon:ICONS.stats,       label:'Statistiques' },
    { id:'accounts',    icon:ICONS.accounts,    label:'Comptes', badge:state.accounts.length>0?state.accounts.length:null },
    { id:'goals',       icon:ICONS.goals,       label:'Objectifs' },
    { id:'leaderboard', icon:ICONS.leaderboard, label:'Classement' },
    { id:'public',      icon:ICONS.public,      label:'Journaux' },
    { id:'badges',      icon:ICONS.badges,      label:'Badges' },
    { id:'calculator',  icon:ICONS.calculator,  label:'Calculateur' },
  ];
  const u = state.user;
  return `
    <div class="sidebar-logo">
      <div class="logo-mark">
        <div class="logo-icon">${ICONS.logo}</div>
        <div class="logo-text">PrivateJournal</div>
      </div>
    </div>
    <div class="sidebar-user" onclick="setPage('goals')">
      ${u.avatar ? `<img class="avatar" src="${u.avatar}" onerror="this.style.display='none'" />` : `<div class="avatar-placeholder">${u.username.charAt(0).toUpperCase()}</div>`}
      <div class="user-info">
        <div class="name">${u.username}</div>
        <div class="status">Connecté</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-label">Navigation</div>
      ${nav.map(n=>`
        <div class="nav-item ${state.page===n.id?'active':''}" onclick="setPage('${n.id}')">
          <span class="nav-icon">${n.icon}</span>
          <span>${n.label}</span>
          ${n.badge?`<span class="nav-badge">${n.badge}</span>`:''}
        </div>
      `).join('')}
    </nav>
    <div class="sidebar-footer">
      <div class="nav-item" onclick="toggleTheme()">
        <span class="nav-icon" style="opacity:1;font-size:14px">${localStorage.getItem('pj_theme')==='light'?'☀️':'🌙'}</span>
        <span>${localStorage.getItem('pj_theme')==='light'?'Mode sombre':'Mode clair'}</span>
      </div>
      <div class="nav-item" onclick="openSettings()">
        <span class="nav-icon">${ICONS.settings}</span>
        <span>Paramètres</span>
      </div>
      <div class="nav-item" onclick="logout()" style="color:var(--red-3)">
        <span class="nav-icon">${ICONS.logout}</span>
        <span>Déconnexion</span>
      </div>
    </div>
  `;
}

function renderAccountSelector() {
  if (!state.accounts.length) return '';
  return `
    <select class="filter-input" onchange="changeAccount(this.value)" style="min-width:160px">
      <option value="all" ${state.selectedAccount==='all'?'selected':''}>Tous les comptes</option>
      ${state.accounts.map(a=>`<option value="${a._id}" ${state.selectedAccount===a._id?'selected':''}>${a.name}</option>`).join('')}
    </select>
  `;
}

function getPageTitle() {
  const titles = {
    dashboard:'Dashboard', journal:'Journal', stats:'Statistiques',
    accounts:'Comptes', goals:'Objectifs', leaderboard:'Classement',
    public:'Journaux Publics', publicProfile:'Profil Trader',
    badges:'Badges & Récompenses', calculator:'Calculateur',
  };
  return titles[state.page] || 'PrivateJournal';
}

function renderPage() {
  switch(state.page) {
    case 'dashboard':    return renderDashboard();
    case 'journal':      return renderJournal();
    case 'stats':        return renderStats();
    case 'accounts':     return renderAccounts();
    case 'goals':        return renderGoals();
    case 'leaderboard':  return renderLeaderboard();
    case 'public':       return renderPublicJournals();
    case 'publicProfile':return renderPublicProfile();
    case 'badges':       return renderBadges();
    case 'calculator':   return renderCalculator();
    default:             return renderDashboard();
  }
}

// ═══════════════════════════════════════════════════════════
// CALENDAR HEATMAP
// ═══════════════════════════════════════════════════════════
function renderCalendarHeatmap() {
  const el = document.getElementById('calendarHeatmap');
  if (!el) return;
  const cal = state.calendar;
  const year = new Date().getFullYear();
  const startDate = new Date(year, 0, 1);
  const cells = [];
  const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const monthPositions = [];
  let prevMonth = -1;

  for (let i = 0; i < 371; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i - startDate.getDay());
    const key = d.toISOString().split('T')[0];
    const data = cal[key];
    const month = d.getMonth();
    if (month !== prevMonth) { monthPositions.push({ month, col: Math.floor(i/7) }); prevMonth = month; }
    let color = 'var(--bg-3)';
    if (data) {
      const intensity = Math.min(1, Math.abs(data.pnl) / 200);
      color = data.pnl > 0 ? `rgba(16,185,129,${0.2+intensity*0.8})` : `rgba(239,68,68,${0.2+intensity*0.8})`;
    }
    cells.push({ key, data, color });
  }

  el.innerHTML = `
    <div style="overflow-x:auto;padding-bottom:8px">
      <div style="min-width:700px">
        <div style="display:flex;margin-bottom:4px;padding-left:30px">
          <div style="height:12px;position:relative;width:100%">
            ${monthPositions.map(({month,col})=>`<span style="position:absolute;left:${col*14}px;font-size:10px;color:var(--text-3)">${months[month]}</span>`).join('')}
          </div>
        </div>
        <div style="display:flex;gap:3px">
          <div style="display:flex;flex-direction:column;gap:3px">
            ${['D','L','M','M','J','V','S'].map(d=>`<div style="height:12px;font-size:9px;color:var(--text-3);width:16px;line-height:12px">${d}</div>`).join('')}
          </div>
          <div style="display:grid;grid-template-rows:repeat(7,12px);grid-auto-flow:column;gap:3px">
            ${cells.map(c=>`
              <div class="tooltip" style="width:12px;height:12px;border-radius:2px;background:${c.color};cursor:${c.data?'pointer':'default'}"
                ${c.data?`onmouseover="this.style.transform='scale(1.4)'" onmouseout="this.style.transform=''"`:''}>
                ${c.data?`<span class="tooltip-text">${c.key}<br>${c.data.pnl>0?'+':''}$${c.data.pnl.toFixed(2)}<br>${c.data.trades} trades</span>`:''}
              </div>
            `).join('')}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:10px;font-size:11px;color:var(--text-3)">
          <span>Moins</span>
          ${[0.1,0.3,0.5,0.7,0.9].map(o=>`<div style="width:10px;height:10px;border-radius:2px;background:rgba(16,185,129,${o})"></div>`).join('')}
          <span>Plus (gains)</span>
          <span style="margin-left:16px">Moins</span>
          ${[0.1,0.3,0.5,0.7,0.9].map(o=>`<div style="width:10px;height:10px;border-radius:2px;background:rgba(239,68,68,${o})"></div>`).join('')}
          <span>Plus (pertes)</span>
        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// MODALS
// ═══════════════════════════════════════════════════════════
function renderModal() {
  switch(state.modalType) {
    case 'addTrade':    return renderTradeModal(null);
    case 'editTrade':   return renderTradeModal(state.editTrade);
    case 'viewTrade':   return renderViewTradeModal(state.editTrade);
    case 'addAccount':  return renderAccountModal(null);
    case 'editAccount': return renderAccountModal(state.editAccount);
    case 'goals':       return renderGoalsModal();
    case 'importCSV':   return renderImportCSVModal();
    case 'settings':    return renderSettingsModal();
    default: return '';
  }
}

function renderTradeModal(trade) {
  const isEdit = !!trade;
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">${isEdit?'Modifier le Trade':'Nouveau Trade'}</div>
          <button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button>
        </div>
        <div class="modal-body">
          <form id="tradeForm" onsubmit="submitTrade(event)">
            <div class="form-grid">
              <div class="form-group"><label>Date *</label><input type="datetime-local" name="date" value="${trade?new Date(trade.date).toISOString().slice(0,16):new Date().toISOString().slice(0,16)}" required /></div>
              <div class="form-group"><label>Actif *</label><input name="asset" placeholder="ex: EURUSD, BTCUSD" value="${trade?.asset||''}" required /></div>
              <div class="form-group"><label>Type *</label><select name="type" required><option value="BUY" ${trade?.type==='BUY'?'selected':''}>BUY</option><option value="SELL" ${trade?.type==='SELL'?'selected':''}>SELL</option></select></div>
              <div class="form-group"><label>Statut</label><select name="status"><option value="WIN" ${trade?.status==='WIN'?'selected':''}>Win ✅</option><option value="LOSS" ${trade?.status==='LOSS'?'selected':''}>Loss ❌</option><option value="BE" ${trade?.status==='BE'?'selected':''}>Break Even ⚖️</option><option value="OPEN" ${trade?.status==='OPEN'||!trade?'selected':''}>Ouvert</option></select></div>
              <div class="form-group"><label>Prix d'entrée *</label><input type="number" step="any" name="entryPrice" placeholder="0.00000" value="${trade?.entryPrice||''}" required /></div>
              <div class="form-group"><label>Prix de sortie</label><input type="number" step="any" name="exitPrice" placeholder="0.00000" value="${trade?.exitPrice||''}" /></div>
              <div class="form-group"><label>Stop Loss</label><input type="number" step="any" name="stopLoss" placeholder="0.00000" value="${trade?.stopLoss||''}" /></div>
              <div class="form-group"><label>Take Profit</label><input type="number" step="any" name="takeProfit" placeholder="0.00000" value="${trade?.takeProfit||''}" /></div>
              <div class="form-group"><label>P&L ($)</label><input type="number" step="any" name="pnl" placeholder="0.00" value="${trade?.pnl||''}" /></div>
              <div class="form-group"><label>R:R</label><input type="number" step="any" name="rr" placeholder="1.5" value="${trade?.rr||''}" /></div>
              <div class="form-group"><label>Setup / Stratégie</label><input name="setup" placeholder="ex: Breakout, OB, FVG..." value="${trade?.setup||''}" /></div>
              <div class="form-group"><label>Timeframe</label><select name="timeframe"><option value="">—</option>${['M1','M5','M15','M30','H1','H4','D1','W1','MN'].map(tf=>`<option value="${tf}" ${trade?.timeframe===tf?'selected':''}>${tf}</option>`).join('')}</select></div>
              <div class="form-group"><label>Session</label><select name="session"><option value="">—</option>${['London','New York','Tokyo','Sydney','Other'].map(s=>`<option value="${s}" ${trade?.session===s?'selected':''}>${s}</option>`).join('')}</select></div>
              <div class="form-group"><label>Compte</label><select name="accountId"><option value="">Aucun</option>${state.accounts.map(a=>`<option value="${a._id}" ${trade?.accountId===a._id||trade?.accountId?._id===a._id?'selected':''}>${a.name}</option>`).join('')}</select></div>
              <div class="form-group"><label>Émotion</label><select name="emotion"><option value="">—</option>${['Confident','Anxious','Neutral','FOMO','Greedy','Patient'].map(e=>`<option value="${e}" ${trade?.emotion===e?'selected':''}>${e}</option>`).join('')}</select></div>
              <div class="form-group"><label>Tags</label><input name="tags" placeholder="breakout, tendance, setup-A" value="${trade?.tags?.join(', ')||''}" /></div>
              <div class="form-group full"><label>Notes</label><textarea name="notes" placeholder="Analyse du trade...">${trade?.notes||''}</textarea></div>
              <div class="form-group full">
                <label>📸 Screenshots</label>
                ${isEdit&&trade.screenshots?.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">${trade.screenshots.map(s=>`<img src="${s}" style="height:80px;border-radius:6px;border:1px solid var(--border);object-fit:cover;cursor:pointer" onclick="openImagePreview('${s}')" />`).join('')}</div>`:''}
                <div id="screenshot-preview" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px"></div>
                <input type="file" id="screenshot-input" accept="image/*" multiple style="display:none" onchange="uploadScreenshots(this)" />
                <button type="button" class="btn btn-ghost btn-sm" onclick="document.getElementById('screenshot-input').click()" style="width:100%;justify-content:center;border-style:dashed">📸 Ajouter des captures</button>
                <div id="upload-progress" style="font-size:11px;color:var(--text-3);margin-top:4px;text-align:center"></div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
          <button class="btn btn-primary" onclick="submitTrade(null,${isEdit?`'${trade._id}'`:'null'})">${isEdit?'Mettre à jour':'Enregistrer le Trade'}</button>
        </div>
      </div>
    </div>
  `;
}

function renderViewTradeModal(trade) {
  if (!trade) return '';
  const pnlClass = trade.pnl>0?'pnl-pos':trade.pnl<0?'pnl-neg':'pnl-neu';
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">
            <span style="font-family:var(--font-mono)">${trade.asset}</span>
            <span class="badge badge-${trade.type.toLowerCase()}" style="margin-left:10px">${trade.type}</span>
            <span class="badge badge-${trade.status?.toLowerCase()}" style="margin-left:6px">${trade.status}</span>
          </div>
          <button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button>
        </div>
        <div class="modal-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
            ${[
              {l:'Date',        v:new Date(trade.date).toLocaleString('fr-FR')},
              {l:'Compte',      v:trade.accountId?.name||'—'},
              {l:'Entrée',      v:trade.entryPrice?.toFixed(5)||'—',  mono:true},
              {l:'Sortie',      v:trade.exitPrice?.toFixed(5)||'—',   mono:true},
              {l:'Stop Loss',   v:trade.stopLoss?.toFixed(5)||'—',    mono:true, color:'var(--red-3)'},
              {l:'Take Profit', v:trade.takeProfit?.toFixed(5)||'—',  mono:true, color:'var(--emerald)'},
              {l:'Timeframe',   v:trade.timeframe||'—'},
              {l:'Session',     v:trade.session||'—'},
            ].map(f=>`<div style="padding:12px;background:var(--bg-2);border-radius:8px"><div style="font-size:10px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">${f.l}</div><div style="font-size:14px;color:${f.color||'var(--text-1)'};${f.mono?'font-family:var(--font-mono);':''}font-weight:500">${f.v}</div></div>`).join('')}
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px">
            <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center"><div style="font-size:10px;color:var(--text-3);text-transform:uppercase;margin-bottom:6px">P&L</div><div class="${pnlClass}" style="font-size:22px">${trade.pnl!=null?(trade.pnl>0?'+':'')+'$'+trade.pnl.toFixed(2):'—'}</div></div>
            <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center"><div style="font-size:10px;color:var(--text-3);text-transform:uppercase;margin-bottom:6px">R:R</div><div style="font-family:var(--font-mono);font-size:22px">${trade.rr?trade.rr.toFixed(2)+'R':'—'}</div></div>
            <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center"><div style="font-size:10px;color:var(--text-3);text-transform:uppercase;margin-bottom:6px">Suivi plan</div><div style="font-size:22px">${trade.followedPlan?'✅':'❌'}</div></div>
          </div>
          ${trade.setup?`<div style="margin-bottom:12px"><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Setup</span><div style="margin-top:4px;padding:8px 12px;background:var(--bg-2);border-radius:8px">${trade.setup}</div></div>`:''}
          ${trade.notes?`<div style="margin-bottom:12px"><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Notes</span><div style="margin-top:4px;padding:12px;background:var(--bg-2);border-radius:8px;font-size:14px;line-height:1.6;color:var(--text-2)">${trade.notes}</div></div>`:''}
          ${trade.screenshots?.length?`<div><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Captures</span><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">${trade.screenshots.map(s=>`<img src="${s}" style="height:120px;border-radius:8px;border:1px solid var(--border);cursor:pointer;object-fit:cover" onclick="openImagePreview('${s}')" />`).join('')}</div></div>`:''}
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" onclick="deleteTrade('${trade._id}');closeModal()">Supprimer</button>
          <button class="btn btn-ghost" onclick="closeModal()">Fermer</button>
          <button class="btn btn-primary" onclick="closeModal();openEditTrade('${trade._id}')">Modifier</button>
        </div>
      </div>
    </div>
  `;
}

function renderAccountModal(account) {
  const isEdit = !!account;
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="modal-header"><div class="modal-title">${isEdit?'Modifier le Compte':'Nouveau Compte'}</div><button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button></div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="form-group"><label>Nom du compte *</label><input id="acc-name" placeholder="ex: FTMO #12345" value="${account?.name||''}" /></div>
            <div class="form-group"><label>Broker / Prop Firm</label><input id="acc-broker" placeholder="ex: FTMO..." value="${account?.broker||''}" /></div>
            <div class="form-group"><label>Type</label><select id="acc-type">${['Demo','Live','Challenge','Funded','Prop'].map(t=>`<option value="${t}" ${account?.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
            <div class="form-group"><label>Devise</label><select id="acc-currency">${['USD','EUR','GBP','CHF','JPY'].map(c=>`<option value="${c}" ${account?.currency===c?'selected':''}>${c}</option>`).join('')}</select></div>
            <div class="form-group"><label>Capital Initial *</label><input type="number" id="acc-initial" placeholder="10000" value="${account?.initialBalance||''}" /></div>
            <div class="form-group"><label>Capital Actuel</label><input type="number" id="acc-current" placeholder="10000" value="${account?.currentBalance||''}" /></div>
            <div class="form-group"><label>Objectif ($)</label><input type="number" id="acc-target" placeholder="12000" value="${account?.target||''}" /></div>
            <div class="form-group"><label>Drawdown Max (%)</label><input type="number" id="acc-maxdd" placeholder="10" value="${account?.maxDrawdown||''}" /></div>
            <div class="form-group full"><label>Notes</label><textarea id="acc-notes">${account?.notes||''}</textarea></div>
          </div>
        </div>
        <div class="modal-footer">
          ${isEdit?`<button class="btn btn-danger" onclick="deleteAccount('${account._id}')">Supprimer</button>`:''}
          <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
          <button class="btn btn-primary" onclick="submitAccount(${isEdit?`'${account._id}'`:'null'})">${isEdit?'Mettre à jour':'Créer le Compte'}</button>
        </div>
      </div>
    </div>
  `;
}

function renderGoalsModal() {
  const u = state.user || {};
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:400px">
        <div class="modal-header"><div class="modal-title">Objectifs</div><button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button></div>
        <div class="modal-body">
          <div class="form-grid" style="grid-template-columns:1fr">
            <div class="form-group"><label>Objectif Mensuel ($)</label><input type="number" id="goal-monthly" placeholder="1000" value="${u.monthlyGoal||''}" /></div>
            <div class="form-group"><label>Objectif Annuel ($)</label><input type="number" id="goal-annual" placeholder="12000" value="${u.annualGoal||''}" /></div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
          <button class="btn btn-primary" onclick="saveGoals()">Enregistrer</button>
        </div>
      </div>
    </div>
  `;
}

function renderImportCSVModal() {
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:540px">
        <div class="modal-header"><div class="modal-title">📥 Import CSV</div><button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button></div>
        <div class="modal-body">
          <div class="form-group" style="margin-bottom:12px"><label>Compte (optionnel)</label><select id="import-account"><option value="">Aucun compte spécifique</option>${state.accounts.map(a=>`<option value="${a._id}">${a.name}</option>`).join('')}</select></div>
          <div class="form-group"><label>Données CSV</label><textarea id="csv-data" style="min-height:200px;font-family:var(--font-mono);font-size:12px" placeholder="date,asset,type,entryPrice,exitPrice,pnl,status"></textarea></div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
          <button class="btn btn-primary" onclick="importCSV()">Importer</button>
        </div>
      </div>
    </div>
  `;
}

function renderSettingsModal() {
  const u = state.user || {};
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:480px">
        <div class="modal-header"><div class="modal-title">Paramètres</div><button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button></div>
        <div class="modal-body">
          <div style="margin-bottom:24px">
            <div style="font-size:12px;font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Profil</div>
            <div class="form-grid" style="grid-template-columns:1fr">
              <div class="form-group"><label>Pseudo</label><input id="set-username" value="${u.username||''}" maxlength="40" /></div>
              <div class="form-group"><label>Email (lecture seule)</label><input value="${u.email||''}" disabled style="opacity:.5" /></div>
            </div>
            <button class="btn btn-ghost btn-sm" style="margin-top:10px" onclick="saveProfile()">Sauvegarder le profil</button>
          </div>
          <hr class="divider" />
          <div style="margin-bottom:24px">
            <div style="font-size:12px;font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Mot de passe</div>
            <div class="form-grid" style="grid-template-columns:1fr">
              <div class="form-group"><label>Mot de passe actuel</label><input type="password" id="set-current-pwd" placeholder="••••••••" /></div>
              <div class="form-group"><label>Nouveau mot de passe</label><input type="password" id="set-new-pwd" placeholder="Min. 8 caractères" /></div>
            </div>
            <button class="btn btn-ghost btn-sm" style="margin-top:10px" onclick="savePassword()">Changer le mot de passe</button>
          </div>
          <hr class="divider" />
          <div style="margin-bottom:24px">
            <div style="font-size:12px;font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Préférences</div>
            <div class="form-grid">
              <div class="form-group"><label>Devise</label><select id="set-currency">${['USD','EUR','GBP','CHF','JPY'].map(c=>`<option value="${c}" ${u.settings?.currency===c?'selected':''}>${c}</option>`).join('')}</select></div>
              <div class="form-group"><label>Risque par trade (%)</label><input type="number" id="set-risk" step="0.1" min="0" max="100" value="${u.settings?.riskPerTrade||1}" /></div>
            </div>
            <button class="btn btn-ghost btn-sm" style="margin-top:10px" onclick="savePreferences()">Sauvegarder</button>
          </div>
          <hr class="divider" />
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Visibilité</div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:var(--bg-2);border-radius:var(--radius);border:1px solid var(--border)">
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--text-1)">Journal Public</div>
                <div style="font-size:11px;color:var(--text-3);margin-top:2px">Vos stats et trades visibles par tous</div>
              </div>
              <div onclick="togglePublicJournal()" style="width:44px;height:24px;border-radius:24px;cursor:pointer;position:relative;transition:background .2s;background:${u.isPublic?'var(--red-2)':'var(--bg-4)'};border:1px solid ${u.isPublic?'var(--red-2)':'var(--border)'}">
                <div style="position:absolute;top:2px;left:${u.isPublic?'22px':'2px'};width:18px;height:18px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 4px rgba(0,0,0,.3)"></div>
              </div>
            </div>
            ${u.isPublic?`<div style="margin-top:8px;padding:8px 12px;background:rgba(229,57,53,.06);border:1px solid rgba(229,57,53,.15);border-radius:var(--radius);font-size:11px;color:var(--red-4)">🔗 <strong>${window.location.origin}?journal=${u.username}</strong></div>`:''}
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" onclick="if(confirm('Déconnexion ?'))logout()">Déconnexion</button>
          <button class="btn btn-ghost" onclick="closeModal()">Fermer</button>
        </div>
      </div>
    </div>
  `;
}

function renderSkeleton() {
  return `
    <div class="stats-grid" style="margin-bottom:24px">
      ${Array(8).fill(`<div class="stat-card"><div class="skeleton" style="height:12px;width:60%;margin-bottom:10px"></div><div class="skeleton" style="height:28px;width:80%;margin-bottom:8px"></div><div class="skeleton" style="height:10px;width:50%"></div></div>`).join('')}
    </div>
    <div class="card"><div class="skeleton" style="height:300px"></div></div>
  `;
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
async function init() {
  initTheme();
  const loggedIn = await loadUser();
  if (loggedIn) {
    await loadAll();
  } else {
    state.loading = false;
    render();
  }
}

init();