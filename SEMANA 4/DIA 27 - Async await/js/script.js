// Paso 1: Simula la primera petición
function paso1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Paso 1 completado"); // Resuelve con el mensaje de éxito
    }, 1000); // Retraso de 1 segundo
  });
}

// Paso 2: Recibe el resultado anterior y usa ese valor
function paso2(valorAnterior) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Paso 2 completado, valor anterior: ${valorAnterior}`);
    }, 1500); // Retraso de 1.5 segundos
  });
}

/* async function procesarCarga() {
  try {
    const resultado1 = await paso1();
    console.log(resultado1);

    const resultado2 = await paso2(resultado1);
    console.log(resultado2);

    return "Proceso realizado con exito";
  } catch (error) {
    console.log("Fallo detectado en el proceso.");
  }
}

procesarCarga()
  .then((mensajeFinal) => console.log("Fin de la ejecución"))
  .catch((err) => console.log("Error final: ", err));

function simularFallo() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Conexión perdida con la base de datos."), 1000);
  });
}

async function manejarFallo() {
  try {
    console.log("Iniciando operacion");
    const data = await simularFallo();
    console.log("Datos: ", data);
  } catch (error) {
    console.error("Se recuperó del error:", error);
  }
} */

/* manejarFallo() */

/*  Ejercicios de Refuerzo
1.	Conversión a Async/Await:
o	Toma la función decidirSiComprar() del Día 26 (la que resuelve o rechaza según un número aleatorio).
o	Crea una nueva función intentarComprar() y declárala como async.
o	Dentro de intentarComprar(), usa await para obtener el resultado de decidirSiComprar().
o	Usa un bloque try...catch para imprimir el mensaje de éxito o fracaso.
 */

function decidirSiComprar(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 0.5) {
        resolve(`Compralo `);
      } else {
        reject(`No lo compres`);
      }
    }, 1000);
  });
}

const numero = Math.random();

async function intentarComprar() {
  console.log("Número: ", numero);
  try {
    console.log("Decidiendo... ");
    const decision = await decidirSiComprar(numero);
    console.log("Decisión: ", decision);
  } catch (error) {
    console.log("Error al decidir");
  }
}

intentarComprar();

/* 2.	Flujo en Bucle:
o	Crea una función esperar(ms) que devuelva una promesa que se resuelva después de ms milisegundos (usa setTimeout).
o	Crea una función ejecutarBucleAsync() (debe ser async).
o	Dentro de esta función, usa un bucle for para llamar a await esperar(1000) tres veces consecutivas, imprimiendo el número de iteración en cada pausa.
o	Pista: Solo el uso de await dentro de un bucle puede garantizar que cada iteración espere a la anterior.

 */

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function ejecutarBucleAsync() {
  for (let i = 1; i <= 3; i++) {
    await esperar(1000);
    console.log(`Pausa completada. iteraición: ${i} de 3`);
  }
  console.log("Bucle finalizado");
}

ejecutarBucleAsync();
