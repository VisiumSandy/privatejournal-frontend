function renderDashboard() {
  const s = state.stats || {};
  const pnlColor    = s.totalPnl > 0 ? 'var(--emerald)' : s.totalPnl < 0 ? 'var(--red-3)' : 'var(--amber)';
  const winrateColor = s.winrate >= 60 ? 'var(--emerald)' : s.winrate >= 45 ? 'var(--amber)' : 'var(--red-3)';

  const statCards = [
    { label: 'Winrate',       value: s.winrate ? s.winrate.toFixed(1) + '%' : '—',                                          sub: `${s.wins||0}W / ${s.losses||0}L`,     accent: winrateColor },
    { label: 'P&L Total',     value: s.totalPnl ? (s.totalPnl > 0 ? '+' : '') + '$' + Math.abs(s.totalPnl).toLocaleString() : '$0', sub: `${s.totalTrades||0} trades clôturés`, accent: pnlColor },
    { label: 'Profit Factor', value: s.profitFactor ? (s.profitFactor === Infinity ? '∞' : s.profitFactor.toFixed(2)) : '—', sub: 'Objectif: > 1.5',                    accent: s.profitFactor >= 1.5 ? 'var(--emerald)' : 'var(--red-3)' },
    { label: 'R:R Moyen',     value: s.avgRR ? s.avgRR.toFixed(2) + 'R' : '—',                                              sub: 'Risk/Reward ratio',                   accent: s.avgRR >= 1.5 ? 'var(--emerald)' : 'var(--amber)' },
    { label: 'Drawdown Max',  value: s.maxDrawdown ? '-$' + s.maxDrawdown.toLocaleString() : '$0',                           sub: 'Pire récession',                      accent: 'var(--red-3)' },
    { label: 'Expectancy',    value: s.expectancy ? (s.expectancy > 0 ? '+' : '') + '$' + s.expectancy.toFixed(2) : '—',    sub: 'Par trade',                           accent: s.expectancy > 0 ? 'var(--emerald)' : 'var(--red-3)' },
    { label: 'Gain Moyen',    value: s.avgWin ? '+$' + s.avgWin.toFixed(2) : '—',                                           sub: 'Par trade gagnant',                   accent: 'var(--emerald)' },
    { label: 'Perte Moyenne', value: s.avgLoss ? '-$' + s.avgLoss.toFixed(2) : '—',                                         sub: 'Par trade perdant',                   accent: 'var(--red-3)' },
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
          ${state.equityCurve.length ? `<canvas id="equityChart"></canvas>` : `<div class="empty-state"><div class="empty-icon">${ICONS.stats}</div><div class="empty-text">Aucune donnée</div></div>`}
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
          ${state.monthly.length ? `<canvas id="monthlyChart"></canvas>` : `<div class="empty-state"><div class="empty-text">Aucune donnée</div></div>`}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">Performance par Jour</div></div>
        <div class="chart-wrap">
          ${state.byWeekday.some(d => d.trades > 0) ? `<canvas id="weekdayChart"></canvas>` : `<div class="empty-state"><div class="empty-text">Aucune donnée</div></div>`}
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:24px">
      <div class="card-header"><div class="card-title">Heatmap Calendrier ${new Date().getFullYear()}</div></div>
      <div id="calendarHeatmap"></div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Trades Récents</div>
        <button class="btn btn-ghost btn-sm" onclick="setPage('journal')">Voir tout</button>
      </div>
      <div class="table-wrap">${renderTradeTable(state.trades.slice(0, 8), false)}</div>
    </div>
  `;
}