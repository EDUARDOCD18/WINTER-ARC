/**
 * app.js - Orquestador de la Tienda Inteligente
 * Integra: Módulos, Asincronía, Inmutabilidad y Delegación.
 */

import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";
import { cargarProductosAPI, cargarPreferenciasAPI } from "./async.js";
import { aplicarDescuento, formatearPrecio } from "./functional.js";

// --- 1. INSTANCIAS Y ESTADO ---
const miCarrito = new Carrito();
let productosGlobales = []; // Guardará los productos cargados de la API

// --- 2. REFERENCIAS AL DOM ---
const contenedorProductos = document.getElementById("lista-productos");
const contenedorCarrito = document.getElementById("items-carrito");
const displayTotal = document.getElementById("total-precio");
const notificationOferta = document.getElementById("notificacion-oferta");

// Elementos del Cupón
const inputCupon = document.getElementById("input-cupon");
const btnCupon = document.getElementById("btn-aplicar-cupon");
const mensajeCupon = document.getElementById("mensaje-cupon");

// --- 3. INICIALIZACIÓN ASÍNCRONA (RETO 1) ---
async function inicializarTienda() {
  try {
    // Ejecución en paralelo de productos y preferencias
    const [datosProductos, preferencias] = await Promise.all([
      cargarProductosAPI(),
      cargarPreferenciasAPI(),
    ]);

    // Convertir datos planos a instancias de la clase Producto
    productosGlobales = datosProductos.map(
      (p) => new Producto(p.id, p.nombre, p.precio)
    );

    console.log(`✨ Tienda cargada en modo: ${preferencias.tema}`);
    renderizarCatalogo();
    actualizarInterfazCarrito();
  } catch (error) {
    contenedorProductos.innerHTML = `<p style="color:red">Error al conectar con la tienda: ${error}</p>`;
  }
}

// --- 4. RENDERIZADO Y LÓGICA DE VISTA ---
function renderizarCatalogo() {
  contenedorProductos.innerHTML = productosGlobales
    .map(
      (p) => `
        <div class="producto-card">
            <div>
                <strong>${p.nombre}</strong> - ${formatearPrecio(p.precio)}
            </div>
            <button class="btn-agregar" data-id="${p.id}">Añadir</button>
        </div>
    `
    )
    .join("");
}

function actualizarInterfazCarrito() {
  contenedorCarrito.innerHTML = miCarrito.renderizar();
  const totalBase = miCarrito.obtenerSumaTotal();
  displayTotal.textContent = formatearPrecio(totalBase);
}

// --- 5. DELEGACIÓN DE EVENTOS ---
document.body.addEventListener("click", (e) => {
  // Agregar producto
  if (e.target.classList.contains("btn-agregar")) {
    const id = parseInt(e.target.dataset.id);
    const producto = productosGlobales.find((p) => p.id === id);
    miCarrito.agregarProducto(producto, 1);
    actualizarInterfazCarrito();
  }

  // Eliminar producto
  if (e.target.classList.contains("btn-eliminar")) {
    const id = parseInt(e.target.dataset.id);
    miCarrito.eliminarProducto(id);
    actualizarInterfazCarrito();
  }
});

// --- 6. SISTEMA DE CUPONES INMUTABLE (RETO 2) ---
btnCupon.addEventListener("click", () => {
  const totalActual = miCarrito.obtenerSumaTotal();
  const codigo = inputCupon.value;

  // Usamos la función pura de functional.js
  const totalConDescuento = aplicarDescuento(totalActual, codigo);

  if (totalConDescuento < totalActual) {
    mensajeCupon.style.color = "green";
    mensajeCupon.textContent = `¡Cupón aplicado! Nuevo total: ${formatearPrecio(
      totalConDescuento
    )}`;
    displayTotal.textContent = formatearPrecio(totalConDescuento);
  } else {
    mensajeCupon.style.color = "red";
    mensajeCupon.textContent = "Cupón inválido.";
  }
});

// --- 7. OFERTA RELÁMPAGO (RETO 3: setInterval + setTimeout) ---
setInterval(() => {
  // Mostrar notificación
  notificationOferta.style.display = "block";
  console.log("🔥 Oferta relámpago iniciada");

  // Ocultar después de 5 segundos
  setTimeout(() => {
    notificationOferta.style.display = "none";
    console.log("☁️ Oferta relámpago terminada");
  }, 5000);
}, 15000); // Se repite cada 15 segundos

// --- INICIO ---
inicializarTienda();
