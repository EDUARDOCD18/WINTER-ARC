export const SkillCategory = (categoryData) => {
  const { category, skills } = categoryData;

  return `
    <div class="tech-category">
      <h3 class="tech-category__title">${category}</h3>
      <div class="tech-category__list">
        ${skills
          .map((skill) => {
            const modifier = skill.classModifier
              ? `tech-card__progress-bar--${skill.classModifier}`
              : "";
            const badgeModifier = skill.classModifier
              ? `tech-card__badge--${skill.classModifier}`
              : "tech-card__badge--html";

            return `
              <div class="tech-card">
                <div class="tech-card__header">
                  <span class="tech-card__badge ${badgeModifier}">
                    ${skill.name}
                  </span>
                  <span class="tech-card__percentage">${skill.percentage}%</span>
                </div>
                <div class="tech-card__progress-bg">
                  <div
                    class="tech-card__progress-bar ${modifier}"
                    style="width: ${skill.percentage}%"
                  ></div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
};
