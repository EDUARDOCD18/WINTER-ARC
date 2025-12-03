// 1. Definición de la Clase (siempre en Mayúscula por convención)

class Persona {
  // 2. 🔑 Constructor: Se ejecuta al crear una instancia
  constructor(nombre, edad, ocupaciones) {
    // 3. 🔑 Inicialización de Propiedades usando 'this'
    this.nombre = nombre;
    this.edad = edad;
    this.ocupaciones = ocupaciones;
    this.activo = true; // Propiedad con valor por defecto
  }
}

/* 📝 Tarea 2: Creación de Instancias (new)
Objetivo: Crear objetos únicos a partir de la plantilla Persona usando la palabra clave new.
 */

// 1. Creación de una nueva instancia (Objeto)
const usuario1 = new Persona("Javier", 26, "Programador web");

// 2. Creación de otra instancia
const usuario2 = new Persona("Javier Eduardo", 26, "Ingeniero");

// 3. Acceder a las propiedades del objeto (igual que en los Objetos literales - Día 11)
console.log("Usuario 1: ", usuario1);
console.log("Usuario 2: ", usuario2);

// 4. Modificar una propiedad del objeto específico
usuario1.ocupaciones = "Técnico";
console.log("Usuario 1(modificado)", usuario1);

/* 📝 Tarea 3: Métodos dentro de la Clase (Introducción a Acciones) */

// Objetivo: Añadir una acción (un método) a la clase que esté disponible para todas las instancias.

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  // 🔑 MÉTODO: Es una función definida directamente en la clase
  obtenerPrecioConIVA(iva) {
    return this.precio * (1 + iva);
  }
}

const laptop = new Producto("Laptop Pro", 1600);

const precioFinal = laptop.obtenerPrecioConIVA(0.16);
console.log(
  `El precio total con IVA es de ${precioFinal.toFixed(2)}, ${laptop.nombre}`
);

class Coche {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  esAntiguio(anio) {
    if (anio <= 1990) {
      return "Es antiguo";
    } else {
      return "Es reciente";
    }
  }
}

const coche1 = new Coche("Ford", "GT", 1969);
const coche2 = new Coche("Cherokee", "XL", 2008);

console.log(coche1.esAntiguio(coche1.anio));
console.log(coche2.esAntiguio(coche2.anio));
console.log(coche2);

class Tarea {
  constructor(descripcion) {
    this.completada = false;
  }
}
console.log(tarea.completada);
const tarea = new Tarea("si");
tarea.completada = true;

console.log(tarea.completada);
