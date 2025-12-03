/* 📝 Tarea 1: Añadir un Evento de Clic Simple
Objetivo: Incrementar un contador en el DOM cada vez que se hace clic en un botón.
 */

// Variables de estado y elementos del DOM
let contador = 0;
const contadorDisplay = document.getElementById("contador__clicks");
const botonSumar = document.getElementById("btn__sumar");
const botonReset = document.getElementById("btn__reset");

// 1. Definir la función que maneja el clic
const manejarSumar = () => {
  contador++;
  contadorDisplay.textContent = `Clicks: ${contador}`;
};

// 2. Adjuntar el evento al botón
botonSumar.addEventListener("click", manejarSumar);
botonSumar.addEventListener("dbclick", () => {
  console.log("Rápido");
});

/* 📝 Tarea 2: Manejar un Segundo Evento (reset)
Objetivo: Crear un evento separado para reiniciar el contador.
 */

// 1. Definir la función que maneja el reinicio
botonReset.addEventListener("click", () => {
  // Función anónima o callback: se ejecuta solo al hacer clic
  contador = 0;
  contadorDisplay.textContent = `Clicks: 0`;
  alert("Contador reiniciado");
});

/* 📝 Tarea 3: Evento de Ratón (mouseover)
Objetivo: Usar un evento diferente para cambiar los estilos al pasar el ratón.
 */

const contenedor = document.getElementById("contenedor__eventos");

// 1. Evento: Ratón entra al elemento
contenedor.addEventListener("mouseover", () => {
  contenedor.classList.add("colocar");
});

/* // 2. Evento: Ratón sale del elemento */
contenedor.addEventListener("mouseout", () => {
  // Volvemos al estado original al quitar el ratón
  contenedor.classList.remove("colocar");
});

/* 2.	Validación de Input (Evento input):
o	En tu HTML, añade un campo de texto: <input type="text" id="input-texto">.
o	En JavaScript, selecciona ese input.
o	Usa el evento "input" (que se dispara cada vez que el texto cambia) para registrar lo siguiente:
	Crea una función callback que imprima el valor actual del campo de texto usando: console.log(event.target.value).
 */

entrada = document.getElementById("input__texto");
entrada.addEventListener("input", () => {
  console.log(entrada.value);
});
