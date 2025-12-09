// app.js

// 🔑 Importación de Clases
import { Producto } from './Producto.js'; 
import { Carrito } from './Carrito.js';

// 🔑 Importación de export default (Podemos llamarlo 'Settings')
import Settings from './config.js'; 

// --- 1. CONFIGURACIÓN ---
console.log(`--- Configuración del Módulo ---`);
console.log(`Moneda: ${Settings.MONEDA}, Impuesto: ${Settings.IVA * 100}%`);
console.log(`Límite de ítems por usuario: ${Settings.USUARIO_MAX_ITEMS}`);
console.log("-------------------------------");


// --- 2. FLUJO DE USO Y DEMOSTRACIÓN ---
const producto1 = new Producto(101, "Pantalón Denim", 40.00);
const producto2 = new Producto(102, "Camisa de Vestir", 50.00);

const miCarrito = new Carrito();

console.log("--- INICIO DE SESIÓN ---");
console.log(`Items al cargar la página: ${miCarrito.items.length}`);

// Demostrar el uso interno de la clase Producto desde Carrito.js
miCarrito.crearInstanciaProductoEjemplo();

// Simulación de Acciones
if (miCarrito.items.length === 0) {
    console.log("\n--- Añadiendo Items ---");
    miCarrito.agregarProducto(producto1, 1);
    miCarrito.agregarProducto(producto2, 2); 
    miCarrito.agregarProducto(producto1, 1); // Prueba de duplicados: ahora P1 tiene cantidad 2
    
} else {
    console.log("\n--- Carrito cargado: Probando Eliminar Producto 102 ---");
    miCarrito.eliminarProducto(102);
}

console.log("\n--- ESTADO FINAL ---");
console.log("Items en el carrito:", miCarrito.items);
console.log("Total Final: ", Settings.MONEDA, miCarrito.calcularTotal());
console.log("------------------------");