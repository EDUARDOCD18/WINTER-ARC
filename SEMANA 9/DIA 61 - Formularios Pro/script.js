const form = document.getElementById('pro-form');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');

// Función para validar Email (Regex simple)
const validateEmail = (email) => {
  return String(email).toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
};

// Validación en tiempo real
emailInput.addEventListener('input', () => {
  const group = document.getElementById('group-email');
  if (validateEmail(emailInput.value)) {
    group.classList.add('success');
    group.classList.remove('error');
  } else {
    group.classList.remove('success');
  }
});

// Manejo del Envío
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let hasError = false;

  if (!validateEmail(emailInput.value)) {
    document.getElementById('group-email').classList.add('error');
    hasError = true;
  }

  if (passInput.value.length < 8) {
    document.getElementById('group-pass').classList.add('error');
    hasError = true;
  }

  if (hasError) {
    // Aplicamos la animación de sacudida al formulario
    form.classList.add('shake');
    // La quitamos después de que termine para poder repetirla
    setTimeout(() => form.classList.remove('shake'), 500);
  } else {
    alert("🚀 ¡Registro exitoso!");
  }
});