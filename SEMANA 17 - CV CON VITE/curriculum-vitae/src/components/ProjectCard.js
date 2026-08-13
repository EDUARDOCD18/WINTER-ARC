export const ProjectCard = (project) => {
  // Se agrega 'image' a la desestructuración
  const { title, category, description, image, tools, link } = project;

  return `
    <article class="project-card">
      ${
        image
          ? `
          <div class="project-card__image-container">
            <img 
              src="${image}" 
              alt="Captura del proyecto ${title}" 
              class="project-card__image"
              loading="lazy"
              width="600"
              height="340"
            />
          </div>
        `
          : ""
      }
      <div class="project-card__body">
        <span class="project-card__meta">${category}</span>
        <h3 class="project-card__title">${title}</h3>
        <p class="project-card__text">${description}</p>
        <div class="project-card__tools">
          ${tools.map((tool) => `<span class="tag tag--code">${tool}</span>`).join("")}
        </div>
      </div>
      <div class="project-card__footer">
        <a href="${link}" class="project-card__link" target="_blank" rel="noopener noreferrer">
          Código Fuente &rarr;
        </a>
      </div>
    </article>
  `;
};