const formulario = document.getElementById("formulario__tarea");
const inputTarea = document.getElementById("input__tarea");
const listaTareas = document.getElementById("lista__tareas");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const textoTarea = inputTarea.value.trim();

  if (textoTarea === "") {
    alert("La tarea no puede ir vacía");
    return;
  }

  const nuevaTarea = document.createElement("li");
  const textoNodo = document.createTextNode(textoTarea);
  nuevaTarea.appendChild(textoNodo);

  // Crear el botón de eliminar
      const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("btn__eliminar");


  // 4. Adjuntar elementos
  nuevaTarea.appendChild(botonEliminar);
  listaTareas.appendChild(nuevaTarea);

  // 5. Limpiar el input para la siguiente tarea
  inputTarea.value = "";

  // 6. 🔑 AÑADIR EVENTO DE ELIMINACIÓN A LA TAREA RECIÉN CREADA
  botonEliminar.addEventListener("click", (eliminarTarea) => {});

  // 7. FUNCIÓN DE ELIMINACIÓN
  // Esta función debe ser capaz de identificar y eliminar el elemento padre (el <li>)
  function eliminarTarea(e) {
    // e.target es el botón 'X'
    // e.target.parentNode es el <li> que contiene el botón
    const liAEliminar = e.target.parentNode;

    liAEliminar.remove(); // 🔑 Método de eliminación moderno (Día 20)
    console.log(`Tarea eliminada: ${liAEliminar.textContent}`);
  }

  // 8. Opcional: Adjuntar el listener de eliminación a la tarea inicial del HTML
// Para que la tarea de ejemplo también pueda eliminarse
const botonesIniciales = document.querySelectorAll(".btn__eliminar"); // NodeList (Día 16)
botonesIniciales.forEach(btn => { // Usamos .forEach para iterar la NodeList
    btn.addEventListener("click", eliminarTarea);
});

});
