const productos = [
  { nombre: "Laptop", precio: 1200, cantidad: 3 },
  { nombre: "Teclado", precio: 200, cantidad: 5 },
  { nombre: "Mouse", precio: 90, cantidad: 10 },
  { nombre: "Monitor", precio: 500, cantidad: 7 },
];

/* 📝 Tarea 1: Transformación con .map()
Objetivo: Crear un nuevo arreglo que contenga solo el nombre de los productos y otro con el precio final (precio * 1.16 IVA).
 */

// A. Obtener solo los nombres

const nombres = productos.map((producto) => producto.nombre);
console.log("Nombres: ", nombres);

// B. Calcular precio con IVA (16%)
const preciosConIVA = productos.map((producto) => {
  const precioIVA = producto.precio * 1.16;
  return parseFloat(precioIVA.toFixed(2));
});

console.log("Precios con IVA: ", preciosConIVA);

/* 📝 Tarea 2: Selección con .filter()
Objetivo: Crear un nuevo arreglo que contenga solo los productos que cuestan más de $100.
*/

const productosCaros = productos.filter((producto) => {
  // 🔑 La función DEBE devolver true o false.
  return producto.precio > 100;
});

console.log("Productos caros: ", productosCaros);

// Uso conciso (sin llaves ni return, solo la condición):
const productosEnStock = productos.filter((p) => p.cantidad > 6);
console.log("Productos con buena existencia: ", productosEnStock);

/* 1.	Mapeo de Nombres Completos (Transformación):
o	Tienes un arreglo de objetos: const usuarios = [{nombre: "Ana", apellido: "Perez"}, {nombre: "Luis", apellido: "Gomez"}].
o	Usa .map() para crear un nuevo arreglo llamado nombresCompletos.
o	Cada elemento del nuevo arreglo debe ser el nombre y el apellido unidos (ej. "Ana Perez").
 */

const usuarios = [
  { nombre: "Ana", apellido: "Perez" },
  { nombre: "Luis", apellido: "Gomez" },
];
const nombresCompletos = usuarios.map((usuarios) => {
  const nombreCompleto = usuarios.nombre + " " + usuarios.apellido;
  return nombreCompleto;
});
console.log(nombresCompletos);

/* 2.	Filtrado de Números (Selección):
o	Tienes un arreglo de números: const numeros = [5, 12, 8, 20, 15, 30].
o	Usa .filter() para crear un nuevo arreglo llamado filtrados.
o	El nuevo arreglo debe contener solo los números que son mayores que 10 Y menores que 25.
 */

const numeros = [5, 12, 8, 20, 15, 30];
const filtrados = numeros.filter((numeros) => {
  return numeros > 10 && numeros < 25;
});

console.log(filtrados);

/* 3.	Encadenamiento de Métodos (Avanzado):
o	Toma el arreglo productos del ejemplo.
o	Encadena .filter() seguido de .map() en una sola línea de código:
1.	Filtra los productos que tienen un precio menor a 100.
2.	Mapea el resultado para obtener un arreglo que solo contenga el nombre de esos productos.
o	El resultado final debería ser ['Mouse', 'Teclado'].
 */

const productosBaratosNombres = productos
  .filter((producto) => producto.precio < 100)
  .map((producto) => producto.nombre);
console.log(productosBaratosNombres);
