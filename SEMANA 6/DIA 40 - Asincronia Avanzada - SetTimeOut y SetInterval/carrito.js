const TIEMPO_ACTUALIZACION = 3000;
let intervaloActualizacion;

const estadoActualizacion = document.getElementById("estado-actualizacion");
const btnDetenerActualizacion = document.getElementById(
  "btn-detener-actualizacion"
);

function iniciarActualizacionAutomatica() {
  estadoActualizacion.textContent = "Actualizaciópn automática: En Curso";
  btnDetenerActualizacion.disabled = false;

  intervaloActualizacion = setInterval(() => {
    const horaActual = new Date().toLocaleDateString();
    console.log(
      `[Actualización] Carrito actualizado automáticamente a las ${horaActual}`
    );
  }, TIEMPO_ACTUALIZACION);
}

function detenerActualizacionAutomatica() {
  clearInterval(intervaloActualizacion);
  console.log(`[Intervalo] Detenido. ID: ${intervaloActualizacion}`);
  estadoActualizacion.textContent = "Actualización automática: Detenida";
  btnDetenerActualizacion.disabled = true;
}

// Event Listener para el botón "Detener Actualización"
btnDetenerActualizacion.addEventListener(
  "click",
  detenerActualizacionAutomatica
);

// Iniciar el proceso de actualización al cargar la aplicación
iniciarActualizacionAutomatica();
