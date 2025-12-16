// Carrito.js

// Nota: Importamos Producto solo para mantener la coherencia modular.
import { Producto } from "./Producto.js";
import { calcularSubtotal } from "./functional.js"; // Importamos la función pura

export class Carrito {
  constructor() {
    this.items = this.obtenerItemsGuardados();
  }

  obtenerItemsGuardados() {
    // Lógica de carga de LocalStorage... (omitida para brevedad)
    const itemsJSON = localStorage.getItem("carritoItems");
    try {
      return itemsJSON ? JSON.parse(itemsJSON) : [];
    } catch (e) {
      console.error("Error al cargar carrito:", e);
      return [];
    }
  }

  guardarCarrito() {
    localStorage.setItem("carritoItems", JSON.stringify(this.items));
  }

  calcularTotal() {
    // Usamos la función pura 'calcularSubtotal' y el HOF 'reduce'
    const total = this.items.reduce((acumulado, item) => {
      return acumulado + calcularSubtotal(item); // 🔑 USO DE FUNCIÓN PURA
    }, 0);
    return total.toFixed(2);
  }

  agregarProducto(producto, cantidad) {
    const { id, nombre, precio } = producto;
    const itemExistente = this.items.find((item) => item.id === id);

    if (itemExistente) {
      // Nota: La mutación del objeto 'itemExistente.cantidad' aún es POO.
      // Para PF pura, usaríamos .map() para reconstruir todo el array.
      itemExistente.cantidad += cantidad;
    } else {
      // 🔑 IMPLEMENTACIÓN INMUTABLE: Reemplazamos el array con una COPIA nueva + el ítem.
      this.items = [...this.items, { id, nombre, precio, cantidad }];
    }

    this.guardarCarrito();
  }

  // ... otros métodos (renderizarCarrito, eliminarProducto, etc.)

  eliminarProducto(id) {
    // Es inmutable por naturaleza (filter siempre devuelve un nuevo array)
    this.items = this.items.filter((item) => item.id !== id);
    this.guardarCarrito();
  }

  renderizarCarrito() {
    let html = "";
    this.items.forEach((item) => {
      const subtotal = calcularSubtotal(item); // 🔑 Uso de Función Pura
      html += `
            <li data-id="${item.id}">
                ${item.nombre} (x${item.cantidad}) - Total: $${subtotal.toFixed(
        2
      )} 
                <button class="btn-eliminar" data-id="${
        item.id
      }">Eliminar</button>
            </li>
        `;
    });
    return html;
  }
}
