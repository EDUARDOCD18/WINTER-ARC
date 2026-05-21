document.addEventListener('DOMContentLoaded', () => {
  // --- 1. CONTROL DE SIDEBAR Y SUBMENÚS ---
  const networkTrigger = document.getElementById('network-trigger');
  networkTrigger.addEventListener('click', () => {
    const submenu = networkTrigger.nextElementSibling;
    const icon = networkTrigger.querySelector('.nav__icon');
    submenu.classList.toggle('nav__submenu--is-open');
    icon.classList.toggle('nav__icon--rotated');
  });

  // --- 2. CONTROL DE TABS INTEGRADO ---
  const sidebar = document.querySelector('.dashboard__sidebar');
  sidebar.addEventListener('click', (e) => {
    const targetLink = e.target.closest('[data-tab]');
    if (!targetLink) return;

    // Cambiar link activo
    document.querySelectorAll('[data-tab]').forEach(link => link.classList.remove('nav__link--active'));
    targetLink.classList.add('nav__link--active');

    // Cambiar panel activo
    const targetTabId = targetLink.dataset.tab;
    document.querySelectorAll('.tabs__panel').forEach(panel => panel.classList.remove('tabs__panel--active'));
    
    const activePanel = document.getElementById(targetTabId);
    activePanel.classList.add('tabs__panel--active');

    // Orquestación: Si entra a nodos, dispara simulación de esqueleto
    if (targetTabId === 'tab-nodos') {
      triggerSkeletonLoad();
    }
  });

  // --- 3. SIMULACIÓN DE SKELETON (Día 82) ---
  function triggerSkeletonLoad() {
    const skeleton = document.getElementById('node-skeleton');
    const results = document.getElementById('node-results');
    skeleton.style.display = 'block';
    results.classList.add('filter-list__results--hidden');

    setTimeout(() => {
      skeleton.style.display = 'none';
      results.classList.remove('filter-list__results--hidden');
    }, 2000);
  }

  // --- 4. FILTRO EN TIEMPO REAL (Día 81) ---
  const searchInput = document.getElementById('node-search');
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.filter-list__item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(term) ? 'flex' : 'none';
    });
  });

  // --- 5. ACORDEÓN (Día 80) ---
  document.querySelector('.accordion').addEventListener('click', (e) => {
    const header = e.target.closest('.accordion__header');
    if (!header) return;
    header.parentElement.classList.toggle('accordion__item--is-open');
  });

  // --- 6. MODAL DE CONFIRMACIÓN CON FOCUS TRAP (Día 83) ---
  const modal = document.getElementById('confirm-modal');
  const btnCancel = document.getElementById('btn-cancel');
  let lastFocusedElement;

  document.getElementById('tab-nodos').addEventListener('click', (e) => {
    if (e.target.closest('.btn-trigger-action')) {
      lastFocusedElement = document.activeElement;
      modal.classList.add('modal-confirm--is-open');
      btnCancel.focus(); // Seguridad: Enfoque en cancelar
    }
  });

  const closeModal = () => {
    modal.classList.remove('modal-confirm--is-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  };

  btnCancel.addEventListener('click', closeModal);
  document.getElementById('btn-proceed').addEventListener('click', () => { alert('Nodo Reiniciado'); closeModal(); });
});