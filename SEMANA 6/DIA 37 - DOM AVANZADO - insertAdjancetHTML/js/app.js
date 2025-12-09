// app.js

// 🔑 Importación de Clases y Constantes
import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";
import Settings from "./config.js";

// --- Funciones de Renderizado (Lógica de la Vista) ---

function generarHTMLProductos(productos) {
  let html = ``;

  productos.forEach((prod) => {
    // Usamos el ID para identificar qué producto se añade
    html += `<div class="producto-card" data-id="${prod.id}">
                <h3>${prod.nombre}</h3>
                <p>Precio: $${prod.precio.toFixed(2)}</p>
                <button class="btn-agregar" data-id="${prod.id}">Añadir</button>
            </div>
`;
  });

  return html;
}

// Función principal de actualización del carrito en el DOM
function actualizarVistaCarrito(carritoInstance) {
  // 1. Obtener contenedores
  const contenedorCarrito = document.getElementById("items-carrito");

  // 2. Vaciar el contenedor antes de renderizar
  contenedorCarrito.innerHTML = "";

  // 3. Generar HTML y Inyectar
  const htmlCarrito = carritoInstance.renderizarCarrito(); // ✅ Llama sin argumentos
  contenedorCarrito.insertAdjacentHTML("afterbegin", htmlCarrito);

  // Opcional: Mostrar el total
  console.log(
    `\n🛒 Total Actualizado: ${
      Settings.MONEDA
    } ${carritoInstance.calcularTotal()}`
  );
}

// --- 3. LÓGICA DE INICIALIZACIÓN (Punto de Entrada) ---

// 1. Instanciar el Carrito (CORRECCIÓN: Inicialización faltante)
const miCarrito = new Carrito();

// 2. Definir Productos Disponibles (usando la Clase Producto importada)
const productosDisponibles = [
  new Producto(101, "Libro de Python", 35.0),
  new Producto(102, "Monitor Curvo", 180.0),
  new Producto(103, "Webcam HD", 45.0),
];

// 3. Renderizar los Productos Disponibles (Ejecución del Día 37)
const contenedorProductos = document.getElementById("lista-productos");
const htmlAInsertar = generarHTMLProductos(productosDisponibles);

contenedorProductos.insertAdjacentHTML("beforeend", htmlAInsertar);
console.log("Productos disponibles inyectados correctamente.");

// 4. Renderizar el Estado Inicial del Carrito
actualizarVistaCarrito(miCarrito);

// 5. Simulación de Acción (Si el carrito está vacío, añadir algo para ver la data)
if (miCarrito.items.length === 0) {
  console.log("Añadiendo ítems de demostración...");
  miCarrito.agregarProducto(productosDisponibles[0], 1);
  miCarrito.agregarProducto(productosDisponibles[1], 1);

  // 6. Volver a renderizar después de la simulación
  actualizarVistaCarrito(miCarrito);
}
