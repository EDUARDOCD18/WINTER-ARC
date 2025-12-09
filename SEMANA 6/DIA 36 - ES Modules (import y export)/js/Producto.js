export class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  obtenerInfo() {
    return `${this.nombre} ($${this.precio})`;
  }
}
