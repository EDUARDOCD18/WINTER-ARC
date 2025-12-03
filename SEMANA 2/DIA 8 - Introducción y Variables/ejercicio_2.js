/* 
-	Declara una variable let nombreUsuario = "Carlos";.
-	Dentro de un bloque if (con cualquier condición if (true)), declara una nueva variable const mensaje = "Bienvenido";.
-	Fuera de ese bloque, intenta imprimir mensaje.
-	Resultado esperado: Debe fallar porque const tiene ámbito de bloque, confirmando que la declaración no existe fuera de las llaves.
 */

let nombreUsuario = "Carlos";

if (true) {
  const mensaje = "Bienvenido";
  console.log(mensaje + " " + nombreUsuario); // Esto funcionará, ya que está dentro del bloque
}

console.log(mensaje); // Esto fallará, ya que 'mensaje' no está definido fuera del bloque
