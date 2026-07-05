document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. Lógica del Menú Hamburguesa (Mobile Navigation)
  // ==========================================================================
  const menuToggle = document.getElementById("menu-toggle");
  const headerMenu = document.querySelector(".header__menu");

  if (menuToggle && headerMenu) {
    menuToggle.addEventListener("click", () => {
      // Alterna la clase de apertura en el menú y de animación en el botón
      headerMenu.classList.toggle("is-open");
      menuToggle.classList.toggle("is-active");

      // Accesibilidad: Actualiza el estado del aria-expanded
      const isOpen = headerMenu.classList.contains("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Cerrar el menú automáticamente al hacer click en un enlace (UX móvil)
    const menuLinks = document.querySelectorAll(".header__link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        headerMenu.classList.remove("is-open");
        menuToggle.classList.remove("is-active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ==========================================================================
  // 2. Generador Dinámico de Frases Estoicas
  // ==========================================================================
  const quotes = [
    {
      text: "No nos atrevemos a muchas cosas porque son difíciles, pero son difíciles porque no nos atrevemos.",
      author: "Séneca",
    },
    {
      text: "Te conviertes en aquello a lo que le prestas atención.",
      author: "Epicteto",
    },
    {
      text: "Tienes poder sobre tu mente, no sobre los acontecimientos. Date cuenta de esto y verás tu fuerza.",
      author: "Marco Aurelio",
    },
    {
      text: "La verdadera felicidad es disfrutar del presente sin dependencia ansiosa sobre el futuro.",
      author: "Séneca",
    },
    {
      text: "El impedimento a la acción avanza la acción. Lo que se interpone en el camino se convierte en el camino.",
      author: "Marco Aurelio",
    },
    {
      text: "Yo solo sé que no sé nada. Eso me diferencia de aquellos que creen saberlo todo",
      author: "Sócrates",
    },
  ];

  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const nextQuoteBtn = document.getElementById("next-quote");

  if (nextQuoteBtn && quoteText && quoteAuthor) {
    nextQuoteBtn.addEventListener("click", () => {
      // Añadimos clase para desvanecer el texto (Fade Out)
      quoteText.classList.add("quote-fade");
      quoteAuthor.classList.add("quote-fade");

      // Esperamos a que la animación de salida termine (300ms) antes de cambiar el contenido
      setTimeout(() => {
        // Selección aleatoria asegurando que no repita la misma de forma inmediata
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * quotes.length);
        } while (quoteText.innerText === quotes[randomIndex].text);

        // Inyección en el DOM
        quoteText.innerText = quotes[randomIndex].text;
        quoteAuthor.innerText = quotes[randomIndex].author;

        // Quitamos la clase para que reaparezca suavemente (Fade In)
        quoteText.classList.remove("quote-fade");
        quoteAuthor.classList.remove("quote-fade");
      }, 300);
    });
  }

  // ==========================================================================
  // 3. Interruptor de "Modo Enfoque" (Theme Switcher)
  // ==========================================================================
  const focusToggle = document.getElementById("focus-toggle");

  if (focusToggle) {
    focusToggle.addEventListener("click", () => {
      document.body.classList.toggle("focus-mode");

      // Feedback visual en el texto del botón
      if (document.body.classList.contains("focus-mode")) {
        focusToggle.innerText = "Modo Normal";
      } else {
        focusToggle.innerText = "Modo Enfoque";
      }
    });
  }
});
