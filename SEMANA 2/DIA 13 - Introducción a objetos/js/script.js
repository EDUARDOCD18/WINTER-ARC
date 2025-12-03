/* Tarea 1: Creación y Acceso Básico (Notación de Punto)
    Objetivo: Crear un objeto literal y acceder/modificar sus propiedades usando la notación de punto.
*/

// Creación del objeto literal
const usuario = {
  nombre: "Javier",
  edad: 26,
  ciudad: "Carrizal",
  activo: true,
};

console.log(usuario); // Muestra el objeto completo

// Acceso con la notación de punto
let nombreUsuario = usuario.nombre;
let ciudadUsuario = usuario.ciudad;

console.log("Mi nombre es " + nombreUsuario + ", vivo en " + ciudadUsuario);

// Modificación de mutabilidada´
usuario.edad = 30; // Cambia la edad a 30
usuario.mail = "javierecd@gmail.com"; // Agrega una nueva propiedad mail
console.log(usuario.edad); // Muestra la edad actualizada
console.log(usuario.mail); // Muestra el mail agregado

/* Tarea 2: Acceso con Notación de Corchetes
    Objetivo: Demostrar el uso de los corchetes para claves dinámicas o complejas.
*/

// Uso de corchetes con String
// Supongamos que esta es una propiedad con espacios (mala práctica, pero válida)

const vehiculo = {
  "tipo de motor": "w16",
  marca: "Bugatti",
};

// La notación de punto NO funciona aquí: vehiculo.tipo de motor (Error)
const propiedadElegida = "marca";

// El nombre de la clave a acceder está en una variable:
console.log("La marca es: " + vehiculo[propiedadElegida]);

/* Ejercicios de refuerzo */

/* 1.	Objeto Anidado:
o	    Crea un objeto const llamado producto que tenga las propiedades: nombre, precio, y una propiedad llamada detalles que sea otro objeto con las claves dimensiones y color.
o	    Accede e imprime el color del producto (deberías usar dos puntos: producto.detalles.color).
 */

const producto = {
  nombre: "Camiseta",
  precio: 19.99,
  detalles: {
    dimensiones: "M",
    color: "Azul",
  },
};

console.log("El color es: " + producto.detalles.color);

/* 2.	Uso Combinado (Array dentro de Objeto):
o	    Modifica el objeto producto para añadir una propiedad llamada etiquetas que sea un Arreglo con tres strings (ej. ["oferta", "nuevo", "electronica"]).
o	    Imprime solo la segunda etiqueta del arreglo (Recuerda el índice cero: producto.etiquetas[1]).
 */

producto.etiquetas = ["oferta", "nuevo", "electronica"];
console.log(producto.etiquetas[1]);

/* 3.	Eliminación de Propiedad:
o	    Usa el operador delete para eliminar la propiedad ciudad del objeto usuario (de la Tarea 1).
o	    Imprime el objeto usuario completo para confirmar que la propiedad ya no existe.
 */

console.log("Antes de la eliminación: " + usuario['ciudad']);
delete usuario.ciudad
console.log("Después de la eliminación: " + usuario['ciudad']);
console.log(usuario);
