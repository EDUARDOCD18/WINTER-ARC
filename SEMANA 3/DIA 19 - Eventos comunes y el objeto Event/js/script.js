/*   Tarea 1: Evitar la Recarga del Formulario
Objetivo: Capturar el evento submit, prevenir la recarga de la página y procesar la entrada.
*/

const formulario = document.getElementById("formulario__registro");
const inputNombre = document.getElementById("input__nombre");
const mensajeDisplay = document.getElementById("mensaje__form");

// 1. Manejador para el evento 'submit'
formulario.addEventListener("submit", (e) => {
  // 🔑 CLAVE: Detener la recarga de la página
  e.preventDefault();

  // 2. Procesar los datos
  const nombre = inputNombre.value;

  if (nombre.trim() === "") {
    mensajeDisplay.textContent = "El campo nombre no puede estar vacío";
    mensajeDisplay.classList.remove("alerta__verde");
    mensajeDisplay.classList.add("alerta__roja");
  } else {
    mensajeDisplay.textContent = `¡Datos enviados! Bienvenido ${nombre}.`;
    mensajeDisplay.classList.remove("alerta__roja");
    mensajeDisplay.classList.add("alerta__verde");
  }

  // Opcional: Limpiar el formulario
  formulario.reset();
});

/* 📝 Tarea 2: Capturar Eventos de Teclado (keydown)
Objetivo: Detectar y reaccionar a la pulsación de teclas específicas
 */

const inputTeclado = document.getElementById("input__teclado");
const mensajeTecla = document.getElementById("mensaje__tecla");

// 1. Escuchar el evento 'keydown' (cuando la tecla se presiona)
inputTeclado.addEventListener("keydown", (e) => {
  // 🔑 CLAVE: e.key o e.keyCode (aunque e.key es más moderno)
  mensajeTecla.textContent = `Tecla presionada: ${e.key}`;
  inputTeclado.value = ""; // Limpia el input

  // 2. Condición específica
  if (e.key === "Enter") {
    mensajeTecla.textContent = `¡ENTER presionado! Procesando acción...`;
    inputTeclado.value = ""; // Limpia el input
  }

  // 3. Bloquear una tecla (ej. la barra espaciadora)
  if (e.key === " ") {
    // Bloquea el espacio en este input
    e.preventDefault();
    mensajeTecla.textContent = "Tecla espacio bloqueda";
  }
});

/*  Ejercicios de Refuerzo */
/* 1.	Bloquear Enlace:
  o	En tu HTML, añade un enlace simple: <a href="https://www.google.com" id="enlace-bloqueado">Ir a Google</a>.
  o	En tu JavaScript, selecciona este enlace.
  o	Añádele un listener para el evento "click" que use e.preventDefault() para evitar que te lleve a Google. En su lugar, imprime en la consola: "¡Navegación interceptada!".
 */

const enlaceBloqueado = document.getElementById("enlace-bloqueado");
const mensaje__enlace = document.getElementById("mensaje__enlace");

enlaceBloqueado.addEventListener("click", (e) => {
  e.preventDefault();
  mensaje__enlace.textContent = "Enlace bloqueado";
  mensaje__enlace.classList.add("alerta__roja");
});

/* 2.	Eventos del Ratón Avanzados:
o	Selecciona el <p id="mensaje-form"> de la Tarea 1.
o	Añádele un listener para el evento "mousemove" (se dispara cada vez que el ratón se mueve sobre el elemento).
o	En la función callback, imprime las coordenadas del ratón usando: console.log(e.clientX, e.clientY). Observa cómo cambian estos valores.
 */

mensajeDisplay.addEventListener("mouseover", (e) => {
  (mensajeDisplay.textContent = e.clientX), e.clientY;
});

/* 3.	Capitalización Forzada:
o	Selecciona el <input id="input-teclado">.
o	Añádele un listener para el evento "input" (Día 18).
o	Dentro de la función, haz que el valor del input siempre se muestre en mayúsculas: e.target.value = e.target.value.toUpperCase();.
*/

inputTeclado.addEventListener("input", (e) => {
  e.target.value = e.target.value.toUpperCase();
});
