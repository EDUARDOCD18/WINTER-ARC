const btnBloquear = document.getElementById("btn-bloquear");
const divResultado = document.getElementById("resultado");

function realizarCalculoPesado() {
  let suma = 0;
  const limite = 3_000_000_000; // 3 mil millones de iteraciones

  for (let i = 0; i < limite; i++) {
    suma += i;
  }
  return suma;
}

btnBloquear.addEventListener("click", () => {
  divResultado.textContent = "⌛ Calculando... (La página se va a congelar)";
  divResultado.style.color = "orange";

  const tiempoInicio = performance.now();
  const resultado = realizarCalculoPesado();

  const tiempoFin = performance.now();
  const totalSegundos = ((tiempoFin - tiempoInicio) / 1000).toFixed(2);

  // Actualizamos el resultado final
  divResultado.textContent = `✅ ¡Terminado! Resultado: ${resultado} (Tardó ${totalSegundos}s)`;
  divResultado.style.color = "#2c3e50";
});
