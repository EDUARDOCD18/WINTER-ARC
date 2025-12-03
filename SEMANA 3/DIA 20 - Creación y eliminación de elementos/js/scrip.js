/* 📝 Tarea 1: Creación y Adición de Nodos
Objetivo: Crear un nuevo <li> cada vez que se hace clic en el botón "Agregar Invitado".
*/

const listaInvitados = document.getElementById("lista__invitados"); // Seleccionar el elemento lista__invitados
const btnAgregar = document.getElementById("btn__agregar"); // Seleccionar el elemento btn__agregar
const mensaje = document.getElementById("mensaje");

let contadorInvitados = 2; // Empezamos en 2 porque ya hay un invitado inicial

btnAgregar.addEventListener("click", () => {
  // Crea el nuevo elemento
  const nuevoLi = document.createElement("li");
  const nuevoBtn = document.createElement("button");

  // Configurar el nuevo elemento (darle clase y id)
  nuevoLi.textContent = `Nuevo invitado ${contadorInvitados}`;
  nuevoLi.classList.add("nuevo__item");
  nuevoLi.id = `invitado__${contadorInvitados}`;
  nuevoBtn.textContent = "X";
  nuevoBtn.classList.add("btn__cerrar");

  // Añadir al DOM
  nuevoLi.appendChild(nuevoBtn);
  listaInvitados.appendChild(nuevoLi);

  mensaje.classList.add("mensaje__verde");
  mensaje.classList.remove("mensaje__rojo");
  mensaje.textContent = `Invitado agregado`;
  contadorInvitados++;
});

/* 📝 Tarea 2: Eliminación de No os
Objetivo: Eliminar el primer <li> de la lista al hacer clic en el botón "Eliminar".
 */

const btnEliminar = document.getElementById("btn__eliminar");

btnEliminar.addEventListener("click", () => {
  // 1. Seleccionar el primer <li> de la lista
  // (Usamos querySelector en la lista para obtener el primer hijo <li>)

  const primerInvitado = listaInvitados.querySelector("li");
  if (primerInvitado) {
    // Eliminar el nodo
    listaInvitados.removeChild(primerInvitado);
    mensaje.textContent = `Invitado eliminado.`;
    mensaje.classList.add("mensaje__rojo");
    mensaje.classList.remove("mensaje__verde");
    
  } else {
    mensaje.classList.remove("mensaje__rojo");
    mensaje.classList.remove("mensaje__verde");
    mensaje.classList.add("mensaje__azul");
    mensaje.textContent = `No quedan invitados por eliminar`;
  }
});

/* 🏋️ Ejercicios de Refuerzo */

/* 1.	Añadir al Inicio:
o	Modifica la Tarea 1 para que, en lugar de usar appendChild(), uses listaInvitados.prepend(nuevoLi);.
o	prepend() inserta el nuevo nodo como el primer hijo del padre (al inicio de la lista). Observa cómo cambia el orden.
 */
