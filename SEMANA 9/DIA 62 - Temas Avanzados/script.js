/**
 * SISTEMA DE TEMAS AVANZADO (Día 62)
 * Características: Persistencia, Detección de OS y Feedback Visual
 */

// 1. Selección de elementos del DOM
const themeBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

// 2. Comprobación de preferencias iniciales
// Prioridad 1: ¿El usuario ya eligió un tema manualmente antes?
const savedTheme = localStorage.getItem('theme');

// Prioridad 2: ¿Cuál es la preferencia del Sistema Operativo?
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Función para aplicar el tema y actualizar la interfaz
 * @param {string} theme - 'dark' o 'light'
 */
const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    themeText.textContent = '☀️ Modo Claro';
  } else {
    document.body.classList.remove('dark-theme');
    themeText.textContent = '🌙 Modo Oscuro';
  }
};

// 3. Lógica de inicio (Se ejecuta al cargar la página)
if (savedTheme) {
  // Si hay algo en localStorage, lo respetamos
  applyTheme(savedTheme);
} else if (prefersDarkScheme.matches) {
  // Si no hay nada guardado, pero su OS está en modo oscuro
  applyTheme('dark');
} else {
  // Por defecto, modo claro
  applyTheme('light');
}

// 4. Evento de click para cambiar el tema manualmente
themeBtn.addEventListener('click', () => {
  // Comprobamos qué tema tiene actualmente
  const isDark = document.body.classList.contains('dark-theme');
  
  // Si es oscuro, pasamos a claro y viceversa
  const newTheme = isDark ? 'light' : 'dark';
  
  // Ejecutamos el cambio visual
  applyTheme(newTheme);
  
  // Guardamos la decisión para siempre (hasta que limpie caché)
  localStorage.setItem('theme', newTheme);
  
  console.log(`🌓 Interfaz: Tema cambiado manualmente a ${newTheme}`);
});

// 5. Extra Pro: Escuchar cambios en el Sistema Operativo en tiempo real
// Si el usuario cambia el tema de Windows/Mac mientras tiene tu web abierta
prefersDarkScheme.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) { // Solo si el usuario no ha elegido manualmente
    applyTheme(e.matches ? 'dark' : 'light');
  }
});
