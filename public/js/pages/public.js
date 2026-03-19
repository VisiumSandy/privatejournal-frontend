function renderPublicJournals() {
  const data = state.publicJournals || [];

  function avatarColor(u) {
    const p = ['#c0392b','#2980b9','#27ae60','#8e44ad','#e67e22','#16a085','#2c3e50','#d35400'];
    return p[u.charCodeAt(0) % p.length];
  }

  return `
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:32px;flex-wrap:wrap;gap:12px">
      <div>
        <div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--red-3);font-family:var(--font-mono);margin-bottom:6px">Communauté</div>
        <div style="font-family:var(--font-head);font-size:clamp(20px,3vw,32px);font-weight:800;letter-spacing:-0.02em">Journaux Publics</div>
      </div>
      <div style="font-size:12px;color:var(--text-3);font-family:var(--font-mono)">${data.length} journal${data.length>1?'x':''} public${data.length>1?'s':''}</div>
    </div>

    ${!data.length ? `
      <div class="empty-state" style="padding:80px 20px">
        <div style="font-size:56px;margin-bottom:16px">🌐</div>
        <div class="empty-text">Aucun journal public</div>
        <div class="empty-sub">Les traders qui activent "Journal Public" dans leurs paramètres apparaîtront ici</div>
        <button class="btn btn-primary" style="margin-top:20px" onclick="openSettings()">Rendre mon journal public</button>
      </div>
    ` : `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px">
        ${data.map(trader => `
          <div class="card" style="cursor:pointer;transition:all .2s"
            onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,.4)';this.style.borderColor='var(--border-hover)'"
            onmouseout="this.style.transform='';this.style.boxShadow='';this.style.borderColor=''"
            onclick="loadPublicProfile('${trader.username}')">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
              <div style="width:44px;height:44px;border-radius:50%;background:${avatarColor(trader.username)};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:17px;color:#fff;flex-shrink:0">
                ${trader.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style="font-family:var(--font-head);font-weight:700;font-size:15px;color:var(--text-1)">${trader.username}</div>
                <div style="font-size:11px;color:var(--text-3);font-family:var(--font-mono)">Depuis ${new Date(trader.memberSince).toLocaleDateString('fr-FR',{month:'short',year:'numeric'})}</div>
              </div>
              <span style="margin-left:auto;font-size:10px;padding:3px 8px;background:rgba(229,57,53,.08);color:var(--red-4);border:1px solid rgba(229,57,53,.15);border-radius:4px;font-family:var(--font-mono)">PUBLIC</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
              <div style="padding:10px;background:var(--bg-2);border-radius:8px;text-align:center">
                <div style="font-size:9px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">PnL</div>
                <div style="font-family:var(--font-mono);font-size:13px;font-weight:700;color:${trader.totalPnl>=0?'var(--green)':'var(--red-3)'}">
                  ${trader.totalPnl>=0?'+':''}$${Math.abs(trader.totalPnl).toLocaleString('fr-FR',{minimumFractionDigits:0,maximumFractionDigits:0})}
                </div>
              </div>
              <div style="padding:10px;background:var(--bg-2);border-radius:8px;text-align:center">
                <div style="font-size:9px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">Trades</div>
                <div style="font-family:var(--font-mono);font-size:13px;font-weight:700;color:var(--text-1)">${trader.totalTrades}</div>
              </div>
              <div style="padding:10px;background:var(--bg-2);border-radius:8px;text-align:center">
                <div style="font-size:9px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">Winrate</div>
                <div style="font-family:var(--font-mono);font-size:13px;font-weight:700;color:${trader.winrate>=50?'var(--green)':'var(--red-3)'}">${trader.winrate}%</div>
              </div>
            </div>
            <div style="margin-top:14px;display:flex;align-items:center;gap:6px;color:var(--text-3);font-size:11px">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Voir le journal complet →
            </div>
          </div>
        `).join('')}
      </div>
    `}
  `;
}

function renderPublicProfile() {
  const data = state.publicProfile;
  if (!data) return `<div class="empty-state"><div class="empty-text">Profil introuvable</div></div>`;

  const { user, stats, trades, equityCurve, monthly } = data;
  const s = stats || {};

  function avatarColor(u) {
    const p = ['#c0392b','#2980b9','#27ae60','#8e44ad','#e67e22','#16a085','#2c3e50','#d35400'];
    return p[u.charCodeAt(0) % p.length];
  }

  return `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:32px;flex-wrap:wrap">
      <button class="btn btn-ghost btn-sm" onclick="setPage('public')">← Retour</button>
      <div style="width:56px;height:56px;border-radius:50%;background:${avatarColor(user.username)};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:22px;color:#fff">
        ${user.username.charAt(0).toUpperCase()}
      </div>
      <div>
        <div style="font-family:var(--font-head);font-size:24px;font-weight:800;letter-spacing:-0.02em">${user.username}</div>
        <div style="font-size:12px;color:var(--text-3);font-family:var(--font-mono)">Membre depuis ${new Date(user.createdAt).toLocaleDateString('fr-FR',{month:'long',year:'numeric'})}</div>
      </div>
      <span style="margin-left:auto;font-size:11px;padding:4px 10px;background:rgba(229,57,53,.08);color:var(--red-4);border:1px solid rgba(229,57,53,.15);border-radius:4px;font-family:var(--font-mono)">🌐 JOURNAL PUBLIC</span>
    </div>

    ${!s.totalTrades ? `
      <div class="empty-state"><div class="empty-text">Aucun trade clôturé</div></div>
    ` : `
      <div class="stats-grid" style="margin-bottom:24px">
        ${[
          { label:'PnL Total',     value:(s.totalPnl>0?'+':'')+'$'+Math.abs(s.totalPnl).toLocaleString(), accent:s.totalPnl>=0?'var(--green)':'var(--red-3)' },
          { label:'Winrate',       value:s.winrate.toFixed(1)+'%',       accent:s.winrate>=50?'var(--green)':'var(--red-3)' },
          { label:'Trades',        value:s.totalTrades,                   accent:'var(--text-2)' },
          { label:'Profit Factor', value:s.profitFactor===Infinity?'∞':s.profitFactor.toFixed(2), accent:s.profitFactor>=1.5?'var(--green)':'var(--red-3)' },
          { label:'R:R Moyen',     value:s.avgRR.toFixed(2)+'R',         accent:s.avgRR>=1.5?'var(--green)':'var(--amber)' },
          { label:'Expectancy',    value:(s.expectancy>0?'+':'')+'$'+s.expectancy.toFixed(2), accent:s.expectancy>0?'var(--green)':'var(--red-3)' },
        ].map(c=>`
          <div class="stat-card" style="--accent:${c.accent}">
            <div class="stat-label">${c.label}</div>
            <div class="stat-value" style="color:${c.accent}">${c.value}</div>
          </div>
        `).join('')}
      </div>

      <div class="charts-grid" style="margin-bottom:24px">
        <div class="card card-glow">
          <div class="card-header"><div class="card-title">Equity Curve</div></div>
          <div class="chart-wrap">
            ${equityCurve.length ? `<canvas id="publicEquityChart"></canvas>` : `<div class="empty-state"><div class="empty-text">Pas de données</div></div>`}
          </div>
        </div>
        <div class="card">
          <div class="card-header"><div class="card-title">Performance Mensuelle</div></div>
          <div class="chart-wrap">
            ${monthly.length ? `<canvas id="publicMonthlyChart"></canvas>` : `<div class="empty-state"><div class="empty-text">Pas de données</div></div>`}
          </div>
        </div>
      </div>

      <div class="card" style="padding:0;overflow:hidden">
        <div style="padding:14px 20px 12px;border-bottom:1px solid var(--border)">
          <div class="card-title">Trades récents (${trades.length})</div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Actif</th><th>Type</th><th>Setup</th><th>Entrée</th><th>P&L</th><th>R:R</th><th>Statut</th><th>📸</th></tr></thead>
            <tbody>
              ${trades.map(t => `
                <tr>
                  <td>${new Date(t.date).toLocaleDateString('fr-FR')}</td>
                  <td style="font-family:var(--font-mono);font-weight:600;color:var(--text-1)">${t.asset}</td>
                  <td><span class="badge badge-${t.type.toLowerCase()}">${t.type}</span></td>
                  <td style="color:var(--text-2)">${t.setup||'—'}</td>
                  <td style="font-family:var(--font-mono)">${t.entryPrice?.toFixed(5)||'—'}</td>
                  <td class="${t.pnl>0?'pnl-pos':t.pnl<0?'pnl-neg':'pnl-neu'}">${t.pnl!=null?(t.pnl>0?'+':'')+'$'+t.pnl.toFixed(2):'—'}</td>
                  <td style="font-family:var(--font-mono)">${t.rr?t.rr.toFixed(2)+'R':'—'}</td>
                  <td><span class="badge badge-${t.status?.toLowerCase()}">${t.status}</span></td>
                  <td>
                    ${t.screenshots?.length
                      ? `<div style="display:flex;gap:4px;align-items:center">
                           <img src="${t.screenshots[0]}" style="height:36px;width:54px;object-fit:cover;border-radius:4px;border:1px solid var(--border);cursor:zoom-in" onclick="openImagePreview('${t.screenshots[0]}')" />
                           ${t.screenshots.length>1?`<span style="font-size:10px;color:var(--text-3)">+${t.screenshots.length-1}</span>`:''}
                         </div>`
                      : '<span style="color:var(--text-3)">—</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `}
  `;
}