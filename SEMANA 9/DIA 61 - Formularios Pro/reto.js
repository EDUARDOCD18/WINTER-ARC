const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const emailGroup = document.getElementById("group-email");
const passGroup = document.getElementById("group-pass");

// Auxiliar: Validador de Email
const isEmail = (val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);

/* --- EMAIL: PREVENCIÓN DE FATIGA --- */
emailInput.addEventListener("blur", () => {
  // Solo mostramos error al salir si es inválido
  if (!isEmail(emailInput.value) && emailInput.value !== "") {
    emailGroup.classList.add("group-error");
  }
});

emailInput.addEventListener("input", () => {
  // Si ya hay un error y el usuario empieza a corregir...
  if (isEmail(emailInput.value)) {
    emailGroup.classList.remove("group-error");
    emailGroup.classList.add("group-success");
  } else {
    emailGroup.classList.remove("group-success");
  }
});

/* --- PASSWORD: INDICADOR DE FUERZA --- */
passInput.addEventListener("input", () => {
  const len = passInput.value.length;

  // Limpiamos estados previos
  passGroup.classList.remove("group-warning", "group-success", "group-error");

  if (len > 0 && len < 4) {
    // Demasiado corta (Estado opcional o neutro)
  } else if (len >= 4 && len < 8) {
    passGroup.classList.add("group-warning"); // Amarillo
  } else if (len >= 8) {
    passGroup.classList.add("group-success"); // Verde
  }
});
