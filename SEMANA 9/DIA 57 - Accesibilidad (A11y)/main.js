const toggle = document.getElementById('main-switch');

toggle.addEventListener('click', () => {
  const isChecked = toggle.getAttribute('aria-checked') === 'true';
  
  // Invertimos el estado
  toggle.setAttribute('aria-checked', !isChecked);
  
  // Feedback sutil para desarrolladores
  console.log(`♿ [A11y] Switch cambiado a: ${!isChecked}`);
});