async function submitLogin() {
  const email = document.getElementById('login-email')?.value?.trim();
  const password = document.getElementById('login-password')?.value;
  const btn = document.getElementById('login-btn');
  if (!email || !password) { state.authError = 'Remplissez tous les champs.'; render(); return; }
  if (btn) { btn.disabled = true; btn.textContent = 'Connexion…'; }
  try {
    const data = await api('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    setToken(data.token); // ← sauvegarde le token
    state.user = data.user;
    state.authError = '';
    await loadAll();
  } catch(e) {
    state.authError = e.message;
    render();
    if (btn) { btn.disabled = false; btn.textContent = 'Se connecter'; }
  }
}

async function submitRegister() {
  const username = document.getElementById('reg-username')?.value?.trim();
  const email = document.getElementById('reg-email')?.value?.trim();
  const password = document.getElementById('reg-password')?.value;
  const btn = document.getElementById('reg-btn');
  if (!username || !email || !password) { state.authError = 'Remplissez tous les champs.'; render(); return; }
  if (btn) { btn.disabled = true; btn.textContent = 'Création…'; }
  try {
    const data = await api('/auth/register', { method: 'POST', body: JSON.stringify({ username, email, password }) });
    setToken(data.token); // ← sauvegarde le token
    state.user = data.user;
    state.authError = '';
    await loadAll();
  } catch(e) {
    state.authError = e.message;
    render();
    if (btn) { btn.disabled = false; btn.textContent = 'Créer mon compte'; }
  }
}

async function logout() {
  try {
    await api('/auth/logout', { method: 'POST' });
  } catch {}
  clearToken(); // ← supprime le token
  state.user = null;
  state.authTab = 'login';
  state.authError = '';
  render();
}