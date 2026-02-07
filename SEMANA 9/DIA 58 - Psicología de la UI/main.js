const toggle = document.getElementById('secure-switch');
const label = document.querySelector('label[for="secure-switch"]');
const toast = document.getElementById('toast-feedback');

// Función unificada de activación
const handleToggle = () => {
  const isChecked = toggle.getAttribute('aria-checked') === 'true';
  const newState = !isChecked;
  
  toggle.setAttribute('aria-checked', newState);
  if (newState) showFeedback();
};

// Ley de Fitts: El label ahora también dispara la acción
label.addEventListener('click', handleToggle);
toggle.addEventListener('click', handleToggle);

function showFeedback() {
  toast.classList.add('toast--visible');
  setTimeout(() => toast.classList.remove('toast--visible'), 3000);
}