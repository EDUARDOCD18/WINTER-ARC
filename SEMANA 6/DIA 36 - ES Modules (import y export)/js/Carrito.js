// Carrito.js

// 🔑 IMPORTACIÓN REQUERIDA: Para usar la clase Producto en este archivo.
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
    return itemsJSON ? JSON.parse(itemsJSON) : [];
  }

  guardarCarrito() {
    if (typeof localStorage !== "undefined") {
      const itemsJSON = JSON.stringify(this.items);
      localStorage.setItem("carritoItems", itemsJSON);
    }
  }

  calcularTotal() {
    const total = this.items.reduce((acumulado, item) => {
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
  }

  // Método para demostrar el uso de la clase importada
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
