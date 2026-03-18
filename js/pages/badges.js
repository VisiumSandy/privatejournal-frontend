function renderBadges() {
  const s = state.stats || {};
  const trades = state.trades || [];
  const totalTrades = s.totalTrades || 0;
  const totalPnl = s.totalPnl || 0;
  const winrate = s.winrate || 0;
  const profitFactor = s.profitFactor || 0;
  const maxWinStreak = s.maxWinStreak || 0;
  const tradesWithNotes = trades.filter(t => t.notes && t.notes.trim().length > 0).length;
  const tradesWithScreenshots = trades.filter(t => t.screenshots && t.screenshots.length > 0).length;

  const allBadges = [
    { id:'first_trade',    icon:'🥉', name:'Premier Trade',    desc:'Enregistrez votre premier trade',         unlocked: totalTrades >= 1,                        category:'trades' },
    { id:'10_trades',      icon:'🥈', name:'Trader Régulier',  desc:'10 trades enregistrés',                   unlocked: totalTrades >= 10,                       category:'trades' },
    { id:'50_trades',      icon:'🥇', name:'Trader Confirmé',  desc:'50 trades enregistrés',                   unlocked: totalTrades >= 50,                       category:'trades' },
    { id:'100_trades',     icon:'💎', name:'Trader Expert',    desc:'100 trades enregistrés',                  unlocked: totalTrades >= 100,                      category:'trades' },
    { id:'500_trades',     icon:'🏆', name:'Légendaire',       desc:'500 trades enregistrés',                  unlocked: totalTrades >= 500,                      category:'trades' },
    { id:'first_profit',   icon:'💰', name:'Premier Profit',   desc:'Réalisez votre premier gain',             unlocked: totalPnl > 0,                            category:'performance' },
    { id:'1k_profit',      icon:'🚀', name:'+$1 000',          desc:'Atteignez $1000 de profit total',         unlocked: totalPnl >= 1000,                        category:'performance' },
    { id:'10k_profit',     icon:'🌙', name:'+$10 000',         desc:'Atteignez $10 000 de profit total',       unlocked: totalPnl >= 10000,                       category:'performance' },
    { id:'5_streak',       icon:'🔥', name:'En Feu !',         desc:'5 wins consécutifs',                      unlocked: maxWinStreak >= 5,                       category:'performance' },
    { id:'10_streak',      icon:'⚡', name:'Invincible',       desc:'10 wins consécutifs',                     unlocked: maxWinStreak >= 10,                      category:'performance' },
    { id:'winrate_60',     icon:'🎯', name:'Sniper',           desc:'Winrate supérieur à 60%',                 unlocked: winrate >= 60 && totalTrades >= 10,      category:'performance' },
    { id:'pf_2',           icon:'📈', name:'Profit Factor x2', desc:'Profit Factor supérieur à 2',            unlocked: profitFactor >= 2 && totalTrades >= 10,  category:'performance' },
    { id:'notes_10',       icon:'📝', name:'Analyste',         desc:'10 trades avec notes',                    unlocked: tradesWithNotes >= 10,                   category:'discipline' },
    { id:'screenshots_10', icon:'📸', name:'Photographe',      desc:'10 trades avec screenshots',              unlocked: tradesWithScreenshots >= 10,             category:'discipline' },
  ];

  const unlocked = allBadges.filter(b => b.unlocked);
  const locked   = allBadges.filter(b => !b.unlocked);
  const categories = { trades: 'Trades', performance: 'Performance', discipline: 'Discipline' };

  return `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px">
      <div class="stat-card" style="--accent:var(--emerald);text-align:center">
        <div style="font-size:36px;margin-bottom:8px">🏅</div>
        <div class="stat-value" style="color:var(--emerald)">${unlocked.length}</div>
        <div class="stat-label">Badges débloqués</div>
      </div>
      <div class="stat-card" style="--accent:var(--text-3);text-align:center">
        <div style="font-size:36px;margin-bottom:8px">🔒</div>
        <div class="stat-value" style="color:var(--text-3)">${locked.length}</div>
        <div class="stat-label">Badges à débloquer</div>
      </div>
      <div class="stat-card" style="--accent:var(--amber);text-align:center">
        <div style="font-size:36px;margin-bottom:8px">⭐</div>
        <div class="stat-value" style="color:var(--amber)">${Math.round((unlocked.length/allBadges.length)*100)}%</div>
        <div class="stat-label">Progression</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:24px">
      <div class="card-header"><div class="card-title">Progression Globale</div><span style="font-size:13px;color:var(--text-2)">${unlocked.length} / ${allBadges.length} badges</span></div>
      <div class="progress-bar" style="height:12px">
        <div class="progress-fill" style="width:${(unlocked.length/allBadges.length)*100}%;background:linear-gradient(90deg,var(--red-2),var(--amber),var(--emerald))"></div>
      </div>
    </div>

    ${unlocked.length > 0 ? `
      <div class="card" style="margin-bottom:24px">
        <div class="card-header"><div class="card-title">✅ Badges Débloqués (${unlocked.length})</div></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
          ${unlocked.map(b => `
            <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center;border:1px solid rgba(34,197,94,.2);transition:transform .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
              <div style="font-size:36px;margin-bottom:8px">${b.icon}</div>
              <div style="font-weight:700;font-size:13px;color:var(--text-1);margin-bottom:4px">${b.name}</div>
              <div style="font-size:11px;color:var(--text-3)">${b.desc}</div>
              <div style="margin-top:8px;font-size:10px;padding:2px 8px;background:rgba(34,197,94,.1);color:var(--emerald);border-radius:4px;display:inline-block">DÉBLOQUÉ</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${Object.entries(categories).map(([cat, catLabel]) => {
      const catLocked = locked.filter(b => b.category === cat);
      if (!catLocked.length) return '';
      return `
        <div class="card" style="margin-bottom:16px">
          <div class="card-header"><div class="card-title">🔒 ${catLabel}</div></div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
            ${catLocked.map(b => `
              <div style="padding:16px;background:var(--bg-2);border-radius:10px;text-align:center;border:1px solid var(--border);opacity:.6">
                <div style="font-size:36px;margin-bottom:8px;filter:grayscale(1)">${b.icon}</div>
                <div style="font-weight:700;font-size:13px;color:var(--text-2);margin-bottom:4px">${b.name}</div>
                <div style="font-size:11px;color:var(--text-3)">${b.desc}</div>
                <div style="margin-top:8px;font-size:10px;padding:2px 8px;background:var(--bg-3);color:var(--text-3);border-radius:4px;display:inline-block">VERROUILLÉ</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('')}
  `;
}