class NotificacionesEmail {
  enviar(msg) {
    console.log(`Enviando Email: ${msg}`);
  }
}

class NotificacionesSMS {
  enviar(msg) {
    console.log(`Enviando SMS: ${msg}`);
  }
}

class NotificacionFactory {
  static crear(tipo) {
    if (tipo === "email") return new NotificacionesEmail();
    if (tipo === "sms") return new NotificacionesSMS();
    throw new Error("Tipo de notificación no soportado");
  }
}

const servicio = NotificacionFactory.crear("email")
servicio.enviar("Hola por correo")

const servicio2 = NotificacionFactory.crear("sms")
servicio2.enviar("Hola por mensaje de texto")

console.log("=========================");

// Clases de los "productos"
class Coche {
    constructor() {
        this.tipo = "Coche";
        this.ruedas = 4;
    }
}

class Moto {
    constructor() {
        this.tipo = "Moto";
        this.ruedas = 2;
    }
}

// La Fábrica
class VehiculoFactory {
    static crearVehiculo(tipo) {
        const t = tipo.toLowerCase();
        
        if (t === "coche") {
            return new Coche();
        } else if (t === "moto") {
            return new Moto();
        } else {
            throw new Error("El tipo de vehículo no existe en nuestra fábrica.");
        }
    }
}

// --- Uso de la Factory ---
const miCoche = VehiculoFactory.crearVehiculo("coche");
console.log(`🚗 Tengo un ${miCoche.tipo} con ${miCoche.ruedas} ruedas.`);

const miMoto = VehiculoFactory.crearVehiculo("moto");
console.log(`🏍️ Tengo una ${miMoto.tipo} con ${miMoto.ruedas} ruedas.`);