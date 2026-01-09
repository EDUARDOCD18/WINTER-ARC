/**
 * app.js - Orquestador de la Tienda (Día 49: Optimización)
 */

import { Producto } from "./Producto.js";
import { catalogo, wishlist, gestionarWishlist, appConfig } from "./logic.js";

// --- 1. CONFIGURACIÓN DEL WEB WORKER ---
// Nota: La ruta es relativa al index.html
const workerPrecios = new Worker("totalWorker.js");

// --- 2. ESTADO LOCAL ---
let carrito = []; // Lista de productos seleccionados

// --- 3. ELEMENTOS DEL DOM ---
const btnCalcular = document.getElementById("btn-calcular");
const displayTotal = document.getElementById("total-ui");
const listaProductosUI = document.getElementById("productos-lista");

// --- 4. MEMORIZACIÓN (Optimización de conversión) ---
const convertirMoneda = (() => {
  const cache = {};
  return (monto, tasa) => {
    const clave = `${monto}-${tasa}`;
    if (clave in cache) {
      console.log("🪙 Recuperando conversión de caché...");
      return cache[clave];
    }
    console.log("🧮 Calculando nueva conversión...");
    const resultado = monto * tasa;
    cache[clave] = resultado;
    return resultado;
  };
})();

// --- 5. INICIALIZACIÓN DE DATOS ---
function cargarDatos() {
  // Creamos instancias reales de Producto
  const p1 = new Producto(101, "MacBook Air", 999, "Laptops");
  const p2 = new Producto(102, "iPhone 15", 799, "Móviles");
  const p3 = new Producto(103, "Monitor 4K", 450, "Monitores");

  // Los guardamos en el Map del catálogo (Importado de logic.js)
  catalogo.set(p1.id, p1);
  catalogo.set(p2.id, p2);
  catalogo.set(p3.id, p3);

  console.log("📦 Catálogo cargado (Map):", catalogo);
}

// --- 6. COMUNICACIÓN CON EL WORKER ---
// Escuchamos cuando el Worker termine de calcular
workerPrecios.onmessage = function (e) {
  const { subtotal, total } = e.data;

  // Actualizamos la UI con los datos procesados en segundo plano
  displayTotal.innerHTML = `
        <small>Subtotal: $${subtotal}</small><br>
        <strong>Total (con imp. ${
          appConfig.impuesto * 100
        }%): $${total}</strong>
    `;
  console.log("✨ UI actualizada por el Worker");
};

// --- 7. LÓGICA DE INTERACCIÓN ---
function simularCompra() {
  try {
    // Simulamos que el usuario eligió productos del catálogo
    // Usamos .get() del Map para acceso instantáneo
    const prod1 = catalogo.get(101);
    const prod2 = catalogo.get(103);

    if (!prod1 || !prod2) throw new Error("Producto no encontrado en catálogo");

    carrito = [
      { nombre: prod1.nombre, precio: prod1.precio, cantidad: 1 },
      { nombre: prod2.nombre, precio: prod2.precio, cantidad: 2 },
    ];

    console.log("🛒 Carrito preparado. Enviando a Web Worker...");

    // Enviamos datos al Worker para no bloquear el hilo principal
    workerPrecios.postMessage({
      items: carrito,
      tasaImpuesto: appConfig.impuesto,
    });
  } catch (error) {
    console.error("❌ Error en la compra:", error.message);
  }
}

// --- 8. EVENTOS ---
btnCalcular.addEventListener("click", simularCompra);

// Inicializar la tienda al cargar
cargarDatos();
