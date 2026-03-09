// 1. SELECTORES DE ELEMENTOS
const sidebar = document.getElementById('sidebar');
const btnToggle = document.getElementById('btn-toggle');
const gridBtn = document.getElementById('view-grid');
const listBtn = document.getElementById('view-list');
const container = document.getElementById('project-container');
const counterText = document.getElementById('counter-text');
const searchInput = document.getElementById('search-input');

// 2. FUNCIÓN DE ANIMACIÓN (STAGGER)
const animateCards = () => {
  const cards = container.querySelectorAll('.item-card:not([style*="display: none"])');
  
  cards.forEach((card, index) => {
    card.classList.remove('animate');
    void card.offsetWidth; // Forzar reflow para reiniciar animación
    card.style.animationDelay = `${index * 0.05}s`;
    card.classList.add('animate');
  });
};

// 3. ACTUALIZAR CONTADOR
const updateProjectCount = () => {
  const visibleCards = container.querySelectorAll('.item-card:not([style*="display: none"])').length;
  counterText.innerText = `Mostrando ${visibleCards} proyectos activos`;
};

// 4. CAMBIO DE VISTA (GRID / LISTA) CON PERSISTENCIA
const setLayout = (mode) => {
  if (mode === "list") {
    container.classList.replace('grid-mode', 'list-mode');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
  } else {
    container.classList.replace('list-mode', 'grid-mode');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
  }
  
  localStorage.setItem('dashboard-view', mode);
  animateCards();
};

// 5. FILTRADO / BÚSQUEDA DINÁMICA
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const cards = container.querySelectorAll('.item-card');
  
  cards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    const content = card.querySelector('.card-body').innerText.toLowerCase();
    
    if (title.includes(term) || content.includes(term)) {
      card.style.display = 'grid'; // O flex, según tu CSS de list-mode
    } else {
      card.style.display = 'none';
    }
  });
  
  updateProjectCount();
  animateCards(); // Re-animar solo los resultados visibles
});

// 6. TOGGLE DEL SIDEBAR (Colapsar/Expandir)
btnToggle.addEventListener('click', () => {
  // Simplemente alternamos una variable CSS o una clase
  const currentWidth = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width');
  
  if (currentWidth.trim() === '250px') {
    document.documentElement.style.setProperty('--sidebar-width', '80px');
    sidebar.classList.add('collapsed');
  } else {
    document.documentElement.style.setProperty('--sidebar-width', '250px');
    sidebar.classList.remove('collapsed');
  }
});

// 7. INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
  // Cargar vista guardada
  const savedView = localStorage.getItem('dashboard-view') || 'grid';
  setLayout(savedView);
  
  // Actualizar contador inicial
  updateProjectCount();
});

// Eventos de botones de vista
gridBtn.addEventListener('click', () => setLayout('grid'));
listBtn.addEventListener('click', () => setLayout('list'));