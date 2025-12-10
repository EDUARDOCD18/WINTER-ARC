// app.js

// 🔑 1. IMPORTACIONES
import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";
import Settings from "./config.js";

// --- 2. DATOS DE INICIALIZACIÓN ---

// Inicializar la instancia del Carrito
const miCarrito = new Carrito();

// Definir los Productos Disponibles (usando la Clase Producto importada)
const productosDisponibles = [
  new Producto(101, "Libro de Python", 35.0),
  new Producto(102, "Monitor Curvo", 180.0),
  new Producto(103, "Webcam HD", 45.0),
];

// Contenedores del DOM (Definición Global)
const contenedorProductos = document.getElementById("lista-productos");
const contenedorCarrito = document.getElementById("items-carrito");

// --- 3. FUNCIONES DE VISTA Y COORDINACIÓN ---

/**
 * Genera la estructura HTML para la lista de productos disponibles.
 */
function generarHTMLProductos(productos) {
  let html = ``;

  productos.forEach((prod) => {
    html += `<div class="producto-card" data-id="${prod.id}">
                <h3>${prod.nombre}</h3>
                <p>Precio: ${Settings.MONEDA} ${prod.precio.toFixed(2)}</p>
                <button class="btn-agregar" data-id="${
      prod.id
    }">Añadir al Carrito</button>
            </div>
`;
  });

  return html;
}

/**
 * Vacía el contenedor del carrito e inyecta el HTML actualizado.
 */
function actualizarVistaCarrito(carritoInstance) {
  // 1. Vaciar el contenedor (para evitar duplicados)
  contenedorCarrito.innerHTML = ""; // 2. Generar el HTML con la data actual del carrito

  const htmlCarrito = carritoInstance.renderizarCarrito(); // 3. Inyección eficiente (insertAdjacentHTML)

  contenedorCarrito.insertAdjacentHTML("afterbegin", htmlCarrito);

  console.log(
    `🛒 Total Actualizado: ${
      Settings.MONEDA
    } ${carritoInstance.calcularTotal()}`
  );
}

// --- 4. 🧠 DELEGACIÓN DE EVENTOS (CÓDIGO FINAL DEL DÍA 38) ---

function inicializarDelegacionDeEventos() {
  // ✅ EJERCICIO 1: DELEGACIÓN PARA ELIMINAR (Contenedor del Carrito)
  // Este listener maneja los clics en los botones que se crean dinámicamente.
  contenedorCarrito.addEventListener("click", (e) => {
    // 🔑 Identificar si el target es un botón de eliminar

    console.log("Origen del click en Carrito (nodeName):  ", e.target.nodeName);

    if (e.target.classList.contains("btn-eliminar")) {
      e.preventDefault();
      console.log("Se ha seleccionado para eliminar");
      // Obtener el ID y convertirlo a número entero
      const itemId = parseInt(e.target.dataset.id);
      // Ejecutar lógica de negocio
      miCarrito.eliminarProducto(itemId);
      // Actualizar la Interfaz
      actualizarVistaCarrito(miCarrito);
    }
  }); // ✅ EJERCICIO 2: DELEGACIÓN PARA AÑADIR (Contenedor de Productos Disponibles)

  contenedorProductos.addEventListener("click", (e) => {
    // 🔑 Identificar si el target es un botón de añadir
    if (e.target.classList.contains("btn-agregar")) {
      e.preventDefault(); // 1. Obtener el ID del producto

      const itemId = parseInt(e.target.dataset.id);

      // 2. Buscar el objeto Producto completo en el array (Array.prototype.find)
      const productoAAgregar = productosDisponibles.find(
        (prod) => prod.id === itemId
      );

      if (productoAAgregar) {
        // 3. Llama a la lógica de negocio para añadirlo
        miCarrito.agregarProducto(productoAAgregar, 1);
        // 4. Actualiza la Interfaz
        actualizarVistaCarrito(miCarrito);
      }
    }
  });

  console.log("Delegación de eventos preparada.");
}

// --- 5. ARRANQUE DE LA APLICACIÓN ---

// 1. Inyectar los productos disponibles
const htmlAInsertar = generarHTMLProductos(productosDisponibles);
contenedorProductos.insertAdjacentHTML("beforeend", htmlAInsertar);

// 2. Inicializar la lógica de Delegación
inicializarDelegacionDeEventos();

// 3. Renderizar el estado inicial del carrito (si hay ítems guardados)
actualizarVistaCarrito(miCarrito);
