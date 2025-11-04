document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-buttons button");
  const sections = document.querySelectorAll(".menu-section");

  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get('category') || 'todos';
  
  sections.forEach(sec => sec.style.display = "block");

  sections.forEach(sec => {
    if (categoryFromUrl === "todos" || sec.dataset.category === categoryFromUrl) {
      sec.style.display = "block";
    } else {
      sec.style.display = "none";
    }
  });

  buttons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.category === categoryFromUrl) {
      btn.classList.add("active");
    }
  });

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      sections.forEach(sec => {
        if (cat === "todos" || sec.dataset.category === cat) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });

      const firstVisible = Array.from(sections).find(s => s.style.display === "block");
      if (firstVisible) firstVisible.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
