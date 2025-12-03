const pelicula = {
  titulo: "Star Wars",
  director: "George Lucas",
  anio: 1977,
  duracion: "121 min",
};

const { titulo, director, anio } = pelicula;

console.log(
  `Película: ${titulo} del director ${director} fue estrenada en ${anio}.`
);

console.log("============================");

const producto = {
  nombre: "Teclado Mecánico",
  precio: 100,
};

const { nombre: nombreItem, precio, stock = 10 } = producto;
console.log(nombreItem);
console.log(stock);

console.log("============================");

const frutas = ["Manzana", "Banana", "Fresa", "Piña", "Kiwi"];
const [fruta1, , fruta3] = frutas;

console.log(`Mi fruta favorita es ${fruta1}`);
console.log(`Mi segunda fruta favorita es ${fruta3}`);

console.log("============================");

function mostrarCoordendas([x, y]) {
  console.log(`X: ${x}, Y:${y}`);
}

mostrarCoordendas([100, 340]);

console.log("============================");

const usuario = {
  id: 2,
  nombre: "Javier",
  direccion: {
    calle: "Calle Concordia",
    ciudad: "Carrizal",
  },
};

const {
  direccion: { ciudad },
} = usuario;
console.log(ciudad);

console.log("============================");

const numero = [1, 2, 3, 4, 5, 6];
const [numero1, numero2, ...restoNumeros] = numero;

console.log(numero1);
console.log(numero2);
console.log(restoNumeros);

console.log("============================");

class Producto {
  constructor(nombre, precio) {
    // ... (validación si aplica) ...
    this.nombre = nombre;
    this.precio = precio;
  }
}

function imprimirDetalles(producto) {
  const { nombre, precio } = producto;
  console.log(`Detalles: ${nombre} - ${precio}`);
}
const laptop = new Producto("Acer", 3000);
imprimirDetalles(laptop);

function imprimirDetalles2({ nombre, precio }) {
  console.log(`Detalles: ${nombre} - ${precio}`);
}

const miMouse = new Producto("Mouse Inalámbrico", 35);
imprimirDetalles2(miMouse);
