function procesarPago() {
  const numero = Math.random;
  mostrarLoader(true);
  console.log(numero);
  try {
    console.log("Intentando establecer contacto con el banco");
    if (numero > 0.5) throw new Error("Conexión perdida con el banco");

    console.log("Pago exitoso");
  } catch (error) {
    mostrarLoader(false);
    console.log("Proceso finalizado (limpieza de variables)");
  }
}

function mostrarLoader(activar) {}

procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
procesarPago();
