/* 📝 Tarea 1: Demostración de Ejecución No Bloqueante
Objetivo: Mostrar cómo el código síncrono continúa ejecutándose mientras el setTimeout espera.
 */

/* console.log("1. Inicio síncrono");

setTimeout(() => {
  console.log("3. Tarea asíncrona Terminada");
}, 2000);

console.log("2. Código intermedio");

setTimeout(() => {
  console.log(
    "4. Tarea Asíncrona Corta (0 segundos, pero espera al hilo libre)"
  );
}, 0);

console.log("5. Fin del script (Síncrono)");

/* 📝 Tarea 2: Usando clearTimeout
Objetivo: Cancelar una tarea asíncrona antes de que se ejecute.
 */

// 1. Guardar la referencia del temporizador
/* const temporizadorID = setTimeout(() => {
  console.log("Este mensaje NO debería aparecer.");
}, 5000); // 5 segundos

console.log(`Temporizador programado con ID: ${temporizadorID}`); */

// 2. Cancelar el temporizador después de 1 segundo

/* setTimeout(() => {
  clearTimeout(temporizadorID); // 🔑 Detiene la ejecución programada
  console.log("Temporizador CANCELADO con éxito.");
}, 1000); */ // 1 segundo

/*  Ejercicios de Refuerzo */

/* 1.	Intervalo Simple (setInterval):
o	El método setInterval(funcion, tiempo) ejecuta una función repetidamente cada cierto tiempo.
o	Usa setInterval para imprimir la palabra "Tick" cada 500 milisegundos (medio segundo).
o	Guarda la referencia del intervalo en una variable.
 */

/* const contadorID = setInterval(() => {
  console.log("Tick");
}, 500);

console.log("Intervalos iniciado con ID: " + contadorID);

setTimeout(() => {
    clearInterval(contadorID)
}, 7000);
 */
/* 3.	Simular Carga de Datos:
o	Escribe una función llamada cargarUsuario(usuarioId, callback) que simule una petición a un servidor.
o	Esta función debe usar setTimeout para esperar 3 segundos.
o	Dentro del setTimeout, llama a la función callback con un mensaje simulado: callback(Usuario ${usuarioId} cargado.);
o	Llama a cargarUsuario(101, (mensaje) => { console.log(mensaje); }); y observa el retraso.
o	(Este es el concepto antiguo de Callbacks anidados, que nos lleva directamente a Promesas mañana).
 */

function cargarUsuario(usuarioId, callback) {
  setTimeout(() => {
    const mensaje = `Usuario ${usuarioId} cargado.`;
    callback(mensaje);
  }, 3000);
}

cargarUsuario(103, (mensaje) =>{
    console.log(mensaje);
})