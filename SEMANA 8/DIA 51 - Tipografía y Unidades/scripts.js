const slider = document.querySelector('#font-slider');
const postContent = document.querySelector('.post__content');
const btnDark = document.querySelector('#toggle-dark');

// 1. Control de escala para el usuario
slider.addEventListener('input', (e) => {
    // Manipulamos una variable CSS directamente para el escalado
    postContent.style.setProperty('--user-scale', e.target.value);
});

// 2. Cambio de contraste (Modo Lectura)
btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Feedback visual en el botón
    btnDark.textContent = document.body.classList.contains('dark-mode') 
        ? "Modo Claro" 
        : "Modo Oscuro";
});