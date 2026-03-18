// ═══════════════════════════════════════════════════════════
// CHART RENDERING
// ═══════════════════════════════════════════════════════════
function destroyChart(key) {
  if (state.charts[key]) { state.charts[key].destroy(); delete state.charts[key]; }
}

function renderEquityChart() {
  destroyChart('equity');
  const el = document.getElementById('equityChart');
  if (!el || !state.equityCurve.length) return;
  const data = state.equityCurve;
  const labels = data.map(d => new Date(d.date).toLocaleDateString('fr-FR', {day:'2-digit',month:'short'}));
  const values = data.map(d => d.cumulative);
  const isPos = values[values.length-1] >= 0;
  const ctx = el.getContext('2d');
  const grad = ctx.createLinearGradient(0,0,0,280);
  grad.addColorStop(0, isPos ? 'rgba(16,185,129,.35)' : 'rgba(239,68,68,.35)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  state.charts.equity = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: values,
        borderColor: isPos ? '#10b981' : '#ef4444',
        backgroundColor: grad,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: isPos ? '#10b981' : '#ef4444'
      }]
    },
    options: chartDefaults({ y: { grid: { color: 'rgba(99,140,255,.06)' }, ticks: { color: '#64748b', callback: v => '$'+v.toLocaleString() } }, x: { grid: { display: false }, ticks: { color: '#64748b', maxTicksLimit: 8 } } })
  });
}

function renderMonthlyChart() {
  destroyChart('monthly');
  const el = document.getElementById('monthlyChart');
  if (!el || !state.monthly.length) return;
  const last12 = state.monthly.slice(-12);
  state.charts.monthly = new Chart(el.getContext('2d'), {
    type: 'bar',
    data: {
      labels: last12.map(m => m.month),
      datasets: [{
        data: last12.map(m => m.pnl),
        backgroundColor: last12.map(m => m.pnl >= 0 ? 'rgba(16,185,129,.7)' : 'rgba(239,68,68,.7)'),
        borderColor: last12.map(m => m.pnl >= 0 ? '#10b981' : '#ef4444'),
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: chartDefaults({ y: { grid: { color: 'rgba(99,140,255,.06)' }, ticks: { color: '#64748b', callback: v => '$'+v } }, x: { grid: { display: false }, ticks: { color: '#64748b' } } })
  });
}

function renderWinLossChart() {
  destroyChart('winloss');
  const el = document.getElementById('winlossChart');
  if (!el || !state.stats || !state.stats.totalTrades) return;
  const s = state.stats;
  state.charts.winloss = new Chart(el.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Wins', 'Losses', 'Break Even'],
      datasets: [{ data: [s.wins, s.losses, s.bes], backgroundColor: ['rgba(16,185,129,.8)', 'rgba(239,68,68,.8)', 'rgba(245,158,11,.8)'], borderColor: ['#10b981','#ef4444','#f59e0b'], borderWidth: 2, hoverOffset: 8 }]
    },
    options: { ...chartDefaults(), cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 12, font: { size: 12 } } }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} (${((ctx.raw/s.totalTrades)*100).toFixed(1)}%)` } } } }
  });
}

function renderWeekdayChart() {
  destroyChart('weekday');
  const el = document.getElementById('weekdayChart');
  if (!el || !state.byWeekday.length) return;
  const days = state.byWeekday.filter(d => d.trades > 0);
  state.charts.weekday = new Chart(el.getContext('2d'), {
    type: 'bar',
    data: {
      labels: days.map(d => d.day.substring(0,3)),
      datasets: [
        { label: 'P&L', data: days.map(d => d.pnl), backgroundColor: days.map(d => d.pnl >= 0 ? 'rgba(16,185,129,.6)' : 'rgba(239,68,68,.6)'), borderRadius: 6, yAxisID: 'y' },
        { label: 'Winrate %', data: days.map(d => d.winrate), type: 'line', borderColor: '#3b82f6', pointBackgroundColor: '#3b82f6', tension: 0.4, yAxisID: 'y1', borderWidth: 2, pointRadius: 4 }
      ]
    },
    options: chartDefaults({
      y: { grid: { color: 'rgba(99,140,255,.06)' }, ticks: { color: '#64748b' } },
      y1: { position: 'right', grid: { display: false }, ticks: { color: '#3b82f6', callback: v => v+'%' }, max: 100, min: 0 },
      x: { grid: { display: false }, ticks: { color: '#64748b' } }
    })
  });
}

function renderAssetChart() {
  destroyChart('asset');
  const el = document.getElementById('assetChart');
  if (!el || !state.byAsset.length) return;
  const top = state.byAsset.slice(0, 8);
  state.charts.asset = new Chart(el.getContext('2d'), {
    type: 'bar',
    data: {
      labels: top.map(a => a.asset),
      datasets: [{ label: 'P&L', data: top.map(a => a.pnl), backgroundColor: top.map(a => a.pnl >= 0 ? 'rgba(16,185,129,.7)' : 'rgba(239,68,68,.7)'), borderRadius: 6 }]
    },
    options: { ...chartDefaults({ y: { grid: { color: 'rgba(99,140,255,.06)' }, ticks: { color: '#64748b' } }, x: { grid: { display: false }, ticks: { color: '#64748b' } } }), indexAxis: 'y' }
  });
}

function renderRRChart() {
  destroyChart('rr');
  const el = document.getElementById('rrChart');
  if (!el) return;
  const trades = state.trades.filter(t => t.rr);
  if (!trades.length) return;
  const bins = {};
  trades.forEach(t => {
    const b = Math.floor(t.rr * 2) / 2;
    bins[b] = (bins[b] || 0) + 1;
  });
  const sorted = Object.entries(bins).sort((a,b) => parseFloat(a[0]) - parseFloat(b[0]));
  state.charts.rr = new Chart(el.getContext('2d'), {
    type: 'bar',
    data: {
      labels: sorted.map(([k]) => k+'R'),
      datasets: [{ data: sorted.map(([,v]) => v), backgroundColor: sorted.map(([k]) => parseFloat(k) >= 1 ? 'rgba(16,185,129,.7)' : 'rgba(239,68,68,.7)'), borderRadius: 4 }]
    },
    options: chartDefaults({ y: { grid: { color: 'rgba(99,140,255,.06)' }, ticks: { color: '#64748b' } }, x: { grid: { display: false }, ticks: { color: '#64748b' } } })
  });
}

function chartDefaults(scales={}) {
  return {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1a2035', borderColor: 'rgba(99,140,255,.2)', borderWidth: 1, titleColor: '#f1f5ff', bodyColor: '#94a3b8', padding: 10 } },
    scales
  };
}

function renderAllCharts() {
  setTimeout(() => {
    renderEquityChart();
    renderMonthlyChart();
    renderWinLossChart();
    renderWeekdayChart();
    if (state.page === 'stats') { renderAssetChart(); renderRRChart(); }
  }, 50);
}
