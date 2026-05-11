const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
  const header = e.target.closest('.accordion__header');
  if (!header) return;

  const item = header.parentElement;

  // OPCIONAL: Cerrar otros para que solo haya uno abierto (Estilo Acordeón Real)
  const allItems = accordion.querySelectorAll('.accordion__item');
  allItems.forEach(i => {
    if (i !== item) i.classList.remove('accordion__item--is-open');
  });

  // Alternar estado actual
  item.classList.toggle('accordion__item--is-open');
});