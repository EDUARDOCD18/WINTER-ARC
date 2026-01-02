class BaseDeDatos {
  constructor() {
    if (BaseDeDatos.instancia) {
      return BaseDeDatos.instancia;
    }

    this.conexion = "Conectando a la BDD";
    BaseDeDatos.instancia = this;
  }

  obtenerConexion() {
    return this.conexion;
  }
}

const db1 = new BaseDeDatos();
const db2 = new BaseDeDatos();

console.log(db1 === db2);

console.log("=========================");

class AjustesApp {
  constructor(tema = "claro", idioma = "es") {
    // 1. Verificamos si ya existe una instancia guardada
    if (AjustesApp.instancia) {
      console.log(
        "⚠️ Ya existe una configuración. Devolviendo la instancia actual..."
      );
      return AjustesApp.instancia;
    }

    // 2. Si no existe, configuramos las propiedades
    this.tema = tema;
    this.idioma = idioma;

    // 3. Guardamos esta instancia en la propiedad estática
    AjustesApp.instancia = this;
  }

  cambiarTema(nuevoTema) {
    this.tema = nuevoTema;
    console.log(`🎨 Tema cambiado a: ${this.tema}`);
  }
}

// --- Prueba del Singleton ---
const ajustes1 = new AjustesApp("oscuro", "en");
const ajustes2 = new AjustesApp("claro", "fr"); // Este intento será ignorado

console.log(ajustes1.tema); // "oscuro"
console.log(ajustes2.tema); // "oscuro" (Sigue siendo el mismo objeto)

ajustes2.cambiarTema("solar");
console.log(ajustes1.tema); // "solar" (Ambos reflejan el cambio porque son el mismo)
