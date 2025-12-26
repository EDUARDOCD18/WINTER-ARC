const palabras = ["hola", "mundo", "hola", "js"];
const setPalabras = new Set(palabras);

console.log(setPalabras);
setPalabras.add("PHP");
console.log(setPalabras);
console.log(setPalabras.size);
console.log(setPalabras.has("PHP"));
console.log(setPalabras.has("JAVA"));

const palabrasLimpias = [...setPalabras];
console.log(palabrasLimpias);

console.log("=========================");

const mapa = new Map();

palabras.forEach((palabra) => {
  if (mapa.has(palabra)) {
    const frecuenciaActual = mapa.get(palabra);
    mapa.set(palabra, frecuenciaActual + 1);
  } else {
    mapa.set(palabra, 1);
  }
});

console.log(mapa);

mapa.forEach((valor, clave) => {
  console.log(`. "${clave}" -> ${valor}`);
});
