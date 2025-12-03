// Función que devuelve una promesa

/* function simularCargaConPromesa(usuarioId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuarioId === 101) {
        resolve(`${usuarioId} cargado.`);
      } else {
        reject(`${usuarioId}, error al cargar.`);
      }
    }, 3000);
  });
} */

// 1. Caso de Éxito (ID 101)
/* simularCargaConPromesa(101)
  .then((resultado) => {
    console.log("Datos recibidos (THEN): ", resultado);
  })
  .catch((error) => {
    console.log("Algo ha salido mal (CATCH): ", error);
  }); */

// 2. Caso de Fracaso (ID 500)
/* simularCargaConPromesa(500)
  .then((resultado) => {
    console.log("Esto no se imprimirá.");
  })
  .catch((error) => {
    // El error de reject() será capturado aquí
    console.error("Algo salió mal (CATCH):", error);
  })
  .finally(() => {
    // Esto siempre se ejecuta, después de THEN o CATCH
    console.log("La petición ha finalizado, con o sin éxito.");
  }); */

/* 🏋️ Ejercicios de Refuerzo */
/* 
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
} */

/* const numero = Math.random();
console.log(numero);
decidirSiComprar(numero)
  .then((resultado) => {
    console.log("Exito en comprar: ", resultado);
  })
  .catch((error) => {
    console.log("Error al comprar:", error);
  });
 */
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

paso1() // ⬅️ 1. Se inicia la primera Promesa
  .then((resultado1) => {
    console.log(resultado1); // Muestra: "Paso 1 completado"

    // 🔑 CLAVE: Devolver la Promesa del siguiente paso
    return paso2(resultado1);
  })
  .then((resultado2) => {
    // ⬅️ 2. Este .then() espera a que paso2() se resuelva
    console.log(resultado2); // Muestra: "Paso 2 completado, valor anterior: Paso 1 completado"
  })
  .catch((error) => {
    console.error("Un paso en la cadena falló:", error);
  });
