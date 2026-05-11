const searchInput = document.getElementById('node-search');
const listItems = document.querySelectorAll('.filter-list__item');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();

  listItems.forEach(item => {
    // Obtenemos todo el texto dentro del item para una búsqueda global
    const content = item.textContent.toLowerCase();

    // Verificamos si el término está incluido en el contenido
    if (content.includes(searchTerm)) {
      item.classList.remove('filter-list__item--hidden');
    } else {
      item.classList.add('filter-list__item--hidden');
    }
  });
});