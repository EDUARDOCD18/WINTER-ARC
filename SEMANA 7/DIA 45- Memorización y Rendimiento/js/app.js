console.log("Ejemplo uno");

const calculoPesado = (n) => {
  console.log("... Realizando cálculo pesado ...");
  return n * 100;
};

console.log("Función de memorízación");

const memorizar = (fn) => {
  const cache = {};

  return (...args) => {
    const clave = JSON.stringify(args);

    if (clave in cache) {
      console.log("Recuperando datos: ", clave);
      return cache[clave];
    }

    console.log("No está en caché, calculando...");
    const resutlado = fn(...args);
    cache[clave] = resutlado;
    return resutlado;
  };
};

const calculoOptimizado = memorizar(calculoPesado)

console.log(calculoOptimizado(5));
console.log(calculoOptimizado(5));
console.log(calculoOptimizado(10));
console.log(calculoOptimizado(10));
console.log(calculoOptimizado(10));
console.log(calculoOptimizado(10));