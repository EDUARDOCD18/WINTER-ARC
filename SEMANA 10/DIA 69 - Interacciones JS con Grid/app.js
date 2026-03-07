const gridBtn = document.getElementById("view-grid");
const listBtn = document.getElementById("view-list");
const container = document.getElementById("main-grid");

// 1. Función para aplicar el layout y guardar la preferencia
const setLayout = (mode) => {
  if (mode === "list") {
    container.classList.replace("grid-mode", "list-mode");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  } else {
    container.classList.replace("list-mode", "grid-mode");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  }

  // GUARDAR: Guardamos el string 'grid' o 'list' en el bolsillo del navegador
  localStorage.setItem("dashboard-view", mode);
  console.log(`💾 Preferencia guardada: Vista de ${mode}`);

  animateCards();
};

listBtn.addEventListener("click", () => setLayout("list"));
gridBtn.addEventListener("click", () => setLayout("grid"));

window.addEventListener("DOMContentLoaded", () => {
  const savedView = localStorage.getItem("dashboard-view");

  // Si el usuario ya había elegido algo antes, lo aplicamos
  if (savedView) {
    setLayout(savedView);
  }
});

const updateProjectCount = () => {
  // 1. Buscamos todas las tarjetas actuales en el DOM
  const totalCards = document.querySelectorAll(".item-card").length;

  // 2. Seleccionamos el lugar donde queremos mostrar el texto
  const display = document.getElementById("counter-text");

  // 3. Actualizamos el contenido dinámicamente
  display.innerHTML = `Mostrando ${totalCards} proyectos activos`;
};

// 4. Ejecutamos la función al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  updateProjectCount();

  // Aquí iría tu lógica anterior de localStorage...
});

const animateCards = () => {
  const cards = document.querySelectorAll(".item-card");

  cards.forEach((card, index) => {
    // 1. Limpiamos cualquier rastro de animación previa
    card.classList.remove("animate");
    card.style.animationDelay = "";

    // 2. Truco Pro: Forzar un "reflow"
    // Esto le dice al navegador: "Oye, detente y procesa el cambio de clase AHORA"
    void card.offsetWidth;

    // 3. Asignamos el retraso según el índice (0.1s, 0.2s, 0.3s...)
    card.style.animationDelay = `${index * 0.1}s`;

    // 4. Activamos la animación
    card.classList.add("animate");
  });
};
