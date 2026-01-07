/**
 * main.js - Sección para el Web Worker
 */

const btnWorker = document.getElementById("id-worker-btn");

// 1. Instanciamos el Worker (apunta al archivo que creamos arriba)
const miWorker = new Worker("worker.js");

// 2. Escuchamos cuando el Worker nos responda
miWorker.onmessage = function(e) {
    const { resultado, tiempo } = e.data;
    
    divResultado.textContent = `✨ ¡Worker terminó! Resultado: ${resultado} (Tardó ${tiempo}s)`;
    divResultado.style.color = "#2ecc71";
};

// 3. Evento del Botón Verde
btnWorker.addEventListener("click", () => {
    divResultado.textContent = "🚀 El Worker está trabajando en segundo plano...";
    divResultado.style.color = "#2ecc71";

    // Enviamos el número de iteraciones (3 mil millones)
    miWorker.postMessage(3_000_000_000);
    
    console.log("✅ Hilo Principal: Yo ya terminé de enviar la orden. ¡Sigo libre!");
});