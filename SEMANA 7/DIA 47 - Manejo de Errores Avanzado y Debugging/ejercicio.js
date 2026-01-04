// 1. Definimos el error personalizado
class ErrorEdadMinima extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorEdadMinima";
  }
}

// 2. Función de validación
function validarEdad(edad) {
  // Verificamos si es un número
  if (typeof edad !== "number") {
    throw new TypeError("El valor ingresado debe ser un número.");
  }

  // Verificamos la regla de negocio (minoría de edad)
  if (edad < 18) {
    throw new ErrorEdadMinima("Acceso denegado: Debes ser mayor de 18 años.");
  }

  console.log("✅ Edad validada correctamente. ¡Bienvenido!");
}

function ejecutarValidacigon(valor) {
  try {
    validarEdad(valor);
  } catch (error) {
    if (error instanceof ErrorEdadMinima) {
      console.warn("Aviso de seguridad: ", error.message);
    } else if (error instanceof TypeError) {
      console.error(`❌ Error de Tipo: ${error.message}`);
    } else {
      console.error(`❓ Error imprevisto: ${error.message}`);
    }
  } finally {
    console.log("🏁 Validación terminada.");
  }
}
// --- Pruebas ---
console.log("--- Prueba 1 (Texto) ---");
ejecutarValidacion("veinte"); 

console.log("\n--- Prueba 2 (Menor) ---");
ejecutarValidacion(15); 

console.log("\n--- Prueba 3 (Correcto) ---");
ejecutarValidacion(25);