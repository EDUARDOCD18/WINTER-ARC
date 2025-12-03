/* 🔨 Enfoque Práctico Detallado (60 min de Codificación y Ejercicios) */

/* 
    📝 Tarea 1: Creación y Acceso por Índice
            Objetivo: Declarar un arreglo y acceder a elementos específicos usando sus índices.
*/

const frutas = ["manzana", "banana", "cereza", "durazno", "uva"];
console.log(frutas); // Muestra todo el arreglo
console.log(frutas.length); // Muestra la longitud del arreglo;

// Acceso y el índice cero

let primerElemento = frutas[0]; // Accede al primer elemento del arreglo
console.log(primerElemento); // Muestra 'manzana'

let tercerElemento = frutas[2]; // Accede al tercer elemento del arreglo
console.log(tercerElemento); // Muestra 'cereza'

/* 
    Tarea 2: Métodos de Modificación (Mutabilidad)
            Objetivo: Usar los métodos básicos para añadir y eliminar elementos del inicio y del final del arreglo.
*/

// Añadir elementos (push) y quitar del final (pop)

const listaCompras = ["leche", "pan"];
console.log(listaCompras);

listaCompras.push("huevos"); // Añade 'huevos' al final
console.log(listaCompras); // Muestra ['leche', 'pan', 'huevos'];

let ultimoElemento = listaCompras.pop(); // Quita el último elemento y lo retorna
console.log(ultimoElemento); // Muestra 'huevos'
console.log(listaCompras); // Muestra ['leche', 'pan']

// 2.	Añadir al Inicio (unshift) y Quitar del Inicio (shift)

const colaClientes = ["Ana", "Luis", "Carlos"];
console.log(colaClientes);
colaClientes.unshift("María"); // Añade 'María' al inicio
console.log(colaClientes); // Muestra ['María', 'Ana', 'Luis', 'Carlos']

let primerCliente = colaClientes.shift(); // Quita el primer elemento y lo retorna
console.log(primerCliente);
console.log(colaClientes); // Muestra ['Ana', 'Luis', 'Carlos']

/* 🏋️ Ejercicios de Refuerzo */
/* 1.	Actualización de Inventario:
o	    Declara un arreglo const llamado inventario con 5 nombres de productos.
o	    Cambia el elemento en el índice 3 a un producto completamente nuevo (ej. reemplaza "Laptop" por "Tablet").
o	    Imprime el nuevo inventario completo.
o	    Usa el método .pop() una vez e imprime el elemento que fue eliminado.
 */

inventario = ["Laptop", "Mouse", "Teclado", "Monitor", "Impresora"];
console.log(inventario);
inventario[3] = "Tablet";
console.log(inventario);
const eliminado = inventario.pop();
console.log(eliminado);
console.log(inventario);

/* 2.	Lista de Tareas (LIFO):
o	    Declara un arreglo let llamado pilaDeTareas que simule una pila (Last In, First Out).
o	    Añade dos tareas usando .push().
o	    Luego, simula que la última tarea se completa eliminándola con .pop().
o	    Imprime el arreglo final y su length.
 */

let pilaDeTareas = [];
pilaDeTareas.push("Tarea 1");
pilaDeTareas.push("Tarea 2");
console.log(pilaDeTareas);
tareaEliminada = pilaDeTareas.pop();
console.log(tareaEliminada);
console.log(pilaDeTareas);
console.log(pilaDeTareas.length);

/* 3.	Arrays Heterogéneos:
o	    Crea un arreglo llamado perfil que contenga diferentes tipos de datos: tu nombre (String), tu edad (Number), y si eres desarrollador o no (Boolean).
o	    Imprime el typeof de cada uno de los tres elementos del arreglo para confirmar sus tipos.
 */

let perfil = ["Javier", 26, true];
console.log(typeof perfil[0]); // String
console.log(typeof perfil[1]); // Number
console.log(typeof perfil[2]); // Boolean
