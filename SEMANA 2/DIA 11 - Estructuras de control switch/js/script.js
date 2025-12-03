/* Tarea 1: Uso Básico de switch y break
Objetivo: Crear una función que devuelva el nombre del día de la semana basado en un número (donde 1 es Lunes, 7 es Domingo).
 */

function obtenerNombreDia(diaNumero) {
  let diaTexto;
  switch (diaNumero) {
    case 1:
      diaTexto = "Lunes";
      break;
    case 2:
      diaTexto = "Martes";
      break;
    case 3:
      diaTexto = "Miércoles";
      break;
    case 4:
      diaTexto = "Jueves";
      break;
    case 5:
      diaTexto = "Viernes";
      break;
    case 6:
      diaTexto = "Sábado";
      break;
    case 7:
      diaTexto = "Domingo";
      break;
    default:
      diaTexto = "Número inválido. Por favor ingrese un número entre 1 y 7.";
  }

  console.log(`El número ${diaNumero} corresponde a: ${diaTexto}`);
}

// Pruebas de la función
obtenerNombreDia(3); // Debería imprimir "Miércoles"
obtenerNombreDia(1); // Debería imprimir "Lunes"
obtenerNombreDia(7); // Debería imprimir "Domingo"
obtenerNombreDia(90); // Debería imprimir "Número inválido. Por favor ingrese un número entre 1 y 7."

/* 
    Tarea 2: El Peligro del Fall-Through (Omisión de break)
Objetivo: Ver qué sucede cuando se olvida el break.
*/

let nivelUsuario = "gold";
let privilegios = "";

switch (nivelUsuario) {
  case "bronze":
    privilegios += "Acceso a foro. ";
  case "silver":
    privilegios += "Notificaciones especiales. ";
  case "gold":
    privilegios += "Soporte prioritario. ";
  // break;
  default:
    privilegios += "Acceso a contenido básico.";
}

// ¿Cuál es el valor final de 'privilegios' si se omite el break en 'gold'?
console.log(privilegios);

/* Tarea 3: Agrupación de Casos */
/*  Objetivo: Usar switch para evaluar múltiples valores con el mismo resultado, ahorrando líneas de código.*/

let animal = "conejo";
let mensaje = "";

switch (animal) {
  case "perro":
  case "gato":
  case "conejo":
    mensaje = "Es una mascota común.";
    break;
  case "león":
  case "tigre":
    mensaje = "Es un animal salvaje.";
    break;
  default:
    mensaje = "Tipo de animal desconocido.";
}

console.log(`${animal} -> ${mensaje}`); // Muestra: perro -> Es una mascota doméstica.

/*  Ejercicios de Refuerzo */

/* 1.	Conversión de Calificación:
o	    Escribe una función que acepte una letra de calificación (A, B, C, D, F).
o	    Usa una estructura switch para devolver el mensaje correspondiente:
	    A: "Excelente trabajo."
	    B: "Buen trabajo."
	    C o D: "Necesita mejorar." (Usa la agrupación de casos).
	    F: "Reprobado."
	    default: "Calificación no reconocida."
 */

function convertirCalificacione(letra) {
  switch (letra) {
    case "A":
      return "Excelente trabajo.";
      break;
    case "B":
      return "Buen trabajo.";
      break;
    case "C":
    case "D":
      return "Necesita mejorar.";
      break;
    case "F":
      return "Reprobado.";
      break;
    default:
      return "Calificación no reconocida.";
  }
}
console.log(convertirCalificacione("A")); // Excelente trabajo.
console.log(convertirCalificacione("C")); // Necesita mejorar.
console.log(convertirCalificacione("F")); // Reprobado.

/* 2.	Validación de Número de Mes:
o	    Declara una variable const mes = 13;.
o	    Usa un switch para asignar a una variable diasDelMes el número de días que tiene el mes (por simplicidad, considera que Febrero siempre tiene 28 días).
o	    Casos a cubrir:
	    1, 3, 5, 7, 8, 10, 12 (31 días).
	    4, 6, 9, 11 (30 días).
	    2 (28 días).
	    default: 0 (Cero días).
o	    Prueba la variable mes = 13 para asegurar que el default funciona.
 */

const mes = 13;

function obtenerDiasDelMes(mes) {
  let diasDelMes;

  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      diasDelMes = 31;
      console.log("El mes "+ mes + " tiene " + diasDelMes + " dias.");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      diasDelMes = 30;
      console.log("El mes "+ mes + " tiene " + diasDelMes + " dias.");
      break;
    case 2:
      diasDelMes = 28;
      console.log("El mes "+ mes + " tiene " + diasDelMes + " dias.");
      break;
    default:
      diasDelMes = 0;
      console.log("El mes "+ mes + " tiene " + diasDelMes + " dias. No existe ese mes.");
  }
}

obtenerDiasDelMes(1); // Debería asignar 0 días para mes = 13
obtenerDiasDelMes(4); // Debería asignar 0 días para mes = 13
obtenerDiasDelMes(2); // Debería asignar 0 días para mes = 13
obtenerDiasDelMes(13); // Debería asignar 0 días para mes = 13