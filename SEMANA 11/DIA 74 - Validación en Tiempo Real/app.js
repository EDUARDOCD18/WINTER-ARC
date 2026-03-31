// Selección de elementos
const nameInput = document.getElementById("v-name");
const emailInput = document.getElementById("v-email");
const dateInput = document.getElementById("v-date");
const dateError = document.getElementById("date-error");

// RETO 1: RegEx de Nombre (Letras, tildes, ñ y espacios)
const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función Genérica de Estilos
const validateField = (input, condition) => {
  if (input.value.trim() === "") {
    input.classList.remove("valid", "invalid");
    return false;
  }

  if (condition) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return true;
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    return false;
  }
};

// --- EVENTOS DE VALIDACIÓN ---

// Nombre
nameInput.addEventListener("input", () => {
  validateField(
    nameInput,
    nameRegex.test(nameInput.value) && nameInput.value.trim().length >= 3,
  );
});

// Email
emailInput.addEventListener("input", () => {
  validateField(emailInput, emailRegex.test(emailInput.value));
});

// RETO 2: Validación de Fecha (No viajar al pasado)
dateInput.addEventListener("input", () => {
  const selectedDate = new Date(dateInput.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Comparar solo el día

  const isFuture = selectedDate >= today;
  const isValid = validateField(dateInput, isFuture);

  if (dateInput.value !== "" && !isFuture) {
    dateError.classList.add("show");
  } else {
    dateError.classList.remove("show");
  }
});

// Prevención de envío si hay errores
document.getElementById("validation-form").addEventListener("submit", (e) => {
  const isNameOk = nameRegex.test(nameInput.value);
  const isEmailOk = emailRegex.test(emailInput.value);
  const isDateOk = new Date(dateInput.value) >= new Date().setHours(0, 0, 0, 0);

  if (!isNameOk || !isEmailOk || !isDateOk) {
    e.preventDefault();
    alert("Por favor, corrige los campos marcados en rojo.");
  } else {
    alert("¡Formulario enviado con éxito!");
  }
});
