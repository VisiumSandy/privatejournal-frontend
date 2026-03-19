function renderGoals() {
  const u = state.user || {};
  const now = new Date();
  const monthKey = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  const currentMonthData = state.monthly.find(m => m.month === monthKey) || { pnl:0, trades:0, winrate:0 };
  const monthProgress = u.monthlyGoal > 0 ? Math.min(100, (currentMonthData.pnl / u.monthlyGoal) * 100) : 0;
  const yearPnl = state.monthly.filter(m => m.month.startsWith(now.getFullYear().toString())).reduce((s, m) => s + m.pnl, 0);
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
        { l:'Mois rentables',v:`${state.monthly.filter(m=>m.pnl>0).length}/${state.monthly.length}`, c:'var(--blue)',   sub:`${(state.monthly.filter(m=>m.pnl>0).length/state.monthly.length*100).toFixed(0)}% des mois` },
      ].map(x=>`<div class="stat-card" style="--accent:${x.c}"><div class="stat-label">${x.l}</div><div class="stat-value" style="color:${x.c}">${x.v}</div><div class="stat-sub">${x.sub}</div></div>`).join('') : ''}
    </div>
  `;
}