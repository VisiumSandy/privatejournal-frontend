// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
async function init() {
  const loggedIn = await loadUser();
  if (loggedIn) {
    await loadAll();
  } else {
    state.loading = false;
    render();
  }
}

init();
