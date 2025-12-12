const TIEMPO_EXPIRACION = 10000;
const TIEMPO_CANCELACION = 5000;
let temporizadorCierre;

const avisoSesion = document.getElementById("aviso-sesion");
const btnExtender = document.getElementById("btn-extender");

function iniciarTemporizadorSesion() {
  avisoSesion.textContent = "Tu sesión expira en 10 segundos";
  btnExtender.style.display = "block";

  temporizadorCierre = setTimeout(() => {
    console.log("SESIÓN EXPIRADA. Ejecutando cierre.");
    avisoSesion.textContent("Sesión cerrada por inactividad");
    btnExtender.style.display = "none";
  }, TIEMPO_EXPIRACION);

  console.log(`[Temporizador] Iniciado. ID: ${temporizadorCierre}`);
}

function extenderSesion() {
    // 🔑 USO DE clearTimeout: Detenemos la ejecución pendiente
    clearTimeout(temporizadorCierre);
    console.log(`🟢 SESIÓN EXTENDIDA. Temporizador ID ${temporizadorCierre} cancelado.`);
    
    // Mostramos un mensaje de éxito y reiniciamos el temporizador
    avisoSesion.textContent = "Sesión extendida. Temporizador reiniciado.";
    
    // Reiniciamos el proceso después de un breve mensaje
    setTimeout(iniciarTemporizadorSesion, 2000); 
}

// --- LÓGICA DE INICIALIZACIÓN Y EVENTOS ---

// Event Listener para el botón "Extender Sesión"
btnExtender.addEventListener('click', extenderSesion);

// Iniciar el temporizador al cargar la aplicación
iniciarTemporizadorSesion();