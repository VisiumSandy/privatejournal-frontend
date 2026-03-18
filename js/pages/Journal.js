function renderJournal() {
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <div style="font-size:13px;color:var(--text-2)">${state.totalTrades} trades au total</div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-ghost btn-sm" onclick="openImportCSV()">${ICONS.upload} Import CSV</button>
        <button class="btn btn-primary" onclick="openAddTrade()">${ICONS.plus} Nouveau Trade</button>
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
          <th>Entrée</th><th>SL</th><th>TP</th><th>P&L</th><th>R:R</th><th>Statut</th><th>📸</th>
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
            <td onclick="event.stopPropagation()">
              ${t.screenshots?.length ? `
                <div style="display:flex;gap:4px;align-items:center">
                  <img src="${t.screenshots[0]}" style="height:36px;width:54px;object-fit:cover;border-radius:4px;border:1px solid var(--border);cursor:zoom-in" onclick="openImagePreview('${t.screenshots[0]}')" />
                  ${t.screenshots.length > 1 ? `<span style="font-size:10px;color:var(--text-3)">+${t.screenshots.length-1}</span>` : ''}
                </div>
              ` : '<span style="color:var(--text-3);font-size:11px">—</span>'}
            </td>
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