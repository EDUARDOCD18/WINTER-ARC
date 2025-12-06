// --- 1. CLASE BASE: PRODUCTO (Plantilla de los artículos) ---
class Producto {
  /**
   * Crea una plantilla de producto con identificador, nombre y precio.
   * @param {number} id - Identificador único del producto.
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio unitario.
   */
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

// --- 2. CLASE DE LÓGICA: CARRITO (Gestión del estado y persistencia) ---
class Carrito {
  constructor() {
    // Inicializa el carrito con los ítems guardados o un array vacío.
    this.items = this.obtenerItemsGuardados();
  }

  /**
   * Lee la cadena JSON de localStorage y la convierte a Array.
   * Incluye verificación para evitar el error 'localStorage is not defined'.
   * @returns {Array<Object>} El array de ítems del carrito.
   */
  obtenerItemsGuardados() {
    // 🔑 Verificación de seguridad (Día 34)
    if (typeof localStorage === "undefined") {
      console.warn("localStorage no está disponible.");
      return [];
    }

    const itemsJSON = localStorage.getItem("carritoItems");
    // Si hay datos (no null), los parsea; si no, devuelve un array vacío.
    return itemsJSON ? JSON.parse(itemsJSON) : [];
  }

  /**
   * Convierte el array de ítems actual a JSON y lo guarda en localStorage.
   */
  guardarCarrito() {
    if (typeof localStorage !== "undefined") {
      const itemsJSON = JSON.stringify(this.items);
      localStorage.setItem("carritoItems", itemsJSON);
    }
  }

  /**
   * Añade un producto al carrito, manejando si ya existe.
   * Usa Desestructuración para obtener las propiedades del producto.
   * @param {Producto} producto - Instancia del producto a añadir.
   * @param {number} cantidad - Cantidad a añadir.
   */
  agregarProducto(producto, cantidad) {
    // Desestructuración para obtener propiedades (Día 32)
    const { id, nombre, precio } = producto;

    // Buscar si ya existe el producto (Método Array find)
    const itemExistente = this.items.find((item) => item.id === id);

    if (itemExistente) {
      // Si existe, actualizamos su cantidad
      itemExistente.cantidad += cantidad;
    } else {
      // Si no existe, lo añadimos como un nuevo item
      this.items.push({ id, nombre, precio, cantidad });
    }

    this.guardarCarrito();
  }

  /**
   * Calcula el total del carrito usando .reduce() (Día 24).
   * @returns {string} El total con dos decimales.
   */
  calcularTotal() {
    // Usa .reduce() para sumar (precio * cantidad) de cada ítem
    const total = this.items.reduce((acumulado, item) => {
      return acumulado + item.precio * item.cantidad;
    }, 0);
    return total.toFixed(2);
  }

  /**
   * Elimina un ítem por su ID.
   * Usa .filter() para crear un nuevo array sin el ítem a eliminar.
   * @param {number} id - ID del producto a eliminar.
   */
  eliminarProducto(id) {
    // 🔑 Paso 1: Usar .filter() para crear un NUEVO array
    // Se mantiene CADA item cuyo ID NO coincida con el ID que se quiere eliminar.
    const nuevoArrayDeItems = this.items.filter((item) => item.id !== id);

    // 🔑 Paso 2: Reemplazar el array antiguo con el nuevo (Actualización inmutable)
    this.items = nuevoArrayDeItems;

    // 🔑 Paso 3: Guardar el nuevo estado del carrito en localStorage
    this.guardarCarrito();

    console.log(
      `Producto con ID ${id} eliminado. Nuevo total de ítems: ${this.items.length}`
    );
  }

  actualizarCantidad(id, nuevaCantidad) {
    const nuevoArrayDeItems = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          cantidad: nuevaCantidad,
        };
      }
    });
    this.items = nuevoArrayDeItems;
    this.guardarCarrito();
    console.log(
      `Cantidad actualizada para ID ${id}. Nueva cantidad: ${nuevaCantidad}`
    );
  }

  /**
   * Vacía el array y elimina la clave de localStorage.
   */
  vaciarCarrito() {
    this.items = [];
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("carritoItems");
    }
    console.log("Carrito vaciado y productos eliminados de LocalStorage");
  }
}

// --- 3. FLUJO DE USO Y DEMOSTRACIÓN ---

// A. Crear instancias de productos
const producto1 = new Producto(101, "Pantalón Denim", 40.0);
const producto2 = new Producto(102, "Camisa de Vestir", 50.0);
const producto3 = new Producto(103, "Calcetines (Par)", 5.5);

// B. Inicializar o Recuperar el Carrito
const miCarrito = new Carrito();

console.log("--- INICIO DE SESIÓN ---");
console.log(`Items al cargar la página: ${miCarrito.items.length}`);
console.log("Contenido:", miCarrito.items);

// C. Simular Acciones
if (miCarrito.items.length === 0) {
  console.log("\n--- Añadiendo Items (Primera Vez) ---");
  miCarrito.agregarProducto(producto1, 1);
  miCarrito.agregarProducto(producto2, 2); // Cantidad 2
  miCarrito.agregarProducto(producto3, 5); // Cantidad 5
  miCarrito.agregarProducto(producto1, 1); // Añade +1 al ID 101 (Debe ser 2 ahora)
} else {
  // Si ya hay ítems guardados, probamos a eliminar uno.
  console.log("\n--- Carrito cargado: Probando Eliminar Producto 102 ---");
  miCarrito.eliminarProducto(102);
}

console.log("\n--- ESTADO FINAL ---");
console.log("Items en el carrito:", miCarrito.items);
console.log("Total Final: $", miCarrito.calcularTotal());
console.log("------------------------");
console.log("¡Prueba a recargar la página! El contenido se mantendrá.");
