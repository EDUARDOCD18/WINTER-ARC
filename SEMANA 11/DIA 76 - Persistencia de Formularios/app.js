const form = document.getElementById("project-form");
const statusMsg = document.getElementById("save-status");
const STORAGE_KEY = "project_form_draft";
const timestampMsg = document.getElementById("timestamp-msg");
const btnClear = document.getElementById("btn-clear");

btnClear.addEventListener("click", () => {
  const userConfirmed = confirm(
    "¿Estás seguro de que quieres borrar el borrador? Esta acción no se puede deshacer.",
  );

  // 2. Si el usuario acepta (true)
  if (userConfirmed) {
    // Borramos del disco local
    localStorage.removeItem(STORAGE_KEY);

    // Limpiamos los campos visualmente
    form.reset();

    // Actualizamos el mensaje de tiempo
    timestampMsg.innerHTML = "Borrador eliminado correctamente.";
    alert("⚠️ El usuario ha limpiado el almacenamiento local.");
  } else {
    alert("😮 Limpieza cancelada por el usuario.");
  }
});

// 1. DEFINIR LA FUNCIÓN (Solo una vez)
const saveProgress = () => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  // --- LÓGICA DEL RETO 2 ---
  const ahora = new Date();
  const horaLocal = ahora.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  timestampMsg.innerText = `Último cambio guardado a las: ${horaLocal}`;
  // -------------------------

  console.log(`💾 Guardado a las ${horaLocal}`);
  // Feedback visual
  statusMsg.classList.add("visible");
  setTimeout(() => statusMsg.classList.remove("visible"), 1500);

  console.log("💾 Borrador guardado eficientemente");
};

// 2. CARGAR DATOS AL INICIAR
const loadProgress = () => {
  const rawData = localStorage.getItem(STORAGE_KEY);
  if (!rawData) return;

  const data = JSON.parse(rawData);

  Object.keys(data).forEach((key) => {
    const input = form.elements[key];
    if (input) input.value = data[key];
  });
};

/**
 * Función Debounce
 */
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 3. CREAR VERSIÓN OPTIMIZADA
const optimizedSave = debounce(saveProgress, 500);

// --- LISTENERS ---

// IMPORTANTE: Solo un listener para el input usando la versión optimizada
form.addEventListener("input", optimizedSave);

window.addEventListener("DOMContentLoaded", loadProgress);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  alert("¡Proyecto guardado!");
  form.reset();
});
