/* Declaración y reasignación */
let edad = 25;
console.log("Edad 1: " + edad);

edad = 26;
console.log("Edad modificada: " + edad);

/* Inmutabilidad (const) */
const nombre = "Javier Eduardo";
console.log("Mi nombre es: " + nombre);

/* nombre = "Ana Maria"; */ // Esto causará un error

/* Usando var (mala práctica) */
var resultado = "Fuera de bloque";

if (true) {
  var resultado = "Dentro de bloque";
  console.log("Resultado dentro del bloque: " + resultado);
}

console.log(resultado);

/* Ejemplo similar al anterior, usando let */
let puntaje = 100;

if (true) {
  let puntaje = 50;
  console.log("Resultado de puntaje dentro del bloque: " + puntaje);
}
console.log("Resultado de puntaje fuera del bloque: " + puntaje);
