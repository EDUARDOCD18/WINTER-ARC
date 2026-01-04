function procesarDatos(data) {
  try {
    if (typeof data !== "number") {
      throw new TypeError("Los datos deben de ser numéricos");
    }

    console.log("Datos procesados correctamente");
  } catch (error) {
    console.error(`Error en procesarDatos: ${error.message}`);
    throw error;
  }
}

function miApp() {
  try {
    procesarDatos("Hola");
  } catch (error) {
    console.log(`Error principal en miApp: ${error.message}`);
  }
}

miApp();
