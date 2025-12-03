/* 📝 Tarea 1: Seleccionar y Modificar Contenido
Objetivo: Usar document.getElementById() para seleccionar un encabezado y cambiar su texto.
 */

// 1. Seleccionar el H1 por su ID
const titulo = document.getElementById("titulo__principal");

// 2. Modificar su texto usando textContent
titulo.textContent = "Saludo moficiado desde JS";

// 3. Seleccionar el párrafo y asignarle un valor de variable
const parrafo = document.getElementById("parrafo__mensaje");
const nuevoMensaje = "Este es el nuevo mensaje asignado desde JS";
parrafo.textContent = nuevoMensaje;

/* 📝 Tarea 2: Usar Variables en el DOM
Objetivo: Usar los conocimientos de las variables (Día 8) para crear un mensaje personalizado en el DOM.
 */

// Definimos variables JS
const nombreUsuario = "Javier Eduardo";
const rolUsuario = "Desarrollador Web";

// 1. Creamos un nuevo párrafo en HTML con un ID único: <p id="saludo-personal"></p>
const saludoPersonal = document.getElementById("saludo__personal");

// 2. Usamos interpolación de string (template literals) para el contenido
if (saludoPersonal) {
  saludoPersonal.textContent = `Hola, ${nombreUsuario}! Bienvenido como ${rolUsuario}.`;
} else {
  console.error(
    "El elemento con ID 'saludo__personal' no se encontró en el DOM."
  );
}

/* 🏋️ Ejercicios de Refuerzo */
/* 1.	Cambio de Color (Estilo en Línea):
o	    Selecciona el elemento con id="titulo-principal".
o	    Usa la propiedad .style.color para cambiar el color del texto a "blue".
o	    Tip: El estilo en línea se accede directamente a través de la propiedad .style en el objeto DOM.
 */

const cambioColor = document.getElementById("titulo__principal");
cambioColor.style.color = "red";

/* 2.	Mostrar un Array de Datos:
o	    Crea un arreglo const productos = ["Laptop", "Monitor", "Teclado"];.
o	    En el HTML, añade un elemento <div> con el ID lista-productos.
o	    Usa document.getElementById("lista-productos").textContent para mostrar todo el contenido del arreglo, convirtiéndolo a string (JS lo hará automáticamente).
o	    Resultado: El HTML debe mostrar: Laptop,Monitor,Teclado.
 */

const productos = ["Laptop", " Monitor", " Teclado"];
const listaProductos = (document.getElementById(
  "lista__productos"
).textContent = productos);

/* 3.	Contador Básico:
o	    Declara una variable let contador = 0;.
o	    En el HTML, añade un <span id="valor-contador">0</span>.
o	    Incrementa contador tres veces.
o	    Al final, actualiza el textContent del <span> con el valor final de la variable contador.
 */

let contador = 0;
contador++;
contador++;
contador++;
document.getElementById("valor__contador").textContent = contador;

