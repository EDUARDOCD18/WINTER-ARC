export const TimeLineItem = (item) => {
  const { period, degree, role, institution, company, description, tags } =
    item;

  // Se añade 'const' para evitar el ReferenceError en modo estricto
  const title = degree || role;
  const subtitle = institution || company;

  return `
    <div class="timeline__item">
      <span class="timeline__marker"></span>
      <div class="timeline__info">
        <span class="timeline__date">${period}</span>
        <h3 class="timeline__degree">${title}</h3>
        <span class="placeholder-text">${subtitle}</span>
        <p class="timeline__description">${description}</p>
        ${
          tags
            ? `
          <div class="work-item__tags">
            ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        `
            : ""
        }
      </div>
    </div>
  `;
};
