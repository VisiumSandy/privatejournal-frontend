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
  loading: true,
  modalOpen: false,
  modalType: null,
  editTrade: null,
  editAccount: null,
  filters: { search: '', asset: '', type: '', status: '', from: '', to: '' },
  page_num: 1,
  totalTrades: 0,
  selectedAccount: 'all',
  leaderboard: [],
  charts: {}
};

// ─── Token ────────────────────────────────────────────────
function getToken() {
  return localStorage.getItem('auth_token');
}
function setToken(token) {
  localStorage.setItem('auth_token', token);
}
function clearToken() {
  localStorage.removeItem('auth_token');
}

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

// ─── Data loading ─────────────────────────────────────────
async function loadUser() {
  const token = getToken();
  if (!token) return false;
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
  state.loading = false;
  render();
}

async function loadTrades() {
  const f = state.filters;
  const p = new URLSearchParams({ page: state.page_num, limit: 50, sortBy: 'date', sortDir: '-1' });
  if (f.search) p.set('search', f.search);
  if (f.asset) p.set('asset', f.asset);
  if (f.type) p.set('type', f.type);
  if (f.status) p.set('status', f.status);
  if (f.from) p.set('from', f.from);
  if (f.to) p.set('to', f.to);
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

// ═══════════════════════════════════════════════════════════
// MODIFICATIONS state.js
// ═══════════════════════════════════════════════════════════

// 1. Dans l'objet `state`, ajoute la propriété leaderboard :
//    Remplace la ligne `charts: {}`  par :
//    leaderboard: [],
//    charts: {}

// 2. Dans loadAll(), ajoute l'appel au leaderboard :
//    Ajoute à la fin de loadAll(), juste avant `state.loading = false` :
//    await loadLeaderboard();

// 3. Ajoute cette nouvelle fonction après loadAccounts() :

async function loadLeaderboard() {
  try {
    state.leaderboard = await api('/stats/leaderboard');
  } catch(e) {
    console.warn('Leaderboard error:', e.message);
    state.leaderboard = [];
  }
}