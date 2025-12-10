/* Paso 1: Crear Funciones que Devuelven Promesas
Crea un archivo async.js y define tres funciones que devuelven promesas.
 */

// Función que simula una carga exitosa
function cargarUsuarios(tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarios = ["Ana", "Bernando", "Carlos"];
      console.log(`[Usuarios] Terminado después de ${tiempo} ms`);

      resolve(usuarios);
    }, tiempo);
  });
}

// Función que simula una carga exitosa
function cargarConfiguracion(tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const config = { tema: "oscuro", limite: 50 };
      console.log(`[Config] Terminado después de ${tiempo} ms`); // 🔑 CORRECCIÓN: Resolver con el objeto 'config', no con 'tiempo'.

      resolve(config);
    }, tiempo);
  });
}

// Función que simula una falla
function cargarVentas(tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Ventas] Falló después de ${tiempo} ms`); // Cambiamos el estado de Pending a Rejected

      reject("Error de conexión a la base de datos de Ventas");
    }, tiempo);
  });
}

// Exportamos las funciones para usarlas en app.js
export { cargarUsuarios, cargarConfiguracion, cargarVentas };
