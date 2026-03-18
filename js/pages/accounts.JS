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