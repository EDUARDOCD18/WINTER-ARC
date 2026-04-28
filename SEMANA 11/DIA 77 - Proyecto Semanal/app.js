const modal = document.getElementById("modal-overlay");
const closeModalBtn = document.getElementById("close-modal");
const openModalBtn = document.getElementById("btn-new-project"); // Agregado
const projectForm = document.getElementById("project-modal-form");
const successState = document.getElementById("success-state");

// --- FUNCIONES ---

// 1. Función para ABRIR (Faltaba en tu código)
const openModal = () => {
  modal.classList.add("open");
  // Aquí llamaríamos a loadProgress() de la lección 76
  console.log("Modal abierto");
};

// 2. Función para CERRAR
const closeModal = () => {
  // Filtramos para ignorar botones y solo revisar inputs con texto real
  const hasData = Array.from(projectForm.elements).some(
    (el) => el.tagName !== "BUTTON" && el.value.trim() !== ""
  );

  if (hasData) {
    const confirmClose = confirm(
      "Tienes un borrador activo. ¿Deseas cerrar el modal? (El borrador se mantendrá guardado)"
    );
    if (!confirmClose) return;
  }

  modal.classList.remove("open");
};

// --- EVENTOS ---

// Verificamos que el botón de apertura exista para evitar errores de null
if (openModalBtn) {
  openModalBtn.addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);

// Cerrar al hacer clic en el fondo oscuro
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Envío del formulario
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Aquí integrarás tus validaciones RegEx del Día 74/75
  
  // Limpieza y Éxito
  localStorage.removeItem("project_form_draft");

  // Transición visual al estado de éxito
  successState.style.display = "flex";
  successState.classList.add("animate-in");

  // Opcional: Ocultar el formulario para que solo se vea el éxito
  projectForm.style.visibility = "hidden";

  console.log("🚀 Proyecto creado con éxito.");
});