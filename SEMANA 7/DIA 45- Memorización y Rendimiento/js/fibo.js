console.log("Versión lenta");

const fiboLento = (n) => {
  if (n <= 1) return n;

  return fiboLento(n - 1) + fiboLento(n - 2);
};

console.log("=========================");

console.log("Versión rápida");

const fiboOpti = (n, cache = {}) => {
  if (n in cache) return cache[n];
  if (n <= 1) return n;

  cache[n] = fiboOpti(n - 1, cache) + fiboOpti(n - 2, cache);
  return cache[n]
};

console.time("Lento");
console.log(fiboLento(35));
console.timeEnd("Lento");

console.time("Rápido");
console.log(fiboOpti(35));
console.timeEnd("Rápido");