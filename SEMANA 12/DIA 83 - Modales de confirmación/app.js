const modal = document.getElementById('confirm-modal');
const btnTrigger = document.getElementById('btn-trigger-action');
const btnCancel = document.getElementById('btn-cancel');
const btnProceed = document.getElementById('btn-proceed');

// Elementos enfocables dentro del modal para el Trap Focus
const focusableElements = [btnCancel, btnProceed];
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

const openModal = () => {
  modal.classList.add('modal-confirm--is-open');
  firstFocusable.focus(); // Coloca el foco automáticamente en "Cancelar" (Seguridad)
};

const closeModal = () => {
  modal.classList.remove('modal-confirm--is-open');
  btnTrigger.focus(); // Devuelve el foco al botón original al cerrar
};

// Listeners de cierre
btnTrigger.addEventListener('click', openModal);
btnCancel.addEventListener('click', closeModal);

// Cerrar al hacer clic en el fondo (overlay)
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Captura de Teclado (Escape y Tab Trap)
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('modal-confirm--is-open')) return;

  // Cerrar con Escape
  if (e.key === 'Escape') {
    closeModal();
  }

  // Lógica del Trap Focus con la tecla Tab
  if (e.key === 'Tab') {
    if (e.shiftKey) { // Si presiona Shift + Tab (va hacia atrás)
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else { // Si presiona Tab solo (va hacia adelante)
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }
});