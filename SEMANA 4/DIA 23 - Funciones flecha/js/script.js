const fecha = new Date("2025-12-12");
// Sintaxis tradicional
function obtenerFecha() {
  return fecha.getFullYear();
}

console.log(obtenerFecha);

// Sintaxis de flecha
const obtenerFechaFlecha = () => {
  return new Date().getFullYear();
};
console.log(obtenerFechaFlecha);

/* FUNCIÓN CON MÚLTIPLES PARÁMETROS */

// Tradicional
function calcularIVA(precio, tasa) {
  return precio * tasa;
}
console.log(`Total a pagar ${calcularIVA(10, 16)}`);

// Flecha
const IVAFlecha = (precio, tasa) => {
  return precio * tasa;
};
console.log(`Total a pagar ${IVAFlecha(100, 16)}`);

/* Tarea 2: Retorno Implícito (La Forma Más Corta)
Objetivo: Reescribir las funciones anteriores en su forma más concisa.
 */

// Se omiten las llaves y 'return'
const sumaConcisa = (a, b) => a + b;
console.log(`La suma concisa es ${sumaConcisa(2, 2)}`);

// 2.	Función de Formato (Un Parámetro):
const saludoSimple = (nombre) => `Hola, me llamo ${nombre}`;
console.log(saludoSimple("Javi"));

/* Tarea 3: Usando Flechas en Eventos (Revisión Día 18)
Objetivo: Ver por qué las flechas son ideales para callbacks de eventos.
 */

const boton = document.createElement("button");
boton.textContent = "Hola!";
document.body.appendChild(boton);

// En lugar de una función tradicional:
boton.addEventListener("click", function () {
  console.log("Click");
});

// Usando una Flecha (más limpia y auto-contenida)
boton.addEventListener("click", (e) => {
  console.log("Click con flecha");
  console.log(e.target);
});

/* 🏋️ Ejercicios de Refuerzo
1.	Conversión y Concisión:
o	Convierte la siguiente función tradicional en la forma más concisa posible de función flecha:
JavaScript
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
Pista: Puedes poner la condición de retorno directamente
 */

const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(esPar(2));
console.log(esPar(5));

/* 2.	Cálculo de Potencia:
o	Escribe una función flecha llamada potencia que acepte dos parámetros (base, exponente).
o	La función debe devolver la potencia (usa el operador ** o Math.pow()).
o	Llama la función con potencia(3, 4) y verifica el resultado.
 */

const potencia = (a, b) => {
  return Math.pow(a, b);
};
console.log(potencia(5, 2));

/* 3.	Flecha con Múltiples Líneas:
o	Escribe una función flecha llamada procesarTexto que acepte un parámetro texto.
o	La función debe tener más de una línea de código (por lo tanto, debe usar llaves {} y return):
1.	Convierte el texto a minúsculas.
2.	Añade la palabra "PROCESADO:" al inicio.
3.	Retorna el texto final.
o	Prueba procesarTexto("ESTO ES UNA PRUEBA").
 */

const procesarTexto = (text) => {
  let minu = text.toLowerCase();

  let textoFinal = "PROCESANDO: " + minu;

  return textoFinal;
};

const resultado = procesarTexto("FFFFF");
console.log(resultado);
