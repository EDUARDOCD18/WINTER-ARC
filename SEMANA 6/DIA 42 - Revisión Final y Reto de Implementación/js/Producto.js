/**
 * Producto.js
 * Define la estructura base de los productos en la tienda.
 */

export class Producto {
  /**
   * @param {number} id - Identificador único.
   * @param {string} nombre - Nombre comercial.
   * @param {number} precio - Valor unitario.
   */
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  /**
   * Método de conveniencia para mostrar información formateada.
   * Aunque usamos funciones puras en functional.js, este método
   * ayuda a la depuración rápida.
   */
  obtenerDetalles() {
    return `${this.nombre} - $${this.precio.toFixed(2)}`;
  }
}
