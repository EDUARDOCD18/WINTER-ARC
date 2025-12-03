class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // 🔑 Método 1: Una acción que modifica una propiedad
  cumpliAnios() {
    this.edad += 1; // Incrementa la edad en 1
    console.log(`${this.nombre} va a cumplir ${this.edad} años.`);
  }

  // 🔑 Método 2: Un método que devuelve información
  obtenerDescripcion() {
    return `${this.nombre} tiene ${this.edad} años de edad.`;
  }
}

const javier = new Persona("Javier", 26);

console.log(javier.obtenerDescripcion());
javier.cumpliAnios();

/* 📝 Tarea 2: Implementar Herencia
Objetivo: Crear una clase Estudiante que herede las propiedades y métodos de Persona y añada una propiedad específica.
 */

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    // 1. 🔑 Llamada al constructor del Padre
    super(nombre, edad);

    // 2. Propiedad específica del Estudiante
    this.carrera = carrera;
  }

  // Método específico para el estudiante
  estudiar() {
    console.log(
      `El estudiante ${this.nombre} estudia actualmente ${this.carrera}`
    );
  }

  // 🔑 Sobreescritura (Override) de un Método del Padre
  obtenerDescripcion() {
    return `${super.obtenerDescripcion()} y estudia ${this.carrera}`;
  }
}

const pepe = new Estudiante("Pepe", 35, "Agronomía");

pepe.cumpliAnios();
console.log(pepe.obtenerDescripcion());
pepe.estudiar();

// Ejercicios de refuerzo
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  emitirSonido() {
    return "Sonido de aniaml genérico";
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }

  emitirSonido() {
    return "Guau Guau";
  }

  mostrarDetalles() {
    return `${this.nombre} es un ${this.tipo} de raza ${this.raza}`;
  }
}

const bolt = new Perro("Bolt", "Mamífero", "Pug");
console.log(`${bolt.nombre} es un ${bolt.tipo}`);
console.log(bolt.emitirSonido());
console.log(bolt.mostrarDetalles());
