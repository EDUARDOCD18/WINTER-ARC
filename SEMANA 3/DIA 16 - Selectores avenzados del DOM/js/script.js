// 1. Seleccionar la clase CSS (El primer elemento con la clase 'texto-clase')

const primerParrafoClase = document.querySelector(".texto__clase");
primerParrafoClase.textContent = "¡ESTE ES EL PRIMER TEXTO MODIFICADO";
console.log(primerParrafoClase);

// 2. Seleccionar una etiqueta HTML (El primer <div>)
const primerDiv = document.querySelector("div");
primerDiv.style.backgroundColor = "yellow";
console.log(primerDiv);

/* 📝 Tarea 2: Seleccionar Múltiples Elementos (querySelectorAll) */

// 1. Seleccionar todos los elementos con la clase 'tarjeta'
const todasLasTarjetas = document.querySelectorAll(".tarjeta");
console.log(todasLasTarjetas);

// 2. Usar un bucle (Día 14) para modificar cada elemento de la NodeListF
for (let i = 0; i < todasLasTarjetas.length; i++) {
  todasLasTarjetas[i].textContent = `Tarjeta Modificada ${i + 1}`;
  todasLasTarjetas[i].style.border = "2px solid blue";
}

/*  Ejercicios de Refuerzo */
/* 1.	Selección por Etiqueta y Condición:
o	    Usa querySelectorAll() para obtener todos los elementos h2 en tu página.
o	    Itera sobre esta NodeList y cambia el color de fondo de todos los h2 a lightgray.
 */

const todosLosH2 = document.querySelectorAll("h2");
for (let i = 0; i < todosLosH2.length; i++) {
  todosLosH2[i].style.backgroundColor = "red";
  todosLosH2[i].style.color = "white";
}

/* 2.	Selección Anidada (querySelector complejo):
o	Usa querySelector() para seleccionar un elemento anidado, por ejemplo: el <button> que está dentro de la <section> con la clase .contenedor-principal.
o	El selector CSS sería: section.contenedor-principal button.
o	Cambia el textContent de ese botón a: "¡Botón Seleccionado!".
 */

const botonAnidado = document.querySelector("section.contenedor__principal button");
botonAnidado.textContent = "¡Botón Seleccionado!";

/* 3.	Comprobación del DOM:
o	Intenta seleccionar un elemento que no existe (ej. document.querySelector(".clase-inexistente")).
o	¿Qué valor te devuelve? (Pista: null).
o	Usa una condicional if para imprimir "Elemento encontrado" solo si el resultado NO es null.
 */

const noExitye = document.querySelector(".hora__seleccionada")
if (noExitye !== null) {
  console.log("Elemento encontrado");
} else {
  console.log("Elemento no encontrado");
}