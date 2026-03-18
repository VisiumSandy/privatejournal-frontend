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