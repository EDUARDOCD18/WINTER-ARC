/* 📝 Tarea 1: Controlar una Clase CSS
Objetivo: Añadir y luego quitar la clase .resaltado al elemento.
 */

// 1. Seleccionar elemento
const caja = document.getElementById("caja__interactiva");

console.log("Estado inicial:", caja.classList.value);

// 2. Añadir la clase después de 2 segundos (simulando una acción)

setTimeout(() => {
  caja.classList.add("caja__interactiva--resaltada");
  console.log("Clase añadida:", caja.classList.value);
}, 2000);

// 3. Quitar la clase después de 4 segundos
setTimeout(() => {
  caja.classList.remove("caja__interactiva--resaltada");
  console.log("Clase quitada:", caja.classList.value);
}, 4000);

/* 📝 Tarea 2: Uso de .toggle() y .style
Objetivo: Usar toggle para simular un switch y style para un cambio puntual.
 */

// 1. Usar .toggle() para añadir la clase si no existe, o quitarla si existe.
// Ejecutar esto a los 6 segundos
setTimeout(() => {
  caja.classList.toggle("caja__interactiva--resaltada");
  console.log("Toggle aplicado:", caja.classList.value);
}, 6000);

// Ejecutar esto a los 8 segundos (quitará la clase)
setTimeout(() => {
  caja.classList.toggle("caja__interactiva--resaltada");
  console.log("Toggle 2 (Quitado):", caja.classList.value);
}, 8000);

// 2. Usar .style para un cambio directo (Estilo en Línea)
setTimeout(() => {
  caja.style.fontSize = "2rem";
  caja.style.border = ".5rem dashed blue";
}, 10000);

/* 🏋️ Ejercicios de Refuerzo */
/* 🏋️ Ejercicios de Refuerzo
1.	Toggle de Visibilidad:
o	Añade la clase .oculto (del CSS de arriba) al elemento caja usando .classList.add().
o	Luego, usa setTimeout para quitar la clase .oculto después de 3 segundos, haciendo que el elemento "aparezca".
 */

// Añadir la clase .oculto inmediatamente
caja.classList.add("oculto");
console.log("Clase .oculto añadida:", caja.classList.value);

setTimeout(() => {
  caja.classList.remove("oculto");
}, 3000);

/* 2.	Comprobación de Clase:
o	Usa el método .classList.contains("nombre-clase") que devuelve true o false.
o	Escribe una condicional (if/else) que verifique si la caja contiene la clase "resaltado".
o	Si la contiene, imprime en consola: "El elemento ya está resaltado."; si no, añade la clase.
 */

let contieneClase = caja.classList.contains("caja__interactiva--resaltada");

if (!contieneClase) {
  console.log("si");
} else {
  console.log("no");
}
/* 3.	Color de Fondo Aleatorio:
o	Selecciona el <body> usando document.querySelector("body").
o	Cambia el backgroundColor del body a "red" usando la notación .style.
o	Luego, cambia el color a "green" usando la misma notación.
 */

let cuerpo = document.querySelector("body");

cuerpo.style.backgroundColor = "red";
cuerpo.style.backgroundColor = "green";

