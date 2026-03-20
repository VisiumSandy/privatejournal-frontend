const PROP_FIRMS = [
  {
    name: 'FTMO',
    logo: '🏆',
    color: '#1a73e8',
    plans: [
      { name: 'Challenge 10K', capital: '$10 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 4, maxDays: 30 },
      { name: 'Challenge 25K', capital: '$25 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 4, maxDays: 30 },
      { name: 'Challenge 50K', capital: '$50 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 4, maxDays: 30 },
      { name: 'Challenge 100K', capital: '$100 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 4, maxDays: 30 },
    ],
    rules: [
      { type: 'danger', text: 'Perte journalière max : 5% du capital initial (ex: $500 sur 10K)' },
      { type: 'danger', text: 'Perte totale max : 10% du capital initial (ex: $1 000 sur 10K)' },
      { type: 'warning', text: 'Objectif de profit : 10% en Phase 1, 5% en Phase 2' },
      { type: 'warning', text: 'Minimum 4 jours de trading (au moins 1 trade par jour)' },
      { type: 'info', text: 'Pas de limite de temps en compte Funded' },
      { type: 'info', text: 'Levier max : 1:100 Forex, 1:20 indices, 1:10 crypto' },
      { type: 'danger', text: 'Interdit de trader pendant les news importantes (optionnel selon plan)' },
      { type: 'info', text: 'Partage des profits : 80% trader / 20% FTMO (jusqu\'à 90% avec scale-up)' },
    ]
  },
  {
    name: 'The Funded Trader',
    logo: '💎',
    color: '#7c3aed',
    plans: [
      { name: 'Standard 25K', capital: '$25 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 35 },
      { name: 'Standard 50K', capital: '$50 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 35 },
      { name: 'Royal 100K', capital: '$100 000', target: '8%', dailyLoss: '4%', maxLoss: '8%', minDays: 5, maxDays: 35 },
      { name: 'Royal 200K', capital: '$200 000', target: '8%', dailyLoss: '4%', maxLoss: '8%', minDays: 5, maxDays: 35 },
    ],
    rules: [
      { type: 'danger', text: 'Perte journalière max : 5% (Standard) / 4% (Royal)' },
      { type: 'danger', text: 'Drawdown max : 10% (Standard) / 8% (Royal) — drawdown trailing' },
      { type: 'warning', text: 'Objectif : 10% Phase 1, 5% Phase 2 (Standard)' },
      { type: 'warning', text: 'Minimum 5 jours de trading par phase' },
      { type: 'danger', text: 'Drawdown TRAILING : calculé depuis le pic de balance, pas le capital initial' },
      { type: 'info', text: 'Partage profits : 80% / jusqu\'à 90% avec scaling' },
      { type: 'info', text: 'Levier : 1:200 Forex, 1:100 indices, 1:50 matières premières' },
    ]
  },
  {
    name: 'Funded Next',
    logo: '🚀',
    color: '#059669',
    plans: [
      { name: 'Stellar 15K', capital: '$15 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
      { name: 'Stellar 25K', capital: '$25 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
      { name: 'Stellar 50K', capital: '$50 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
      { name: 'Stellar 100K', capital: '$100 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
    ],
    rules: [
      { type: 'danger', text: 'Perte journalière max : 5% du solde initial du jour' },
      { type: 'danger', text: 'Drawdown max : 10% — calculé depuis le capital de départ' },
      { type: 'warning', text: 'Objectif : 10% Phase 1, 5% Phase 2' },
      { type: 'warning', text: 'Minimum 5 jours de trading' },
      { type: 'info', text: '1er retrait possible dès 7 jours après activation funded' },
      { type: 'info', text: 'Partage profits : 80% jusqu\'à 95% avec Elite program' },
      { type: 'info', text: 'Levier : 1:100 Forex, 1:50 indices' },
    ]
  },
  {
    name: 'The5%ers',
    logo: '⚡',
    color: '#d97706',
    plans: [
      { name: 'Hyper Growth 100K', capital: '$100 000', target: '10%', dailyLoss: 'Aucune', maxLoss: '5%', minDays: null, maxDays: null },
      { name: 'Low Risk 100K', capital: '$100 000', target: '6%', dailyLoss: 'Aucune', maxLoss: '4%', minDays: null, maxDays: null },
      { name: 'Bootcamp', capital: '$100 000', target: '25%', dailyLoss: 'Aucune', maxLoss: '10%', minDays: null, maxDays: null },
    ],
    rules: [
      { type: 'info', text: 'PAS de limite de perte journalière — uniquement le drawdown total' },
      { type: 'danger', text: 'Drawdown max : 5% (Hyper) / 4% (Low Risk) — drawdown RELATIF au pic' },
      { type: 'warning', text: 'Objectif : 10% pour doubler le capital (Hyper Growth)' },
      { type: 'info', text: 'Pas de limite de temps — tradez à votre rythme' },
      { type: 'info', text: 'Scale-up : chaque 10% de profit = doublement du capital' },
      { type: 'info', text: 'Partage profits : 50% au début → 100% au niveau maximum' },
      { type: 'warning', text: 'Drawdown trailing depuis le pic de balance — très strict' },
    ]
  },
  {
    name: 'Apex Trader Funding',
    logo: '🎯',
    color: '#dc2626',
    plans: [
      { name: 'PA 25K', capital: '$25 000', target: '$1 500', dailyLoss: '$1 000', maxLoss: '$1 500', minDays: 7, maxDays: null },
      { name: 'PA 50K', capital: '$50 000', target: '$3 000', dailyLoss: '$2 000', maxLoss: '$2 500', minDays: 7, maxDays: null },
      { name: 'PA 100K', capital: '$100 000', target: '$6 000', dailyLoss: '$3 000', maxLoss: '$4 500', minDays: 7, maxDays: null },
      { name: 'PA 150K', capital: '$150 000', target: '$9 000', dailyLoss: '$4 500', maxLoss: '$7 500', minDays: 7, maxDays: null },
    ],
    rules: [
      { type: 'danger', text: 'Perte journalière max : montant fixe en $ (pas en %)' },
      { type: 'danger', text: 'Trailing drawdown : calculé depuis le plus haut de la balance' },
      { type: 'warning', text: 'Minimum 7 jours de trading avant premier retrait' },
      { type: 'info', text: 'Pas de limite de temps pour atteindre l\'objectif' },
      { type: 'info', text: 'Partage profits : 90% trader' },
      { type: 'warning', text: 'Spécialisé Futures (CME) — pas de Forex spot' },
      { type: 'info', text: 'Retraits possibles : 1er retrait après 7 jours, puis tous les 14 jours' },
    ]
  },
  {
    name: 'True Forex Funds',
    logo: '💼',
    color: '#0ea5e9',
    plans: [
      { name: '10K Standard', capital: '$10 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
      { name: '25K Standard', capital: '$25 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
      { name: '50K Standard', capital: '$50 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
      { name: '100K Standard', capital: '$100 000', target: '10%', dailyLoss: '5%', maxLoss: '10%', minDays: 5, maxDays: 30 },
    ],
    rules: [
      { type: 'danger', text: 'Perte journalière max : 5% — calculé sur le solde de début de journée' },
      { type: 'danger', text: 'Drawdown max : 10% statique depuis le capital initial' },
      { type: 'warning', text: 'Objectif : 10% Phase 1, 5% Phase 2' },
      { type: 'warning', text: 'Minimum 5 jours de trading actif par phase' },
      { type: 'info', text: 'Partage profits : 80% trader' },
      { type: 'info', text: 'Levier : 1:100 Forex' },
      { type: 'danger', text: 'Interdit de tenir des positions ouvertes le weekend' },
    ]
  },
];

function renderPropFirmRules() {
  const selectedFirm = state.propFirmSelected || 0;
  const firm = PROP_FIRMS[selectedFirm];

  const typeConfig = {
    danger:  { bg: 'rgba(239,68,68,.08)',   border: 'rgba(239,68,68,.2)',   color: '#f87171', icon: '🚫' },
    warning: { bg: 'rgba(245,158,11,.08)',  border: 'rgba(245,158,11,.2)',  color: '#fbbf24', icon: '⚠️' },
    info:    { bg: 'rgba(59,130,246,.08)',  border: 'rgba(59,130,246,.2)',  color: '#60a5fa', icon: 'ℹ️' },
  };

  return `
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:28px;flex-wrap:wrap;gap:12px">
      <div>
        <div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--red-3);font-family:var(--font-mono);margin-bottom:6px">Compliance</div>
        <div style="font-family:var(--font-head);font-size:clamp(20px,3vw,30px);font-weight:800;letter-spacing:-.02em">Règles Prop Firms</div>
        <div style="font-size:12px;color:var(--text-3);margin-top:4px">Consultez les règles avant de trader pour éviter toute violation</div>
      </div>
    </div>

    <!-- Sélecteur de firm -->
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px">
      ${PROP_FIRMS.map((f, i) => `
        <div onclick="state.propFirmSelected=${i};render()"
          style="display:flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;cursor:pointer;transition:all .2s;border:1.5px solid ${i===selectedFirm?f.color:'var(--border)'};background:${i===selectedFirm?f.color+'18':'var(--bg-2)'};font-weight:600;font-size:13px;color:${i===selectedFirm?f.color:'var(--text-2)'}">
          <span style="font-size:18px">${f.logo}</span>
          ${f.name}
        </div>
      `).join('')}
    </div>

    <!-- Header firm -->
    <div class="card" style="margin-bottom:20px;border-color:${firm.color}33;background:linear-gradient(135deg,${firm.color}08,transparent)">
      <div style="display:flex;align-items:center;gap:16px">
        <div style="font-size:48px">${firm.logo}</div>
        <div>
          <div style="font-family:var(--font-head);font-size:22px;font-weight:800;color:${firm.color}">${firm.name}</div>
          <div style="font-size:12px;color:var(--text-3);margin-top:4px">${firm.plans.length} plans disponibles</div>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">

      <!-- Plans -->
      <div class="card">
        <div class="card-header"><div class="card-title">📋 Plans & Limites</div></div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${firm.plans.map(p => `
            <div style="padding:14px;background:var(--bg-2);border-radius:10px;border:1px solid var(--border)">
              <div style="font-family:var(--font-head);font-weight:700;font-size:14px;color:var(--text-1);margin-bottom:10px">${p.name}</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                ${[
                  { label: 'Capital', value: p.capital, color: 'var(--blue)' },
                  { label: 'Objectif', value: p.target, color: 'var(--emerald)' },
                  { label: 'Perte/jour max', value: p.dailyLoss, color: 'var(--red-3)' },
                  { label: 'Drawdown max', value: p.maxLoss, color: 'var(--red-4)' },
                  { label: 'Jours min', value: p.minDays ? p.minDays + ' jours' : 'Aucun', color: 'var(--amber)' },
                  { label: 'Durée max', value: p.maxDays ? p.maxDays + ' jours' : 'Illimité', color: 'var(--text-2)' },
                ].map(s => `
                  <div style="padding:8px 10px;background:var(--bg-3);border-radius:6px">
                    <div style="font-size:9px;color:var(--text-3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px">${s.label}</div>
                    <div style="font-family:var(--font-mono);font-size:13px;font-weight:700;color:${s.color}">${s.value}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Règles -->
      <div class="card">
        <div class="card-header"><div class="card-title">⚖️ Règles Importantes</div></div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${firm.rules.map(r => `
            <div style="display:flex;align-items:flex-start;gap:10px;padding:12px 14px;background:${typeConfig[r.type].bg};border:1px solid ${typeConfig[r.type].border};border-radius:8px">
              <span style="font-size:14px;flex-shrink:0;margin-top:1px">${typeConfig[r.type].icon}</span>
              <span style="font-size:12px;color:${typeConfig[r.type].color};line-height:1.5">${r.text}</span>
            </div>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- Légende -->
    <div class="card" style="padding:14px 20px">
      <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
        <span style="font-size:11px;color:var(--text-3);font-weight:600">LÉGENDE :</span>
        ${Object.entries(typeConfig).map(([type, cfg]) => `
          <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:${cfg.color}">
            <span>${cfg.icon}</span>
            <span>${type === 'danger' ? 'Règle critique (violation = disqualification)' : type === 'warning' ? 'Règle importante' : 'Information utile'}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Checklist rapide -->
    <div class="card card-glow" style="margin-top:20px;border-color:rgba(229,57,53,.2)">
      <div class="card-header">
        <div class="card-title">✅ Checklist avant de trader</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${[
          'Vérifier le solde disponible avant d\'ouvrir une position',
          'Calculer la perte max journalière restante',
          'Vérifier qu\'aucune news majeure n\'est prévue',
          'Respecter le levier maximum autorisé',
          'Fermer les positions avant le weekend si requis',
          'Ne jamais dépasser la taille de lot calculée',
          'Vérifier le drawdown total actuel',
          'Respecter le nombre de jours minimum requis',
        ].map(item => `
          <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-2);border-radius:8px;font-size:12px;color:var(--text-2)">
            <span style="color:var(--emerald);font-size:14px;flex-shrink:0">☐</span>
            ${item}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}