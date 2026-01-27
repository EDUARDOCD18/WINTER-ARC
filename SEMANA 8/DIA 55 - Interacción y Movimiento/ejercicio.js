/**
 * SECCIÓN 8: INTEGRACIÓN DE INTERACCIONES PRO
 * Este script controla el estado del diseño, la accesibilidad y la reactividad.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SELECTORES DE ELEMENTOS
    const burger = document.getElementById('burger-menu');
    const navMenu = document.getElementById('navbar-menu');
    const colorPicker = document.getElementById('color-picker');
    const btnPromo = document.getElementById('btn-promo');
    const root = document.documentElement;

    // ==========================================
    // 2. MENÚ MÓVIL (Día 52 y 55)
    // ==========================================
    burger.addEventListener('click', () => {
        // Alternamos las clases para activar la animación de la "X" y el menú
        burger.classList.toggle('burger--active');
        navMenu.classList.toggle('navbar__menu--active');
        
        // Bloqueamos el scroll del body cuando el menú está abierto (UX Tip)
        const isOpen = navMenu.classList.contains('navbar__menu--active');
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        
        console.log(`📱 Navegación: El menú móvil está ${isOpen ? 'Abierto' : 'Cerrado'}`);
    });

    // ==========================================
    // 3. CONTROL DE DISEÑO DINÁMICO (Día 50 y 53)
    // ==========================================
    colorPicker.addEventListener('input', (e) => {
        const newColor = e.target.value;
        
        // Actualizamos la variable global del Design System
        root.style.setProperty('--primary', newColor);
        
        // Calculamos un color más oscuro para los hovers de forma dinámica (Opcional/Avanzado)
        // Aquí podrías usar una librería o simplemente inyectar el color.
        console.log(`🎨 Design System: Color primario actualizado a ${newColor}`);
    });

    // ==========================================
    // 4. MANIPULACIÓN DE PSEUDO-ELEMENTOS (Día 54)
    // ==========================================
    btnPromo.addEventListener('click', () => {
        // Como no podemos seleccionar ::before directamente, cambiamos la variable
        // que el CSS usa en su propiedad 'content'
        const currentText = getComputedStyle(root).getPropertyValue('--badge-text');
        
        if (currentText.includes('NUEVO')) {
            root.style.setProperty('--badge-text', '"-50% DESC"');
            root.style.setProperty('--primary', '#eb4d4b'); // Rojo promo
        } else {
            root.style.setProperty('--badge-text', '"NUEVO"');
            root.style.setProperty('--primary', colorPicker.value);
        }
        
        console.log("💎 Joyería CSS: Pseudo-elemento actualizado desde el DOM.");
    });

    // ==========================================
    // 5. EFECTO DE SCROLL REVEAL (Bonus de Diseño)
    // ==========================================
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        // Si el usuario baja más de 50px, añadimos sombra a la nav (Feedback visual)
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.5rem 5%';
        }
    });

    // Cerrar menú al hacer clic en un enlace (Mejora UX)
    const navLinks = document.querySelectorAll('.navbar__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('burger--active');
            navMenu.classList.remove('navbar__menu--active');
            document.body.style.overflow = 'auto';
        });
    });

});