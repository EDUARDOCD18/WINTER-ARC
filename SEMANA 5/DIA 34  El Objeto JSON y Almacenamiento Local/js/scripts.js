const configuracion = {
  temaOscuro: true,
  fuente: "Arial",
  notificaciones: 5,
};

const configuracionJSON = JSON.stringify(configuracion);
console.log("Formato JSON (string): ", configuracionJSON);

console.log("=========================");

const objetoRecuperado = JSON.parse(configuracionJSON);
console.log("Formato JSON: ", objetoRecuperado.fuente);
console.log("Formato JSON: ", objetoRecuperado.temaOscuro);
console.log("Formato JSON: ", objetoRecuperado.notificaciones);
console.log("Formato JSON: ", objetoRecuperado);

console.log("=========================");

localStorage.setItem("config", configuracionJSON);
console.log("Configuración guaradada en localStorage");

console.log("=========================");

const cadenaGuardada = localStorage.getItem("config");
console.log("Cadena recuperada: ", cadenaGuardada);

console.log("=========================");

if (cadenaGuardada) {
  const confiFinal = JSON.parse(cadenaGuardada);
  console.log(`El tema oscuro es: ${confiFinal.temaOscuro}`);
}

console.log("=========================");

console.log("Eliminando datos del sitio: ");
localStorage.removeItem("config");
console.log("Configuración eliminada");

console.log("=========================");

console.log("Eliminar todas las claves");
localStorage.clear();
console.log("Todas las claves eliminadas");

console.log("=========================");

console.log("Ejercicio 1: convertir a JSON");
const frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log("Antes de la conversión: ", frutas);
const frutasJSON = JSON.stringify(frutas);
localStorage.setItem("misFrutas", frutasJSON);
console.log("Después de la conversión: ", frutasJSON);

console.log("=========================");

const frutasJSONRecuperadas = localStorage.getItem("misFrutas");
const frutasArray = JSON.parse(frutasJSONRecuperadas);
console.log("Arreglo recuperado y listo para usar", frutasArray);
frutasArray.push("Kiwi");
console.log("Lista de frutas actualizada", frutasArray);

console.log("=========================");

const contadorString = localStorage.getItem("contadorVisitas");
let contador = 0;
if (contadorString) {
  let visitasAnteriores = JSON.parseInt(contadorString, 10);
  contador = visitasAnteriores + 1;
  console.log("Bienvenido de nuevo");
} else {
  contador = 1;
  console.log("Esta es la primera vez que nos visitas");
}
localStorage.setItem("contadorVisitas", contador.toString())
console.log(`El contador actual es de: ${localStorage.getItem("contadorVisitas")}`);
