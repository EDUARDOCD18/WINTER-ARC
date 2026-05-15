const btnSimulate = document.getElementById('btn-simulate');
const skeleton = document.getElementById('skeleton-loader');
const realContent = document.getElementById('real-content');

btnSimulate.addEventListener('click', () => {
  // Resetear estados
  skeleton.style.display = 'flex';
  realContent.classList.remove('fade-in');
  realContent.classList.add('card__content--hidden');

  // Simular latencia de red (3 segundos)
  setTimeout(() => {
    skeleton.style.display = 'none';
    realContent.classList.remove('card__content--hidden');
    realContent.classList.add('fade-in');
  }, 3000);
});