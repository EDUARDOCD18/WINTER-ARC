// Carrito.js

// Importación de la clase Producto (necesaria para el método de ejemplo)
import { Producto } from "./Producto.js";

export class Carrito {
  constructor() {
    this.items = this.obtenerItemsGuardados();
  }

  obtenerItemsGuardados() {
    if (typeof localStorage === "undefined") {
      console.warn("localStorage no está disponible.");
      return [];
    }

    const itemsJSON = localStorage.getItem("carritoItems");

    if (!itemsJSON) {
      return [];
    }

    // Guardrail: Manejo de JSON corrupto con try...catch
    try {
      const items = JSON.parse(itemsJSON);
      return Array.isArray(items) ? items : [];
    } catch (error) {
      console.error(
        "Error al parsear el JSON del carrito. Reiniciando datos:",
        error
      );
      return [];
    }
  }

  guardarCarrito() {
    if (typeof localStorage !== "undefined") {
      const itemsJSON = JSON.stringify(this.items);
      localStorage.setItem("carritoItems", itemsJSON);
    }
  }

  calcularTotal() {
    const total = this.items.reduce((acumulado, item) => {
      // Guardrail: Verifica que el item no sea nulo y tenga propiedades.
      if (!item || !item.precio || !item.cantidad) {
        return acumulado;
      }
      return acumulado + item.precio * item.cantidad;
    }, 0);
    return total.toFixed(2);
  }

  agregarProducto(producto, cantidad) {
    const { id, nombre, precio } = producto;
    const itemExistente = this.items.find((item) => item.id === id);

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      this.items.push({ id, nombre, precio, cantidad });
    }

    this.guardarCarrito();
  } // Método esencial para el Día 37/38: genera el HTML para inyectar.

  renderizarCarrito() {
    let html = "";

    this.items.forEach((item) => {
      if (!item || !item.precio || !item.cantidad) return;

      const subtotal = item.precio * item.cantidad;

      html += `
            <li data-id="${item.id}">
                ${item.nombre} 
                (x${item.cantidad}) - 
                Total: $${subtotal.toFixed(2)} 
                
                <button class="btn-eliminar" data-id="${
        item.id
      }">Eliminar</button>
            </li>
        `;
    });

    return html;
  }

  // --- MÉTODOS AUXILIARES ---

  crearInstanciaProductoEjemplo() {
    const nuevoProducto = new Producto(100, "Demo Modular", 0);
    console.log(
      `Instancia de Producto creada desde Carrito.js: ${nuevoProducto.nombre}`
    );
  }

  eliminarProducto(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.guardarCarrito();
  }

  vaciarCarrito() {
    this.items = [];
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("carritoItems");
    }
    console.log("Carrito vaciado y productos eliminados de LocalStorage");
  }
}
