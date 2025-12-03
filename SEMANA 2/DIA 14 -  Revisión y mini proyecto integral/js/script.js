/* 🔨 Mini-Proyecto: Lista de Tareas y Prioridades */

/* Objetivo: Iterar sobre una lista de tareas (Array de Objetos) y usar una condicional (if) para imprimir un mensaje diferente según el estado de cada tarea. */

/* 📝 Tarea Única: Procesamiento de Tareas
1.	Estructura de Datos (const Array de Objetos):
 */

const listaTarea = [
  {
    id: 1,
    descripcion: "Comprar víveres",
    prioridad: "alta",
    completada: false,
  },
  {
    id: 2,
    descripcion: "Lavar el coche",
    prioridad: "media",
    completada: true,
  },
  {
    id: 3,
    descripcion: "Pagar facturas",
    prioridad: "alta",
    completada: false,
  },
  {
    id: 4,
    descripcion: "Hacer ejercicio",
    prioridad: "baja",
    completada: true,
  },
  {
    id: 5,
    descripcion: "Leer un libro",
    prioridad: "media",
    completada: false,
  },
];

// 2. Bucle for (iteración)

console.log("-- Reporte de tareas --");

for (let i = 0; i < listaTarea.length; i++) {
  const tareaActual = listaTarea[i];

  if (tareaActual.completada === true) {
    console.log(`La tarea "${tareaActual.descripcion}" ya ha sido completada.`);
  } else if (tareaActual.prioridad === "alta") {
    console.log(
      `La tarea "${tareaActual.descripcion}" es de alta prioridad y está pendiente.`
    );
  } else {
    console.log(
      `Tarea ${tareaActual.id}: ${tareaActual.descripcion} [pendiente]`
    );
  }
}

let pendientesAltas = 0;
let pendientesBajas = 0;

for (let i = 0; i < listaTarea.length; i++) {
  const tareaActual = listaTarea[i];
  if (tareaActual.completada === false && tareaActual.prioridad === "alta") {
    console.log(`La tarea ${tareaActual.descripcion} es alta`);
    pendientesAltas++;
  } else if (
    tareaActual.completada === false &&
    tareaActual.prioridad === "baja"
  ) {
    pendientesBajas++;
  } else {
    pendientesBajas++;
  }
}

console.log(`Total de tareas altas pendientes: ${pendientesAltas}`);
console.log(`Total de tareas altas pendientes: ${pendientesBajas}`);

/* Tarea 3 */

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
