/* Declaración de variables */
let nombre = "Javier";
let edad = 25;
let esMayor = true;
let costoTotal = 299;
let valorVacio = null;
let sinDefinir;

/* Determinar por medio de typeof() qué tipo de dato es */
console.log("nombre es: " + typeof nombre);
console.log("edad es: " + typeof edad);
console.log("esMayor es: " + typeof esMayor);
console.log("costoTotal es: " + typeof costoTotal);
console.log("valorVacio es: " + typeof valorVacio);
console.log("sinDefinir es: " + typeof sinDefinir);

/* Operadores Aritméticos */

// Declaración de variables numéricas
let a = 10;
let b = 3;

// Suma
let suma = a + b;
console.log("Suma: " + suma);

// Resta
let resta = a - b;
console.log("Resta: " + resta);

// Multiplicación
let multiplicacion = a * b;
console.log("Multiplicación: " + multiplicacion);

// División
let division = a / b;
console.log("División: " + division);

// Módulo
let modulo = a % b;
console.log("Módulo: " + modulo);

/* Coerción Implícita */

// Caso 1: String + Numbre
let resultadoA = "El resultado es: " + 10 + 5;
console.log(resultadoA);

// Caso 2: Number + Number * String
let resultadoB = 10 + 5 + " es el resultado";
console.log(resultadoB);

// Caso 3: String - Number
let resultadoC = "20" - 5;
console.log(resultadoC);

/* EJERCICIO DE REFUERZO */
let nota1 = 20,
  nota2 = 20,
  nota3 = 20,
  mensaje = "El promedio es: ";

console.log(mensaje + (nota1 + nota1 + nota3) / 3);

/* CONVERSIÓN EXPLÍCITA  */
const precioTexto = "150.99";
const precioNumero = parseFloat(precioTexto);
console.log("El precio es: " + precioNumero);
console.log("Tipo de dato de precioNumero es: " + typeof precioNumero);
console.log("El precio es: " + precioNumero);
const sumaTotal = precioNumero + 50;
console.log("La suma total es: " + sumaTotal);
