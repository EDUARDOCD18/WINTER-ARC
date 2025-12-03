const frutas = ["Manzana", "Pera", "Pomelo"];
const verduras = ["Repollo", "Papa", "Zanahoria"];

const copiaFrutas = [...frutas];
console.log("Copia", copiaFrutas);

console.log("====================");

const listaCompleta = [...frutas, ...verduras];
console.log("Combinando: ", listaCompleta);

console.log("====================");

const productosBase = {
  nombre: "Teclado",
  precio: 90,
};

const productoCompleto = {
  ...productosBase,
  stock: 50,
  categoria: "Periféricos",
};

console.log("Producto completo: ", productoCompleto);

console.log("====================");

const productoDescuento = {
  ...productoCompleto,
  precio: 60,
};
console.log("Producto don desduento: ", productoDescuento);

console.log("====================");

function mostrarDatos(nombre, ...otros) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Datos Adicionales (Array):`, otros);
}
mostrarDatos("Homero", 50, false, "Casa");

console.log("====================");

const infoUsuario = {
  nombre: "Javi",
  edad: 26,
};

const inforDireccion = {
  calle: "Calle 123",
  ciudad: "Courtcast",
};

const perfilCompleto = {
  ...infoUsuario,
  ...inforDireccion,
};

console.log(perfilCompleto);

console.log("====================");

listaProductos = ["Queso", "Mortalde", "Pan"];

const listaActualizada = [...listaProductos, "Pollo", "Yogurt", "Cereal"];

console.log(listaActualizada);

console.log("====================");

function calcularPromedio(nombre, ...notas) {
  const sumaTotal = notas.reduce(
    (acumulador, notaActual) => acumulador + notaActual,
    0
  );

  const promedio = sumaTotal / notas.length;

  console.log(`Estudiante ${nombre}`);
  console.log(`Notas capturadas [${notas.join(", ")}]`);
  console.log(`El promedio es ${promedio.toFixed(2)}`);
  return promedio;
}

calcularPromedio("Javi", 7, 8.5, 9, 6);
