const orchestrator = document.getElementById('status-orchestrator');

function simulateLoad() {
  // Volvemos a carga
  orchestrator.setAttribute('data-state', 'loading');

  setTimeout(() => {
    const states = ['ideal', 'error', 'empty'];
    const randomState = states[Math.floor(Math.random() * states.length)];
    
    // Cambiamos el estado
    orchestrator.setAttribute('data-state', randomState);
    console.log(`🎨 Estado cambiado a: ${randomState}`);
  }, 2000);
}

// Iniciar al cargar la página
window.onload = simulateLoad;