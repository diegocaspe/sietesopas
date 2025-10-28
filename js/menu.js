document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-buttons button");
  const sections = document.querySelectorAll(".menu-section");

  // Leer el parámetro 'category' de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get('category') || 'todos'; // Default to 'todos' if no category is passed
  
  // Mostrar todo al inicio
  sections.forEach(sec => sec.style.display = "block");

  // Mostrar solo la categoría seleccionada al cargar la página
  sections.forEach(sec => {
    if (categoryFromUrl === "todos" || sec.dataset.category === categoryFromUrl) {
      sec.style.display = "block";
    } else {
      sec.style.display = "none";
    }
  });

  // Marcar el botón activo en base al parámetro de la URL
  buttons.forEach(btn => {
    btn.classList.remove("active"); // Remover clase 'active' de todos los botones
    if (btn.dataset.category === categoryFromUrl) {
      btn.classList.add("active"); // Añadir la clase 'active' al botón correspondiente
    }
  });

  // Escuchar el click en los botones
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;

      // Marcar el botón activo
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Mostrar/ocultar secciones completas (incluye h2)
      sections.forEach(sec => {
        if (cat === "todos" || sec.dataset.category === cat) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });

      // Opcional: desplazar al primer elemento visible
      const firstVisible = Array.from(sections).find(s => s.style.display === "block");
      if (firstVisible) firstVisible.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
