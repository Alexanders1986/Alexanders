// =========================================================
// CONTACTO — reemplaza estos valores por tus datos reales
// Por privacidad, este sitio deliberadamente NO publica correo
// ni número de celular; solo enlaces a perfiles profesionales.
// =========================================================
const CONTACT = {
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  linkedinDisplay: "/in/tu-usuario",
  github: "https://github.com/tu-usuario",
  githubDisplay: "@tu-usuario",
};

(function applyContact(){
  const linkedin = document.getElementById("contactLinkedin");
  const github = document.getElementById("contactGithub");

  if (linkedin) {
    linkedin.href = CONTACT.linkedin;
    linkedin.querySelector(".contact-value").textContent = CONTACT.linkedinDisplay;
  }
  if (github) {
    github.href = CONTACT.github;
    github.querySelector(".contact-value").textContent = CONTACT.githubDisplay;
  }
})();

// =========================================================
// MENÚ MÓVIL
// =========================================================
const tabToggle = document.getElementById("tabToggle");
const tabList = document.getElementById("tabList");

if (tabToggle && tabList) {
  tabToggle.addEventListener("click", () => {
    const isOpen = tabList.classList.toggle("open");
    tabToggle.setAttribute("aria-expanded", String(isOpen));
  });

  tabList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      tabList.classList.remove("open");
      tabToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================
// PESTAÑA ACTIVA SEGÚN SCROLL (IntersectionObserver)
// =========================================================
const sections = document.querySelectorAll("main .section, main .hero");
const tabs = document.querySelectorAll(".tab[data-tab]");

const setActiveTab = (id) => {
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.getAttribute("href") === `#${id}`);
  });
};

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });
}

// =========================================================
// AÑO EN FOOTER
// =========================================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
