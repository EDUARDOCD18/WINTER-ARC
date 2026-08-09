export const Footer = () => {
  return `
    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__info">
          <p class="footer__copy">
            &copy; ${new Date().getFullYear()} Javier C. Todos los derechos reservados.
          </p>
          <p class="footer__meta">
            Construido con semántica HTML5 y CSS estructurado.
          </p>
        </div>
        <div class="footer__links">
          <a
            href="https://github.com/"
            class="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub</a
          >
          <a
            href="https://linkedin.com/"
            class="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >
        </div>
      </div>
    </footer>
    `;
};
