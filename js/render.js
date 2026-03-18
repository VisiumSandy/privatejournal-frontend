// ═══════════════════════════════════════════════════════════
// SVG ICONS
// ═══════════════════════════════════════════════════════════
const ICONS = {
  logo:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  dashboard:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  journal:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  stats:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  accounts:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
  goals:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  leaderboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
  settings:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  logout:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  plus:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  upload:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  close:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  user:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mail:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  lock:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  empty:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
};

// ═══════════════════════════════════════════════════════════
// RENDER ENGINE
// ═══════════════════════════════════════════════════════════
function render() {
  const app = document.getElementById('app');
  if (!state.user) { app.innerHTML = renderLoginPage(); return; }
  app.innerHTML = `
    <aside class="sidebar scrollbar-thin" id="sidebar">
      ${renderSidebar()}
    </aside>
    <main class="main">
      <div class="topbar">
        <div class="hamburger" onclick="toggleSidebar()">
          <span></span><span></span><span></span>
        </div>
        <div style="flex:1">
          <div class="topbar-title">${getPageTitle()}</div>
          <div class="topbar-subtitle">${new Date().toLocaleDateString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>
        </div>
        ${renderAccountSelector()}
        <button class="btn btn-primary" onclick="openAddTrade()">
          ${ICONS.plus}
          Nouveau Trade
        </button>
      </div>
      <div class="page">
        ${state.loading ? renderSkeleton() : renderPage()}
      </div>
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
            ${['Equity curve & analytics en temps réel','Journal complet avec captures','Multi-comptes & prop firms','Stats par actif, setup, session','Heatmap & objectifs mensuels'].map(f => `<div class="feature-item"><div class="feature-dot"></div><span>${f}</span></div>`).join('')}
          </div>
          <div class="login-footer-brand">PRIVATEJOURNAL</div>
        </div>
        <div class="login-right">
          <div class="auth-tabs">
            <div class="auth-tab ${isLogin ? 'active' : ''}" onclick="switchAuthTab('login')">Connexion</div>
            <div class="auth-tab ${!isLogin ? 'active' : ''}" onclick="switchAuthTab('register')">Inscription</div>
          </div>
          ${isLogin ? `
            <div class="auth-title">Bon retour</div>
            <div class="auth-sub">Connectez-vous à votre journal</div>
            ${err ? `<div class="auth-error">${err}</div>` : ''}
            ${ok  ? `<div class="auth-success">${ok}</div>` : ''}
            <div class="auth-form">
              <div class="input-group">
                <span class="input-icon">${ICONS.mail}</span>
                <input class="auth-input" id="login-email" type="email" placeholder="Votre email" autocomplete="email" />
              </div>
              <div class="input-group">
                <span class="input-icon">${ICONS.lock}</span>
                <input class="auth-input" id="login-password" type="password" placeholder="Mot de passe" autocomplete="current-password" onkeydown="if(event.key==='Enter')submitLogin()" />
              </div>
              <button class="auth-btn" id="login-btn" onclick="submitLogin()">Se connecter</button>
            </div>
          ` : `
            <div class="auth-title">Créer un compte ✨</div>
            <div class="auth-sub">Gratuit · Aucune carte requise</div>
            ${err ? `<div class="auth-error">${err}</div>` : ''}
            ${ok  ? `<div class="auth-success">${ok}</div>` : ''}
            <div class="auth-form">
              <div class="input-group">
                <span class="input-icon">${ICONS.user}</span>
                <input class="auth-input" id="reg-username" type="text" placeholder="Votre pseudo" maxlength="40" autocomplete="username" />
              </div>
              <div class="input-group">
                <span class="input-icon">${ICONS.mail}</span>
                <input class="auth-input" id="reg-email" type="email" placeholder="Votre email" autocomplete="email" />
              </div>
              <div class="input-group">
                <span class="input-icon">${ICONS.lock}</span>
                <input class="auth-input" id="reg-password" type="password" placeholder="Mot de passe (min. 8 caractères)" oninput="checkPwdStrength(this.value)" autocomplete="new-password" onkeydown="if(event.key==='Enter')submitRegister()" />
                <div class="pwd-strength" id="pwd-strength"></div>
              </div>
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
    { id: 'dashboard',   icon: ICONS.dashboard,   label: 'Dashboard' },
    { id: 'journal',     icon: ICONS.journal,     label: 'Journal', badge: state.totalTrades > 0 ? state.totalTrades : null },
    { id: 'stats',       icon: ICONS.stats,       label: 'Statistiques' },
    { id: 'accounts',    icon: ICONS.accounts,    label: 'Comptes', badge: state.accounts.length > 0 ? state.accounts.length : null },
    { id: 'goals',       icon: ICONS.goals,       label: 'Objectifs' },
    { id: 'leaderboard', icon: ICONS.leaderboard, label: 'Classement' },
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
      ${nav.map(n => `
        <div class="nav-item ${state.page === n.id ? 'active' : ''}" onclick="setPage('${n.id}')">
          <span class="nav-icon">${n.icon}</span>
          <span>${n.label}</span>
          ${n.badge ? `<span class="nav-badge">${n.badge}</span>` : ''}
        </div>
      `).join('')}
    </nav>
    <div class="sidebar-footer">
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
      ${state.accounts.map(a => `<option value="${a._id}" ${state.selectedAccount===a._id?'selected':''}>${a.name}</option>`).join('')}
    </select>
  `;
}

function getPageTitle() {
  const titles = {
    dashboard:   'Dashboard',
    journal:     'Journal',
    stats:       'Statistiques',
    accounts:    'Comptes',
    goals:       'Objectifs',
    leaderboard: 'Classement',
  };
  return titles[state.page] || 'PrivateJournal';
}

function renderPage() {
  switch(state.page) {
    case 'dashboard':   return renderDashboard();
    case 'journal':     return renderJournal();
    case 'stats':       return renderStats();
    case 'accounts':    return renderAccounts();
    case 'goals':       return renderGoals();
    case 'leaderboard': return renderLeaderboard();
    default:            return renderDashboard();
  }
}

// ═══════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════
function renderDashboard() {
  const s = state.stats || {};
  const pnlColor    = s.totalPnl > 0 ? 'var(--emerald)' : s.totalPnl < 0 ? 'var(--red-3)' : 'var(--amber)';
  const winrateColor = s.winrate >= 60 ? 'var(--emerald)' : s.winrate >= 45 ? 'var(--amber)' : 'var(--red-3)';

  const statCards = [
    { label:'Winrate',       value: s.winrate ? s.winrate.toFixed(1)+'%' : '—',                                         sub:`${s.wins||0}W / ${s.losses||0}L`,      accent:winrateColor },
    { label:'P&L Total',     value: s.totalPnl ? (s.totalPnl>0?'+':'')+'$'+Math.abs(s.totalPnl).toLocaleString() : '$0', sub:`${s.totalTrades||0} trades clôturés`,  accent:pnlColor },
    { label:'Profit Factor', value: s.profitFactor ? (s.profitFactor===Infinity?'∞':s.profitFactor.toFixed(2)) : '—',    sub:'Objectif: > 1.5',                       accent:s.profitFactor>=1.5?'var(--emerald)':'var(--red-3)' },
    { label:'R:R Moyen',     value: s.avgRR ? s.avgRR.toFixed(2)+'R' : '—',                                             sub:'Risk/Reward ratio',                     accent:s.avgRR>=1.5?'var(--emerald)':'var(--amber)' },
    { label:'Drawdown Max',  value: s.maxDrawdown ? '-$'+s.maxDrawdown.toLocaleString() : '$0',                          sub:'Pire récession',                        accent:'var(--red-3)' },
    { label:'Expectancy',    value: s.expectancy ? (s.expectancy>0?'+':'')+'$'+s.expectancy.toFixed(2) : '—',            sub:'Par trade',                             accent:s.expectancy>0?'var(--emerald)':'var(--red-3)' },
    { label:'Gain Moyen',    value: s.avgWin ? '+$'+s.avgWin.toFixed(2) : '—',                                          sub:'Par trade gagnant',                     accent:'var(--emerald)' },
    { label:'Perte Moyenne', value: s.avgLoss ? '-$'+s.avgLoss.toFixed(2) : '—',                                        sub:'Par trade perdant',                     accent:'var(--red-3)' },
  ];

  return `
    <div class="stats-grid">
      ${statCards.map(c => `
        <div class="stat-card" style="--accent:${c.accent}">
          <div class="stat-label">${c.label}</div>
          <div class="stat-value" style="color:${c.accent}">${c.value}</div>
          <div class="stat-sub">${c.sub}</div>
        </div>
      `).join('')}
    </div>

    <div class="charts-grid">
      <div class="card card-glow">
        <div class="card-header">
          <div class="card-title">Equity Curve</div>
          <span style="font-size:12px;color:var(--text-2)">${state.equityCurve.length} points</span>
        </div>
        <div class="chart-wrap">
          ${state.equityCurve.length ? `<canvas id="equityChart"></canvas>` : `<div class="empty-state"><div class="empty-icon">${ICONS.stats}</div><div class="empty-text">Aucune donnée</div><div class="empty-sub">Ajoutez vos trades pour voir l'equity curve</div></div>`}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">Répartition</div></div>
        <div class="chart-wrap">
          ${s.totalTrades ? `<canvas id="winlossChart"></canvas>` : `<div class="empty-state"><div class="empty-icon">${ICONS.goals}</div><div class="empty-text">Aucune donnée</div></div>`}
        </div>
      </div>
    </div>

    <div class="charts-grid">
      <div class="card card-glow">
        <div class="card-header"><div class="card-title">Performance Mensuelle</div></div>
        <div class="chart-wrap">
          ${state.monthly.length ? `<canvas id="monthlyChart"></canvas>` : `<div class="empty-state"><div class="empty-icon">${ICONS.journal}</div><div class="empty-text">Aucune donnée</div></div>`}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">Performance par Jour</div></div>
        <div class="chart-wrap">
          ${state.byWeekday.some(d=>d.trades>0) ? `<canvas id="weekdayChart"></canvas>` : `<div class="empty-state"><div class="empty-icon">${ICONS.dashboard}</div><div class="empty-text">Aucune donnée</div></div>`}
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:24px">
      <div class="card-header">
        <div class="card-title">Heatmap Calendrier ${new Date().getFullYear()}</div>
      </div>
      <div id="calendarHeatmap"></div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Trades Récents</div>
        <button class="btn btn-ghost btn-sm" onclick="setPage('journal')">Voir tout</button>
      </div>
      <div class="table-wrap">
        ${renderTradeTable(state.trades.slice(0, 8), false)}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// JOURNAL
// ═══════════════════════════════════════════════════════════
function renderJournal() {
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <div style="font-size:13px;color:var(--text-2)">${state.totalTrades} trades au total</div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-ghost btn-sm" onclick="openImportCSV()">
          ${ICONS.upload} Import CSV
        </button>
        <button class="btn btn-primary" onclick="openAddTrade()">
          ${ICONS.plus} Nouveau Trade
        </button>
      </div>
    </div>
    <div class="card" style="margin-bottom:16px;padding:16px">
      <div class="filters">
        <input class="filter-input" placeholder="Rechercher..." value="${state.filters.search}" oninput="updateFilter('search',this.value)" style="flex:1;min-width:200px" />
        <input class="filter-input" placeholder="Actif (ex: EURUSD)" value="${state.filters.asset}" oninput="updateFilter('asset',this.value)" style="width:160px" />
        <select class="filter-input" onchange="updateFilter('type',this.value)">
          <option value="">Tous types</option>
          <option value="BUY"  ${state.filters.type==='BUY' ?'selected':''}>BUY</option>
          <option value="SELL" ${state.filters.type==='SELL'?'selected':''}>SELL</option>
        </select>
        <select class="filter-input" onchange="updateFilter('status',this.value)">
          <option value="">Tous statuts</option>
          <option value="WIN"  ${state.filters.status==='WIN' ?'selected':''}>Win</option>
          <option value="LOSS" ${state.filters.status==='LOSS'?'selected':''}>Loss</option>
          <option value="BE"   ${state.filters.status==='BE'  ?'selected':''}>Break Even</option>
          <option value="OPEN" ${state.filters.status==='OPEN'?'selected':''}>Ouvert</option>
        </select>
        <input type="date" class="filter-input" value="${state.filters.from}" onchange="updateFilter('from',this.value)" />
        <input type="date" class="filter-input" value="${state.filters.to}"   onchange="updateFilter('to',this.value)" />
        <button class="btn btn-ghost btn-sm" onclick="clearFilters()">Reset</button>
      </div>
    </div>
    <div class="card" style="padding:0;overflow:hidden">
      <div class="table-wrap">${renderTradeTable(state.trades, true)}</div>
    </div>
    ${state.totalTrades > 50 ? `
      <div style="display:flex;justify-content:center;gap:10px;margin-top:16px">
        <button class="btn btn-ghost btn-sm" onclick="changePage(${state.page_num-1})" ${state.page_num<=1?'disabled':''}>← Précédent</button>
        <span style="padding:6px 16px;background:var(--bg-2);border-radius:8px;font-size:13px">Page ${state.page_num} / ${Math.ceil(state.totalTrades/50)}</span>
        <button class="btn btn-ghost btn-sm" onclick="changePage(${state.page_num+1})" ${state.page_num>=Math.ceil(state.totalTrades/50)?'disabled':''}>Suivant →</button>
      </div>
    ` : ''}
  `;
}

function renderTradeTable(trades, withActions) {
  if (!trades.length) return `<div class="empty-state"><div class="empty-icon">${ICONS.empty}</div><div class="empty-text">Aucun trade trouvé</div><div class="empty-sub">Ajoutez votre premier trade pour commencer</div></div>`;
  return `
    <table>
      <thead>
        <tr>
          <th>Date</th><th>Actif</th><th>Type</th><th>Setup</th>
          <th>Entrée</th><th>SL</th><th>TP</th><th>P&L</th><th>R:R</th><th>Statut</th>
          ${withActions ? '<th>Actions</th>' : ''}
        </tr>
      </thead>
      <tbody>
        ${trades.map(t => `
          <tr onclick="openViewTrade('${t._id}')">
            <td>${new Date(t.date).toLocaleDateString('fr-FR')}</td>
            <td style="font-family:var(--font-mono);font-weight:600;color:var(--text-1)">${t.asset}</td>
            <td><span class="badge badge-${t.type.toLowerCase()}">${t.type}</span></td>
            <td style="color:var(--text-2);max-width:120px;overflow:hidden;text-overflow:ellipsis">${t.setup||'—'}</td>
            <td style="font-family:var(--font-mono)">${t.entryPrice?.toFixed(5)||'—'}</td>
            <td style="font-family:var(--font-mono);color:var(--red-3)">${t.stopLoss?.toFixed(5)||'—'}</td>
            <td style="font-family:var(--font-mono);color:var(--emerald)">${t.takeProfit?.toFixed(5)||'—'}</td>
            <td class="${t.pnl>0?'pnl-pos':t.pnl<0?'pnl-neg':'pnl-neu'}">${t.pnl!=null?(t.pnl>0?'+':'')+'$'+t.pnl.toFixed(2):'—'}</td>
            <td style="font-family:var(--font-mono)">${t.rr?t.rr.toFixed(2)+'R':'—'}</td>
            <td><span class="badge badge-${t.status?.toLowerCase()}">${t.status||'OPEN'}</span></td>
            ${withActions ? `
              <td onclick="event.stopPropagation()">
                <div style="display:flex;gap:6px">
                  <button class="btn btn-ghost btn-icon btn-sm" onclick="openEditTrade('${t._id}')">${ICONS.edit}</button>
                  <button class="btn btn-danger btn-icon btn-sm" onclick="deleteTrade('${t._id}')">${ICONS.trash}</button>
                </div>
              </td>
            ` : ''}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// ═══════════════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════════════
function renderStats() {
  const s = state.stats || {};
  return `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px">
      ${[
        { l:'Série de gains max',  v:s.maxWinStreak||'—',  c:'var(--emerald)' },
        { l:'Série de pertes max', v:s.maxLossStreak||'—', c:'var(--red-3)' },
        { l:'Série actuelle',      v:s.currentStreak?(s.currentStreak>0?'+'+s.currentStreak:s.currentStreak):'—', c:s.currentStreak>0?'var(--emerald)':s.currentStreak<0?'var(--red-3)':'var(--text-2)' },
        { l:'Expectancy',          v:s.expectancy?(s.expectancy>0?'+':'')+'$'+s.expectancy.toFixed(2):'—', c:s.expectancy>0?'var(--emerald)':'var(--red-3)' },
      ].map(x=>`<div class="stat-card" style="--accent:${x.c}"><div class="stat-label">${x.l}</div><div class="stat-value" style="color:${x.c}">${x.v}</div></div>`).join('')}
    </div>
    <div class="charts-grid" style="margin-bottom:24px">
      <div class="card card-glow">
        <div class="card-header"><div class="card-title">Performance par Actif</div></div>
        <div class="chart-wrap">
          ${state.byAsset.length ? `<canvas id="assetChart"></canvas>` : `<div class="empty-state"><div class="empty-text">Aucune donnée</div></div>`}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">Distribution R:R</div></div>
        <div class="chart-wrap"><canvas id="rrChart"></canvas></div>
      </div>
    </div>
    <div class="charts-grid-3" style="margin-bottom:24px">
      ${[
        { title:'Winrate par Actif', data:state.byAsset },
        { title:'Winrate par Setup', data:state.bySetup },
      ].map(({ title, data }) => `
        <div class="card">
          <div class="card-header"><div class="card-title">${title}</div></div>
          ${data.length ? `
            <div style="display:flex;flex-direction:column;gap:10px;max-height:300px;overflow-y:auto" class="scrollbar-thin">
              ${data.map(item => `
                <div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:13px">
                    <span style="color:var(--text-1);font-weight:600;font-family:var(--font-mono)">${item.asset||item.setup}</span>
                    <span style="color:${item.winrate>=50?'var(--emerald)':'var(--red-3)'};font-weight:700">${item.winrate}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width:${item.winrate}%;background:${item.winrate>=50?'linear-gradient(90deg,var(--emerald),#34d399)':'linear-gradient(90deg,var(--red-3),#f87171)'}"></div>
                  </div>
                  <div style="font-size:11px;color:var(--text-3);margin-top:3px">${item.trades} trades · ${item.pnl>=0?'+':''}$${item.pnl.toFixed(2)}</div>
                </div>
              `).join('')}
            </div>
          ` : `<div class="empty-state" style="padding:20px"><div class="empty-text">Aucune donnée</div></div>`}
        </div>
      `).join('')}
      <div class="card">
        <div class="card-header"><div class="card-title">Résumé Mensuel</div></div>
        ${state.monthly.length ? `
          <div style="display:flex;flex-direction:column;gap:8px;max-height:300px;overflow-y:auto" class="scrollbar-thin">
            ${[...state.monthly].reverse().slice(0,12).map(m => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--bg-2);border-radius:8px">
                <span style="font-family:var(--font-mono);font-size:12px;color:var(--text-2)">${m.month}</span>
                <span style="font-size:12px;color:var(--text-2)">${m.trades} trades</span>
                <span style="font-family:var(--font-mono);font-weight:600;color:${m.pnl>=0?'var(--emerald)':'var(--red-3)'}">${m.pnl>=0?'+':''}$${m.pnl.toFixed(2)}</span>
                <span style="font-size:11px;background:${m.winrate>=50?'rgba(16,185,129,.1)':'rgba(239,68,68,.1)'};color:${m.winrate>=50?'var(--emerald)':'var(--red-3)'};padding:2px 6px;border-radius:4px">${m.winrate}%</span>
              </div>
            `).join('')}
          </div>
        ` : `<div class="empty-state" style="padding:20px"><div class="empty-text">Aucune donnée</div></div>`}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// ACCOUNTS
// ═══════════════════════════════════════════════════════════
function renderAccounts() {
  const typeColors = { Demo:'#3b82f6', Live:'#10b981', Challenge:'#f59e0b', Funded:'#8b5cf6', Prop:'#06b6d4' };
  return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:20px">
      <button class="btn btn-primary" onclick="openAddAccount()">${ICONS.plus} Nouveau Compte</button>
    </div>
    ${!state.accounts.length ? `
      <div class="empty-state">
        <div class="empty-icon">${ICONS.accounts}</div>
        <div class="empty-text">Aucun compte configuré</div>
        <div class="empty-sub">Ajoutez vos comptes de trading pour suivre chacun séparément</div>
      </div>
    ` : `
      <div class="account-grid">
        ${state.accounts.map(a => {
          const pnl = a.currentBalance - a.initialBalance;
          const pnlPct = ((pnl / a.initialBalance) * 100).toFixed(2);
          const progress = a.target ? Math.min(100, (a.currentBalance / a.target * 100)) : 0;
          return `
            <div class="account-card" onclick="openEditAccount('${a._id}')">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
                <div>
                  <div style="font-family:var(--font-head);font-size:17px;font-weight:700">${a.name}</div>
                  <div style="font-size:12px;color:var(--text-2);margin-top:2px">${a.broker||'Broker non défini'}</div>
                </div>
                <span class="account-type" style="background:${typeColors[a.type]||'#3b82f6'}22;color:${typeColors[a.type]||'#3b82f6'}">${a.type}</span>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
                <div>
                  <div style="font-size:10px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Capital Initial</div>
                  <div style="font-family:var(--font-mono);font-size:15px;margin-top:3px">${a.currency} ${a.initialBalance.toLocaleString()}</div>
                </div>
                <div>
                  <div style="font-size:10px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Capital Actuel</div>
                  <div style="font-family:var(--font-mono);font-size:15px;margin-top:3px">${a.currency} ${a.currentBalance.toLocaleString()}</div>
                </div>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--bg-2);border-radius:8px;margin-bottom:12px">
                <span style="font-size:12px;color:var(--text-2)">P&L</span>
                <span class="pnl-${pnl>=0?'pos':pnl<0?'neg':'neu'}" style="font-size:15px">${pnl>=0?'+':''}${a.currency} ${pnl.toFixed(2)} <span style="font-size:11px;opacity:.7">(${pnl>=0?'+':''}${pnlPct}%)</span></span>
              </div>
              ${a.target ? `
                <div>
                  <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-3);margin-bottom:4px">
                    <span>Objectif: ${a.currency} ${a.target.toLocaleString()}</span><span>${progress.toFixed(1)}%</span>
                  </div>
                  <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

// ═══════════════════════════════════════════════════════════
// GOALS
// ═══════════════════════════════════════════════════════════
function renderGoals() {
  const u = state.user || {};
  const now = new Date();
  const monthKey = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  const currentMonthData = state.monthly.find(m => m.month === monthKey) || { pnl:0, trades:0, winrate:0 };
  const monthProgress = u.monthlyGoal > 0 ? Math.min(100, (currentMonthData.pnl / u.monthlyGoal) * 100) : 0;
  const yearPnl = state.monthly.filter(m => m.month.startsWith(now.getFullYear().toString())).reduce((s,m)=>s+m.pnl,0);
  const yearProgress = u.annualGoal > 0 ? Math.min(100, (yearPnl / u.annualGoal) * 100) : 0;

  return `
    <div class="charts-grid" style="margin-bottom:24px">
      <div class="card card-glow">
        <div class="card-header">
          <div class="card-title">Objectif Mensuel — ${now.toLocaleDateString('fr-FR',{month:'long',year:'numeric'})}</div>
          <button class="btn btn-ghost btn-sm" onclick="openGoalsEdit()">Modifier</button>
        </div>
        <div style="padding:10px 0">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:16px">
            <div>
              <div style="font-family:var(--font-mono);font-size:36px;font-weight:500;color:${currentMonthData.pnl>=0?'var(--emerald)':'var(--red-3)'}">${currentMonthData.pnl>=0?'+':''}$${currentMonthData.pnl.toFixed(2)}</div>
              <div style="font-size:12px;color:var(--text-2);margin-top:4px">${currentMonthData.trades} trades ce mois · ${currentMonthData.winrate}% winrate</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:13px;color:var(--text-2)">Objectif</div>
              <div style="font-family:var(--font-mono);font-size:22px">$${(u.monthlyGoal||0).toLocaleString()}</div>
            </div>
          </div>
          <div class="progress-bar" style="height:12px">
            <div class="progress-fill" style="width:${Math.max(0,monthProgress)}%"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:12px;color:var(--text-2)">
            <span>${monthProgress.toFixed(1)}% atteint</span>
            ${monthProgress>=100 ? '<span style="color:var(--emerald)">Objectif atteint !</span>' : `<span>Reste: $${Math.max(0,(u.monthlyGoal||0)-currentMonthData.pnl).toFixed(2)}</span>`}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">Objectif Annuel — ${now.getFullYear()}</div></div>
        <div style="padding:10px 0">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:16px">
            <div>
              <div style="font-family:var(--font-mono);font-size:36px;font-weight:500;color:${yearPnl>=0?'var(--emerald)':'var(--red-3)'}">${yearPnl>=0?'+':''}$${yearPnl.toFixed(2)}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:13px;color:var(--text-2)">Objectif</div>
              <div style="font-family:var(--font-mono);font-size:22px">$${(u.annualGoal||0).toLocaleString()}</div>
            </div>
          </div>
          <div class="progress-bar" style="height:12px">
            <div class="progress-fill" style="width:${Math.max(0,yearProgress)}%"></div>
          </div>
          <div style="font-size:12px;color:var(--text-2);margin-top:6px">${yearProgress.toFixed(1)}% de l'objectif annuel</div>
        </div>
      </div>
    </div>
    <div class="card card-glow">
      <div class="card-header"><div class="card-title">Historique des Performances Mensuelles</div></div>
      <div class="chart-wrap" style="height:240px">
        ${state.monthly.length ? `<canvas id="monthlyChart"></canvas>` : `<div class="empty-state"><div class="empty-text">Aucune donnée</div></div>`}
      </div>
    </div>
    <div style="margin-top:24px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
      ${state.monthly.length ? [
        { l:'Meilleur mois', v:'+$'+[...state.monthly].sort((a,b)=>b.pnl-a.pnl)[0].pnl.toFixed(2), c:'var(--emerald)', sub:[...state.monthly].sort((a,b)=>b.pnl-a.pnl)[0].month },
        { l:'Pire mois',     v:'$' +[...state.monthly].sort((a,b)=>a.pnl-b.pnl)[0].pnl.toFixed(2), c:'var(--red-3)',   sub:[...state.monthly].sort((a,b)=>a.pnl-b.pnl)[0].month },
        { l:'Mois rentables',v:`${state.monthly.filter(m=>m.pnl>0).length}/${state.monthly.length}`,c:'var(--blue)',    sub:`${(state.monthly.filter(m=>m.pnl>0).length/state.monthly.length*100).toFixed(0)}% des mois` },
      ].map(x=>`<div class="stat-card" style="--accent:${x.c}"><div class="stat-label">${x.l}</div><div class="stat-value" style="color:${x.c}">${x.v}</div><div class="stat-sub">${x.sub}</div></div>`).join('') : ''}
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// LEADERBOARD
// ═══════════════════════════════════════════════════════════
function renderLeaderboard() {
  const data = state.leaderboard || [];

  if (!data.length) {
    return `
      <div class="empty-state" style="padding:80px 20px">
        <div style="font-size:56px;margin-bottom:16px">🏆</div>
        <div class="empty-text">Aucun trader classé</div>
        <div class="empty-sub">Les traders apparaîtront ici une fois qu'ils auront enregistré des trades</div>
      </div>
    `;
  }

  const top3 = data.slice(0, 3);

  // Ordre podium : 2e gauche · 1er centre · 3e droite
  const podiumOrder = top3.length >= 3
    ? [{ t: top3[1], rank: 2 }, { t: top3[0], rank: 1 }, { t: top3[2], rank: 3 }]
    : top3.map((t, i) => ({ t, rank: i + 1 }));

  const medals  = { 1:'🥇', 2:'🥈', 3:'🥉' };
  const nameFg  = { 1:'#f0c040', 2:'#b0bec5', 3:'#cd7f32' };
  const cardBg  = { 1:'rgba(240,192,64,.06)', 2:'rgba(176,190,197,.04)', 3:'rgba(205,127,50,.04)' };
  const cardBdr = { 1:'rgba(240,192,64,.3)',  2:'rgba(176,190,197,.18)', 3:'rgba(205,127,50,.18)' };
  const padTop  = { 1:'36px', 2:'20px', 3:'16px' };

  function fmtPnl(v) {
    return (v > 0 ? '+' : '') + '$' + Math.abs(v).toLocaleString('fr-FR', { minimumFractionDigits:2, maximumFractionDigits:2 });
  }

  function avatarColor(u) {
    const p = ['#c0392b','#2980b9','#27ae60','#8e44ad','#e67e22','#16a085','#2c3e50','#d35400'];
    return p[u.charCodeAt(0) % p.length];
  }

  return `
    <!-- Header -->
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:36px;flex-wrap:wrap;gap:12px">
      <div>
        <div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--red-3);font-family:var(--font-mono);margin-bottom:6px">Hall of Fame</div>
        <div style="font-family:var(--font-head);font-size:clamp(22px,3vw,34px);font-weight:800;letter-spacing:-0.02em">Classement Traders</div>
      </div>
      <div style="font-size:12px;color:var(--text-3);font-family:var(--font-mono)">${data.length} trader${data.length>1?'s':''} classé${data.length>1?'s':''}</div>
    </div>

    <!-- Podium -->
    <div style="display:flex;align-items:flex-end;justify-content:center;gap:12px;margin-bottom:32px;flex-wrap:wrap">
      ${podiumOrder.map(({ t, rank }) => `
        <div style="
          flex:1;max-width:300px;min-width:180px;
          background:${cardBg[rank]};border:1px solid ${cardBdr[rank]};
          border-radius:14px;padding:${padTop[rank]} 18px 20px;
          text-align:center;transition:transform .2s,box-shadow .2s;cursor:default"
          onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(0,0,0,.5)'"
          onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="font-size:42px;margin-bottom:10px">${medals[rank]}</div>
          <div style="display:flex;justify-content:center;margin-bottom:10px">
            <div style="width:46px;height:46px;border-radius:50%;background:${avatarColor(t.username)};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:17px;color:#fff">${t.username.charAt(0).toUpperCase()}</div>
          </div>
          <div style="font-family:var(--font-head);font-size:16px;font-weight:700;color:${nameFg[rank]};margin-bottom:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.username}</div>
          <div style="display:flex;flex-direction:column;gap:7px">
            ${[
              { label:'PnL',     value:fmtPnl(t.totalPnl),  color:t.totalPnl>=0?'var(--emerald)':'var(--red-3)' },
              { label:'Trades',  value:t.totalTrades,        color:'var(--text-1)' },
              { label:'Winrate', value:t.winrate+'%',        color:t.winrate>=50?'var(--emerald)':'var(--red-3)' },
            ].map(s=>`
              <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 10px;background:rgba(255,255,255,.03);border-radius:7px">
                <span style="font-size:10px;color:var(--text-3);font-family:var(--font-mono)">${s.label}</span>
                <span style="font-size:13px;font-weight:700;font-family:var(--font-mono);color:${s.color}">${s.value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Tableau complet -->
    <div class="card" style="padding:0;overflow:hidden">
      <div style="padding:14px 20px 12px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <div class="card-title">Classement complet</div>
        <div style="display:flex;gap:6px">
          ${[['totalPnl','💰 Gains'],['totalTrades','📊 Trades'],['winrate','🎯 Winrate']].map(([key, label], i) => `
            <button
              class="btn btn-ghost btn-sm lb-sort-btn${i===0?' lb-active':''}"
              data-sort="${key}"
              onclick="sortLeaderboard('${key}',this)"
              style="${i===0?'background:var(--bg-3);color:var(--text-1);border-color:var(--border-hover)':''}"
            >${label}</button>
          `).join('')}
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width:48px">#</th>
              <th>Trader</th>
              <th>PnL Total</th>
              <th>Trades</th>
              <th>Winrate</th>
              <th>Membre depuis</th>
            </tr>
          </thead>
          <tbody id="lb-tbody">
            ${renderLbRows(data)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderLbRows(data) {
  function fmtPnl(v) {
    return (v > 0 ? '+' : '') + '$' + Math.abs(v).toLocaleString('fr-FR', { minimumFractionDigits:2, maximumFractionDigits:2 });
  }
  function avatarColor(u) {
    const p = ['#c0392b','#2980b9','#27ae60','#8e44ad','#e67e22','#16a085','#2c3e50','#d35400'];
    return p[u.charCodeAt(0) % p.length];
  }

  const badgeBg = ['rgba(240,192,64,.12)','rgba(176,190,197,.1)','rgba(205,127,50,.1)'];
  const badgeFg = ['#f0c040','#b0bec5','#cd7f32'];

  return data.map((t, i) => {
    const rank  = i + 1;
    const isTop = rank <= 3;
    const rowBg = isTop ? `background:${['rgba(240,192,64,.03)','rgba(176,190,197,.02)','rgba(205,127,50,.02)'][rank-1]};` : '';

    return `
      <tr style="${rowBg}">
        <td>
          <div style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;font-family:var(--font-mono);background:${isTop?badgeBg[rank-1]:'rgba(255,255,255,.04)'};color:${isTop?badgeFg[rank-1]:'var(--text-3)'}">${rank}</div>
        </td>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:34px;height:34px;border-radius:50%;background:${avatarColor(t.username)};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#fff;flex-shrink:0">${t.username.charAt(0).toUpperCase()}</div>
            <span style="font-family:var(--font-head);font-weight:600;font-size:13px;color:${isTop?badgeFg[rank-1]:'var(--text-1)'}">${t.username}</span>
          </div>
        </td>
        <td><span style="font-family:var(--font-mono);font-weight:700;color:${t.totalPnl>=0?'var(--emerald)':'var(--red-3)'}">${fmtPnl(t.totalPnl)}</span></td>
        <td style="font-family:var(--font-mono);color:var(--text-1)">${t.totalTrades}</td>
        <td>
          <div style="display:flex;align-items:center;gap:8px">
            <div style="width:60px;height:3px;background:var(--bg-3);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${t.winrate}%;background:${t.winrate>=50?'var(--emerald)':'var(--red-3)'};border-radius:2px"></div>
            </div>
            <span style="font-family:var(--font-mono);font-size:12px;color:${t.winrate>=50?'var(--emerald)':'var(--red-3)'}">${t.winrate}%</span>
          </div>
        </td>
        <td style="color:var(--text-3);font-size:11px;font-family:var(--font-mono)">${new Date(t.memberSince).toLocaleDateString('fr-FR',{month:'short',year:'numeric'})}</td>
      </tr>
    `;
  }).join('');
}

function sortLeaderboard(key, btn) {
  document.querySelectorAll('.lb-sort-btn').forEach(b => {
    b.classList.remove('lb-active');
    b.style.background = '';
    b.style.color = '';
    b.style.borderColor = '';
  });
  btn.classList.add('lb-active');
  btn.style.background = 'var(--bg-3)';
  btn.style.color = 'var(--text-1)';
  btn.style.borderColor = 'var(--border-hover)';

  const sorted = [...(state.leaderboard || [])].sort((a, b) => b[key] - a[key]);
  const tbody = document.getElementById('lb-tbody');
  if (tbody) tbody.innerHTML = renderLbRows(sorted);
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
      color = data.pnl > 0
        ? `rgba(16,185,129,${0.2 + intensity * 0.8})`
        : `rgba(239,68,68,${0.2 + intensity * 0.8})`;
    }
    cells.push({ key, data, color });
  }

  el.innerHTML = `
    <div style="overflow-x:auto;padding-bottom:8px">
      <div style="min-width:700px">
        <div style="display:flex;margin-bottom:4px;padding-left:30px">
          <div style="height:12px;position:relative;width:100%">
            ${monthPositions.map(({ month, col }) => `<span style="position:absolute;left:${col*14}px;font-size:10px;color:var(--text-3)">${months[month]}</span>`).join('')}
          </div>
        </div>
        <div style="display:flex;gap:3px">
          <div style="display:flex;flex-direction:column;gap:3px">
            ${['D','L','M','M','J','V','S'].map(d=>`<div style="height:12px;font-size:9px;color:var(--text-3);width:16px;line-height:12px">${d}</div>`).join('')}
          </div>
          <div style="display:grid;grid-template-rows:repeat(7,12px);grid-auto-flow:column;gap:3px">
            ${cells.map(c => `
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
              <div class="form-group">
                <label>Date *</label>
                <input type="datetime-local" name="date" value="${trade?new Date(trade.date).toISOString().slice(0,16):new Date().toISOString().slice(0,16)}" required />
              </div>
              <div class="form-group">
                <label>Actif *</label>
                <input name="asset" placeholder="ex: EURUSD, BTCUSD" value="${trade?.asset||''}" required />
              </div>
              <div class="form-group">
                <label>Type *</label>
                <select name="type" required>
                  <option value="BUY"  ${trade?.type==='BUY' ?'selected':''}>BUY</option>
                  <option value="SELL" ${trade?.type==='SELL'?'selected':''}>SELL</option>
                </select>
              </div>
              <div class="form-group">
                <label>Statut</label>
                <select name="status">
                  <option value="WIN"  ${trade?.status==='WIN' ?'selected':''}>Win ✅</option>
                  <option value="LOSS" ${trade?.status==='LOSS'?'selected':''}>Loss ❌</option>
                  <option value="BE"   ${trade?.status==='BE'  ?'selected':''}>Break Even ⚖️</option>
                  <option value="OPEN" ${trade?.status==='OPEN'||!trade?'selected':''}>Ouvert</option>
                </select>
              </div>
              <div class="form-group">
                <label>Prix d'entrée *</label>
                <input type="number" step="any" name="entryPrice" placeholder="0.00000" value="${trade?.entryPrice||''}" required />
              </div>
              <div class="form-group">
                <label>Prix de sortie</label>
                <input type="number" step="any" name="exitPrice" placeholder="0.00000" value="${trade?.exitPrice||''}" />
              </div>
              <div class="form-group">
                <label>Stop Loss</label>
                <input type="number" step="any" name="stopLoss" placeholder="0.00000" value="${trade?.stopLoss||''}" />
              </div>
              <div class="form-group">
                <label>Take Profit</label>
                <input type="number" step="any" name="takeProfit" placeholder="0.00000" value="${trade?.takeProfit||''}" />
              </div>
              <div class="form-group">
                <label>P&L ($)</label>
                <input type="number" step="any" name="pnl" placeholder="0.00" value="${trade?.pnl||''}" />
              </div>
              <div class="form-group">
                <label>R:R</label>
                <input type="number" step="any" name="rr" placeholder="1.5" value="${trade?.rr||''}" />
              </div>
              <div class="form-group">
                <label>Setup / Stratégie</label>
                <input name="setup" placeholder="ex: Breakout, OB, FVG..." value="${trade?.setup||''}" />
              </div>
              <div class="form-group">
                <label>Timeframe</label>
                <select name="timeframe">
                  <option value="">—</option>
                  ${['M1','M5','M15','M30','H1','H4','D1','W1','MN'].map(tf=>`<option value="${tf}" ${trade?.timeframe===tf?'selected':''}>${tf}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Session</label>
                <select name="session">
                  <option value="">—</option>
                  ${['London','New York','Tokyo','Sydney','Other'].map(s=>`<option value="${s}" ${trade?.session===s?'selected':''}>${s}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Compte</label>
                <select name="accountId">
                  <option value="">Aucun</option>
                  ${state.accounts.map(a=>`<option value="${a._id}" ${trade?.accountId===a._id||trade?.accountId?._id===a._id?'selected':''}>${a.name}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Émotion</label>
                <select name="emotion">
                  <option value="">—</option>
                  ${['Confident','Anxious','Neutral','FOMO','Greedy','Patient'].map(e=>`<option value="${e}" ${trade?.emotion===e?'selected':''}>${e}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Tags (séparés par virgules)</label>
                <input name="tags" placeholder="breakout, tendance, setup-A" value="${trade?.tags?.join(', ')||''}" />
              </div>
              <div class="form-group full">
                <label>Notes</label>
                <textarea name="notes" placeholder="Analyse du trade...">${trade?.notes||''}</textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
          <button class="btn btn-primary" onclick="submitTrade(null,${isEdit?`'${trade._id}'`:'null'})">
            ${isEdit?'Mettre à jour':'Enregistrer le Trade'}
          </button>
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
              { l:'Date',        v:new Date(trade.date).toLocaleString('fr-FR') },
              { l:'Compte',      v:trade.accountId?.name||'—' },
              { l:'Entrée',      v:trade.entryPrice?.toFixed(5)||'—',  mono:true },
              { l:'Sortie',      v:trade.exitPrice?.toFixed(5)||'—',   mono:true },
              { l:'Stop Loss',   v:trade.stopLoss?.toFixed(5)||'—',    mono:true, color:'var(--red-3)' },
              { l:'Take Profit', v:trade.takeProfit?.toFixed(5)||'—',  mono:true, color:'var(--emerald)' },
              { l:'Timeframe',   v:trade.timeframe||'—' },
              { l:'Session',     v:trade.session||'—' },
            ].map(f=>`<div style="padding:12px;background:var(--bg-2);border-radius:8px"><div style="font-size:10px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">${f.l}</div><div style="font-size:14px;color:${f.color||'var(--text-1)'};${f.mono?'font-family:var(--font-mono);':''}font-weight:500">${f.v}</div></div>`).join('')}
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px">
            <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-3);text-transform:uppercase;margin-bottom:6px">P&L</div>
              <div class="${pnlClass}" style="font-size:22px">${trade.pnl!=null?(trade.pnl>0?'+':'')+'$'+trade.pnl.toFixed(2):'—'}</div>
            </div>
            <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-3);text-transform:uppercase;margin-bottom:6px">R:R</div>
              <div style="font-family:var(--font-mono);font-size:22px">${trade.rr?trade.rr.toFixed(2)+'R':'—'}</div>
            </div>
            <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-3);text-transform:uppercase;margin-bottom:6px">Suivi plan</div>
              <div style="font-size:22px">${trade.followedPlan?'✅':'❌'}</div>
            </div>
          </div>
          ${trade.setup?`<div style="margin-bottom:12px"><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Setup</span><div style="margin-top:4px;padding:8px 12px;background:var(--bg-2);border-radius:8px;font-size:14px">${trade.setup}</div></div>`:''}
          ${trade.emotion?`<div style="margin-bottom:12px"><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Émotion</span><div style="margin-top:4px;padding:8px 12px;background:var(--bg-2);border-radius:8px">${trade.emotion}</div></div>`:''}
          ${trade.tags?.length?`<div style="margin-bottom:12px"><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Tags</span><div style="margin-top:6px">${trade.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>`:''}
          ${trade.notes?`<div style="margin-bottom:12px"><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Notes</span><div style="margin-top:4px;padding:12px;background:var(--bg-2);border-radius:8px;font-size:14px;line-height:1.6;color:var(--text-2)">${trade.notes}</div></div>`:''}
          ${trade.screenshots?.length?`<div><span style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em">Captures</span><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">${trade.screenshots.map(s=>`<img src="${s}" style="height:120px;border-radius:8px;border:1px solid var(--border);cursor:pointer;object-fit:cover" onclick="window.open('${s}')" />`).join('')}</div></div>`:''}
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
        <div class="modal-header">
          <div class="modal-title">${isEdit?'Modifier le Compte':'Nouveau Compte'}</div>
          <button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button>
        </div>
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
        <div class="modal-header">
          <div class="modal-title">Objectifs</div>
          <button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button>
        </div>
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
        <div class="modal-header">
          <div class="modal-title">📥 Import CSV</div>
          <button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button>
        </div>
        <div class="modal-body">
          <div class="form-group" style="margin-bottom:12px">
            <label>Compte (optionnel)</label>
            <select id="import-account">
              <option value="">Aucun compte spécifique</option>
              ${state.accounts.map(a=>`<option value="${a._id}">${a.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Données CSV</label>
            <textarea id="csv-data" style="min-height:200px;font-family:var(--font-mono);font-size:12px" placeholder="date,asset,type,entryPrice,exitPrice,pnl,status"></textarea>
          </div>
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
        <div class="modal-header">
          <div class="modal-title">Paramètres</div>
          <button class="btn btn-ghost btn-icon btn-sm" onclick="closeModal()">${ICONS.close}</button>
        </div>
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
            <div style="font-size:12px;font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Changer le mot de passe</div>
            <div class="form-grid" style="grid-template-columns:1fr">
              <div class="form-group"><label>Mot de passe actuel</label><input type="password" id="set-current-pwd" placeholder="••••••••" /></div>
              <div class="form-group"><label>Nouveau mot de passe</label><input type="password" id="set-new-pwd" placeholder="Min. 8 caractères" /></div>
            </div>
            <button class="btn btn-ghost btn-sm" style="margin-top:10px" onclick="savePassword()">Changer le mot de passe</button>
          </div>
          <hr class="divider" />
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Préférences</div>
            <div class="form-grid">
              <div class="form-group"><label>Devise</label><select id="set-currency">${['USD','EUR','GBP','CHF','JPY'].map(c=>`<option value="${c}" ${u.settings?.currency===c?'selected':''}>${c}</option>`).join('')}</select></div>
              <div class="form-group"><label>Risque par trade (%)</label><input type="number" id="set-risk" step="0.1" min="0" max="100" value="${u.settings?.riskPerTrade||1}" /></div>
            </div>
            <button class="btn btn-ghost btn-sm" style="margin-top:10px" onclick="savePreferences()">Sauvegarder</button>
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