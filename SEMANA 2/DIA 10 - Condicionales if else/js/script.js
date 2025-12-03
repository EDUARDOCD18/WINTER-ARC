/* Tarea 1: Control de Flujo Básico (if/else if/else)
Objetivo: Crear una función que determine si un estudiante aprueba, está en recuperación o reprueba.
 */

function evaluarEstudiante(nota) {
  if (nota >= 18) {
    console.log("Aprobado con honores");
  } else if (nota >= 12) {
    console.log("Aprobado simple");
  } else {
    console.log("Curso reprobado");
  }
}

// Caso de que el alumno tenaga más de 12
evaluarEstudiante(13);

// Caso de que el alumno tenaga más de 18
evaluarEstudiante(19);

// Caso de que el alumno repita
evaluarEstudiante(10);

/* Tarea 2: El Peligro de la Igualdad Flexible (== vs ===)
Objetivo: Demostrar por qué se debe usar el triple igual (===) para evitar errores de tipo.
 */

let valorNumerico = 5;
let valorTexto = "5";

// 1. Igualdad flexible (==)
if (valorNumerico == valorTexto) {
  console.log('== es TRUE: convierte el string "5" a número. ¡Cuidado!');
}

// 2. Igualdad estricta (===)
if (valorNumerico === valorTexto) {
  console.log("=== es TRUE");
} else {
  console.log("=== es FALSE: El valor y el TIPO deben ser iguales.");
}

/* Tarea 3: Probando la Falsy
Objetivo: Ver cómo los valores "vacíos" detienen el flujo del if.
 */

let nombreUsuario = ""; // Cadena vacía es un valor falsy

if (nombreUsuario) {
  console.log("El nombre tiene un valor (truthy");
} else {
  console.log("El nombre está vacío (falsy)");
}

// Muestra: El nombre está vacío (Falsy)
let productoEnCarrito = 0;
if (productoEnCarrito) {
  console.log("Hay productos en el carrito (truthy)");
} else {
  console.log("El carrito está vacío (falsy)");
}

/*  Ejercicios de Refuerzo */

// 1.	Verificación de Edad con Operadores Lógicos:
/* o	Declara una variable const edad = 17;
o	    Usa un if/else para verificar dos condiciones al mismo tiempo usando el operador && (AND lógico):
	    Condición: Si la edad es >= 18 Y la edad es <= 65.
	    Si es true, imprime: "Es adulto activo."
	    En caso contrario, imprime: "Es menor o jubilado."
 */

function verificarEdad(edad1, edad2) {
  if (edad1 >= 18 && edad2 <= 65) {
    console.log("Es adulto activo");
  } else {
    console.log("Es menor o jubilador");
  }
}

verificarEdad(18, 56);

// 2.	Verificación de Acceso con Negación:
/* o	Declara dos variables const: user = "admin"; y pass = "1234";.
o	    Declara dos variables let: inputUser = "admin"; y inputPass = "12345";.
o	    Usa un if/else con el operador || (OR lógico) para verificar si las credenciales fallaron:
	    Condición: Si inputUser !== user O inputPass !== pass.
	    Si es true, imprime: "Credenciales inválidas."
	    Si es false, imprime: "Acceso concedido."
 */

const user = "admin",
  pass = "1234";

let inputUser = "admin",
  inputPass = "12345";
if (inputUser !== user || inputPass !== pass) {
  console.log("Credenciales inválidas");
} else {
  console.log("Acceso concedido");
}

// 3. El caso null
/*  o	Declara una variable let data = null;.
o	    En un if (data), ¿qué bloque se ejecuta: el if o el else? Explica por qué. (Pista: null es Falsy).
*/

let data = null;
if (data) {
  console.log("El bloque if se ejecuta");
} else {
  console.log("El bloque else se ejecuta porque null es un valor falsy");
}