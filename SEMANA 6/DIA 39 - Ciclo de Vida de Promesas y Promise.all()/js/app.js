// app.js (Bloque de Promesas Corregido)

// 🔑 CORRECCIÓN 1: Usar sintaxis de IMPORTACIÓN
import { cargarUsuarios, cargarConfiguracion, cargarVentas } from "./async.js";

// --- DEMO 1: Promise.all() con Éxito ---
function demoPromesasExitosas() {
  console.log("--- Demo 1: Iniciando Promesas Exitosas");

  const promesas = [cargarUsuarios(2000), cargarConfiguracion(1000)];

  Promise.all(promesas) // 🔑 CORRECCIÓN 2: Renombrar la variable desestructurada a 'usuarios'
    .then(([usuarios, config]) => {
      console.log("\n✅ Éxito: Todas las promesas se resolvieron.");
      console.log("Usuarios cargados:", usuarios.length);
      console.log("Configuración:", config);
    })
    .catch((error) => {
      // Este catch no se ejecutará a menos que algo falle en el proceso
      console.error("Algo salió mal, pero no debería:", error);
    });
}

// --- DEMO 2: Promise.all() con Falla (Rechazo Inmediato) ---
function demoPromesasConFalla() {
  console.log("\n--- Demo 2: Iniciando Promesas con Falla ---");

  const promesasConFalla = [
    cargarUsuarios(500),
    cargarVentas(1500),
    cargarConfiguracion(3000),
  ];

  Promise.all(promesasConFalla)
    .then((resultados) => {
      // Este then no se ejecutará
      console.log("✅ Éxito (NO ESPERADO):", resultados);
    })
    .catch((error) => {
      console.log("\n❌ Fallo: Se ejecutó el catch de inmediato.");
      console.error("Razón del fallo:", error);
    });
}

// Llama a las funciones después de que la lógica del carrito se haya iniciado
setTimeout(demoPromesasExitosas, 100);
setTimeout(demoPromesasConFalla, 300);
