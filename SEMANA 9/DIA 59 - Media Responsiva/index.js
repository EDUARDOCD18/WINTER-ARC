// Efecto de aparición suave cuando la imagen entra en el radar del usuario
const observerOptions = {
  threshold: 0.1 // Se activa cuando el 10% del elemento es visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target); // Dejamos de observar una vez cargado
    }
  });
}, observerOptions);

// Aplicamos el estilo inicial y observamos
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease-out";
  observer.observe(card);
});

