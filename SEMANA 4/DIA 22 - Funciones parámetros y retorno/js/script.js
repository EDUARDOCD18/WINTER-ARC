function calcularAreaRetangulo(base, altura) {
  const area = base * altura;
  return area;
}

const areaSala = calcularAreaRetangulo(8, 5);
console.log(`El área de la sala es de  ${areaSala}.`);

const areaCocina = calcularAreaRetangulo(5, 3);
console.log(`El área de la cocina es de  ${areaCocina}.`);

function soloImprimir(a, b) {
  const resultado = a * b;
  console.log(`El resultado es ${resultado}`);
}

function devolver(a, b) {
  const resultado = a * b;
  return resultado;
}

const valorA = soloImprimir(2, 2);
console.log(`Valor capturado de soloImprimir es ${valorA}`);

const valorB = devolver(2, 5);
console.log(`El valor de devolver es de  ${valorB}`);

function verificarEdad(edad) {
  if (edad >= 18) {
    return "Usted es mayor de edad";
  }

  return "Usted es menor de edad";
  console.log("Esto nunca se va a ejecutar");
}

console.log(verificarEdad(19));
console.log(verificarEdad(14));

function formatearNombre(nombre) {
  const nombreCompleto = nombre.toUpperCase();
  return nombreCompleto;
}

nombreGritado = formatearNombre("javier");
console.log(nombreGritado);

function aplicarDescuento(precio, esVIP) {
  if (esVIP === true) {
    const precioFinal = precio - precio * 0.1;
    console.log("Es VIP");
    return precioFinal;
  }

  console.log("No es VIP");
  return precio;

}

const compra = aplicarDescuento(20, true);
console.log(compra);

const compra2 = aplicarDescuento(50, false);
console.log(compra2);

function obtenerDia(numero){
    switch (numero) {
        case 1:
            console.log("Es lunes");
            break;
        case 7:
            console.log("Es domingo");
            break;
    
        default:
            console.log("Dato o número inválido");
            break;
    }
}

const dia = obtenerDia(7);