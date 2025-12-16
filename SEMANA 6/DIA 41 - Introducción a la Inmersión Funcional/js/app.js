// app.js

// 🔑 1. IMPORTACIONES
import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";
import Settings from "./config.js";
import { cargarUsuarios, cargarConfiguracion, cargarVentas } from "./async.js"; // Día 39

// --- 2. DATOS DE INICIALIZACIÓN ---

const miCarrito = new Carrito();
const productosDisponibles = [
  new Producto(101, "Libro de Python", 35.0),
  new Producto(102, "Monitor Curvo", 180.0),
  new Producto(103, "Webcam HD", 45.0),
];

// Contenedores del DOM
const contenedorProductos = document.getElementById("lista-productos");
const contenedorCarrito = document.getElementById("items-carrito");

// --- 3. FUNCIONES DE VISTA Y COORDINACIÓN ---

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

function actualizarVistaCarrito(carritoInstance) {
  contenedorCarrito.innerHTML = "";
  const htmlCarrito = carritoInstance.renderizarCarrito();
  contenedorCarrito.insertAdjacentHTML("afterbegin", htmlCarrito);
  console.log(
    `🛒 Total Actualizado: ${
      Settings.MONEDA
    } ${carritoInstance.calcularTotal()}`
  );
}

// --- 4. 🧠 DELEGACIÓN DE EVENTOS (Día 38) ---

function inicializarDelegacionDeEventos() {
  // DELEGACIÓN PARA ELIMINAR (Carrito)
  contenedorCarrito.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
      e.preventDefault();
      const itemId = parseInt(e.target.dataset.id);
      miCarrito.eliminarProducto(itemId);
      actualizarVistaCarrito(miCarrito);
    }
  });

  // DELEGACIÓN PARA AÑADIR (Productos Disponibles)
  contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-agregar")) {
      e.preventDefault();
      const itemId = parseInt(e.target.dataset.id);
      const productoAAgregar = productosDisponibles.find(
        (prod) => prod.id === itemId
      );

      if (productoAAgregar) {
        miCarrito.agregarProducto(productoAAgregar, 1);
        actualizarVistaCarrito(miCarrito);
      }
    }
  });

  console.log("Delegación de eventos preparada.");
}

// ------------------------------------------------------------------
// --- LÓGICA DE ASINCRONÍA (Días 39 y 40) ---

// --- DÍA 39: Promise.all() ---
function demoPromesasExitosas() {
  // Lógica para Promise.all Exitoso...
}
function demoPromesasConFalla() {
  // Lógica para Promise.all con Falla...
}

// --- DÍA 40: setTimeout y setInterval ---

// TAREA 1: setTimeout (Cierre de Sesión)
const TIEMPO_EXPIRACION = 10000;
let temporizadorCierre;
const avisoSesion = document.getElementById("aviso-sesion");
const btnExtender = document.getElementById("btn-extender");

function iniciarTemporizadorSesion() {
  avisoSesion.textContent = "Tu sesión expira en 10 segundos.";
  btnExtender.style.display = "block";

  temporizadorCierre = setTimeout(() => {
    console.log("🔴 SESIÓN EXPIRADA. Ejecutando cierre de sesión...");
    avisoSesion.textContent = "¡Sesión cerrada por inactividad!";
    btnExtender.style.display = "none";
  }, TIEMPO_EXPIRACION);
}

function extenderSesion() {
  clearTimeout(temporizadorCierre); // 🔑 clearTimeout
  console.log(`🟢 SESIÓN EXTENDIDA. Temporizador cancelado.`);
  avisoSesion.textContent = "Sesión extendida. Reiniciando temporizador.";
  setTimeout(iniciarTemporizadorSesion, 2000);
}
btnExtender.addEventListener("click", extenderSesion);

// TAREA 2: setInterval (Actualización del Carrito)
const TIEMPO_ACTUALIZACION = 3000;
let intervaloActualizacion;
const estadoActualizacion = document.getElementById("estado-actualizacion");
const btnDetenerActualizacion = document.getElementById(
  "btn-detener-actualizacion"
);

function iniciarActualizacionAutomatica() {
  estadoActualizacion.textContent = "Actualización automática: En Curso...";
  btnDetenerActualizacion.disabled = false;

  intervaloActualizacion = setInterval(() => {
    const horaActual = new Date().toLocaleTimeString();
    console.log(
      `⏱️ [Actualización] Carrito actualizado automáticamente a las ${horaActual}`
    );
    // Aquí se llamaría a actualizarVistaCarrito(miCarrito) para refrescar el DOM
  }, TIEMPO_ACTUALIZACION);
}

function detenerActualizacionAutomatica() {
  clearInterval(intervaloActualizacion); // 🔑 clearInterval
  console.log(`🛑 [Intervalo] Detenido.`);
  estadoActualizacion.textContent = "Actualización automática: Detenida.";
  btnDetenerActualizacion.disabled = true;
}
btnDetenerActualizacion.addEventListener(
  "click",
  detenerActualizacionAutomatica
);

// ------------------------------------------------------------------
// --- 5. ARRANQUE DE LA APLICACIÓN ---

// 1. Inyectar los productos disponibles
const htmlAInsertar = generarHTMLProductos(productosDisponibles);
contenedorProductos.insertAdjacentHTML("beforeend", htmlAInsertar);

// 2. Inicializar la lógica de Delegación
inicializarDelegacionDeEventos();

// 3. Renderizar el estado inicial del carrito
actualizarVistaCarrito(miCarrito);

// 4. Iniciar la lógica de Asincronía (Día 40)
iniciarTemporizadorSesion();
iniciarActualizacionAutomatica();

// 5. Ejecutar Demos de Promesas (Día 39)
// demoPromesasExitosas();
// demoPromesasConFalla();
