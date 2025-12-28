// 1. La función base (simulando lentitud)
function obtenerAreaCirculo(radio) {
  console.log(`--- ⚙️ Calculando área para radio: ${radio} ---`);

  // Simulamos un proceso pesado con un bucle innecesario
  for (let i = 0; i < 100000000; i++) {
    /* Pausa artificial */
  }

  // Fórmula: π * r²
  return Math.PI * Math.pow(radio, 2);
}

// 2. La versión con Memorización
const memorizarArea = () => {
  const cache = {}; // El "baúl" de los recuerdos

  return (radio) => {
    // ¿Ya tenemos este radio en el baúl?
    if (radio in cache) {
      console.log(`✅ Resultado recuperado de memoria para radio: ${radio}`);
      return cache[radio];
    }

    // Si no está, llamamos a la función lenta y guardamos el resultado
    const resultado = obtenerAreaCirculo(radio);
    cache[radio] = resultado;
    return resultado;
  };
};

// 3. Preparación
const calcularAreaOptimizada = memorizarArea();

console.log("Llamada 1 (Radio 5):", calcularAreaOptimizada(5));
console.log("Llamada 2 (Radio 10):", calcularAreaOptimizada(10));
console.timeEnd("Llamada 3 (Radio 5):", calcularAreaOptimizada(5)); // 🧠 ¡Aquí ocurre la magia!
console.log("Llamada 4 (Radio 10):", calcularAreaOptimizada(10)); // 🧠 ¡Aquí también!
console.log("Llamada 5 (Radio 20):", calcularAreaOptimizada(20));
