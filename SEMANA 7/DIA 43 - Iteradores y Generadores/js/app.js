/**
 * app.js - Orquestador con Flujo de Generadores (Día 43)
 */

import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";
import { cargarProductosAPI, cargarPreferenciasAPI } from "./async.js";
import { aplicarDescuento, formatearPrecio } from "./functional.js";
// 1. Importamos el generador de la nueva lección
import { procesoCompra } from "./checkout.js";

// --- ESTADO Y VARIABLES ---
const miCarrito = new Carrito();
let productosGlobales = [];
let flujoPago; // Aquí guardaremos la instancia del generador

// --- ELEMENTOS DEL DOM ---
const contenedorProductos = document.getElementById("lista-productos");
const contenedorCarrito = document.getElementById("items-carrito");
const displayTotal = document.getElementById("total-precio");
// Elementos para el Generador
const btnPasoPago = document.getElementById("btn-paso-pago");
const mensajePaso = document.getElementById("mensaje-paso");

// --- INICIALIZACIÓN ---
async function inicializarTienda() {
    try {
        const [datosProductos, preferencias] = await Promise.all([
            cargarProductosAPI(),
            cargarPreferenciasAPI()
        ]);

        productosGlobales = datosProductos.map(p => new Producto(p.id, p.nombre, p.precio));
        renderizarCatalogo();
        actualizarInterfazCarrito();
        
    } catch (error) {
        console.error("Error al iniciar:", error);
    }
}

// --- LÓGICA DEL GENERADOR (Día 43) ---
function manejarFlujoPago() {
    // Si el generador no ha sido iniciado, lo creamos
    if (!flujoPago) {
        flujoPago = procesoCompra(miCarrito);
    }

    // Ejecutamos el siguiente paso (.next())
    const paso = flujoPago.next();

    if (!paso.done) {
        // Mostramos el valor que viene del 'yield'
        mensajePaso.textContent = paso.value;
        btnPasoPago.textContent = "Continuar...";
    } else {
        // Cuando done es true, el proceso terminó
        mensajePaso.textContent = "✨ ¡Proceso finalizado!";
        btnPasoPago.disabled = true;
        flujoPago = null; // Reiniciamos para una futura compra
    }
}

// --- DELEGACIÓN Y EVENTOS ---
document.body.addEventListener("click", (e) => {
    // Agregar
    if (e.target.classList.contains("btn-agregar")) {
        const id = parseInt(e.target.dataset.id);
        const producto = productosGlobales.find(p => p.id === id);
        miCarrito.agregarProducto(producto, 1);
        actualizarInterfazCarrito();
    }
    // Eliminar
    if (e.target.classList.contains("btn-eliminar")) {
        const id = parseInt(e.target.dataset.id);
        miCarrito.eliminarProducto(id);
        actualizarInterfazCarrito();
    }
});

// Evento para el botón del Generador
btnPasoPago.addEventListener("click", manejarFlujoPago);

// --- RENDERIZADO ---
function renderizarCatalogo() {
    contenedorProductos.innerHTML = productosGlobales.map(p => `
        <div class="producto-card">
            <strong>${p.nombre}</strong> - ${formatearPrecio(p.precio)}
            <button class="btn-agregar" data-id="${p.id}">Añadir</button>
        </div>
    `).join("");
}

function actualizarInterfazCarrito() {
    contenedorCarrito.innerHTML = miCarrito.renderizar();
    displayTotal.textContent = formatearPrecio(miCarrito.obtenerSumaTotal());
}

inicializarTienda();