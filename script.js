// Activar enlace de navegación según scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);

// Formulario (solo mensaje en pantalla, sin backend)
const form = document.querySelector(".contact-form");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.textContent = "Mensaje enviado (demo). Gracias por escribirnos.";
    form.reset();
  });
}
