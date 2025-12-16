// Producto.js

export class Producto {
  // 🔑 CORRECCIÓN: Agregar 'export'
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  obtenerInfo() {
    // Aseguramos el formato con dos decimales, usando la lógica del carrito:
    return `${this.nombre} ($${this.precio.toFixed(2)})`;
  }
}
