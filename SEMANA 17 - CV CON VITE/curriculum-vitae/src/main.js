/* -- Importación de estilos -- */
import "./styles/index.css";

/* -- Importación de datos -- */
import { educationData } from "./data/education.js";
import { skillsData } from "./data/skills.js";
import { experienceData } from "./data/experience.js";
import { projectsData } from "./data/projects.js";

/* -- Importación de componentes -- */
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { ProjectCard } from "./components/ProjectCard.js";
import { TimeLineItem } from "./components/TimeLineItem.js";
import { SkillCategory } from "./components/SkillCategory.js";

/* -- Importación de assets -- */
import profilePic from "./assets/profile.webp";
import profilePic2 from "./assets/profile-2.webp";

/* -- Importación de módulos JS de UI -- */
import { initActiveNavLink, initMobileMenu } from "./modules/nav.js";
import { initTheme } from "./modules/ui.js";

const renderApp = () => {
  // 1. Inyectar Header y Footer alrededor de #app
  const appContainer = document.querySelector("#app");
  if (appContainer) {
    appContainer.insertAdjacentHTML("beforebegin", Header());
    appContainer.insertAdjacentHTML("afterend", Footer());
  }

  // 2. Inyectar imágenes del Hero y Sobre Mí (si existen en la vista actual)
  const imgElement = document.querySelector(".hero__image");
  const imgElement2 = document.querySelector(".about-grid__image");
  if (imgElement) imgElement.src = profilePic;
  if (imgElement2) imgElement2.src = profilePic2;

  // 3. Inyectar Experiencia (experiencia.html)
  const experienceContainer = document.querySelector("#experience-timeline");
  if (experienceContainer) {
    experienceContainer.innerHTML = experienceData.map(TimeLineItem).join("");
  }

  // 4. Inyectar Proyectos (experiencia.html)
  const projectsContainer = document.querySelector("#projects-grid");
  if (projectsContainer) {
    projectsContainer.innerHTML = projectsData.map(ProjectCard).join("");
  }

  // 5. Inyectar Educación (formaciones.html)
  const educationContainer = document.querySelector("#education-timeline");
  if (educationContainer) {
    educationContainer.innerHTML = educationData.map(TimeLineItem).join("");
  }

  // 6. Inyectar Stack / Habilidades (formaciones.html)
  const skillsContainer = document.querySelector("#skills-grid");
  if (skillsContainer) {
    skillsContainer.innerHTML = skillsData.map(SkillCategory).join("");
  }

  // 7. Inicializar lógica de navegación e interfaz
  initActiveNavLink();
  initMobileMenu();
  initTheme();
};

document.addEventListener("DOMContentLoaded", renderApp);