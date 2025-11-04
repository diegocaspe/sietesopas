// === SLIDER 1 (Opiniones con fotos) ===
let slides = document.querySelectorAll("#slider-testimonios .slide");
let current = 0;

function nextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}
setInterval(nextSlide, 3000);

// === SLIDER 2 (Comentarios sin foto) ===
const comentariosSlider = document.getElementById("slider-comentarios");
const btnEnviar = document.getElementById("btnEnviar");

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
let comentarioInterval = null;
let currentComment = 0;

// Renderizar comentarios en el carrusel
function renderComentarios() {
  comentariosSlider.innerHTML = "";

  comentarios.forEach((c, index) => {
    const div = document.createElement("div");
    div.classList.add("slide");
    if (index === 0) div.classList.add("active");
    div.innerHTML = `
      <div class="comentario-simple">
        <blockquote>“${c.comentario}”</blockquote>
        <p class="autor">— ${c.nombre}</p>
      </div>
    `;
    comentariosSlider.appendChild(div);
  });

  // Reiniciar rotación
  iniciarCarruselComentarios();
}

// Función que rota los comentarios
function iniciarCarruselComentarios() {
  if (comentarioInterval) clearInterval(comentarioInterval);
  const slides2 = comentariosSlider.querySelectorAll(".slide");
  if (slides2.length <= 1) return;

  currentComment = 0;
  comentarioInterval = setInterval(() => {
    slides2[currentComment].classList.remove("active");
    currentComment = (currentComment + 1) % slides2.length;
    slides2[currentComment].classList.add("active");
  }, 4000);
}

// Inicializar al cargar la página
renderComentarios();

// === Enviar nuevo comentario ===
btnEnviar.addEventListener("click", () => {
  const nombre = document.getElementById("nombreUsuario").value.trim();
  const comentario = document.getElementById("comentarioUsuario").value.trim();

  if (nombre === "" || comentario === "") {
    alert("Por favor, completa tu nombre y comentario.");
    return;
  }

  comentarios.unshift({ nombre, comentario });
  localStorage.setItem("comentarios", JSON.stringify(comentarios));

  document.getElementById("nombreUsuario").value = "";
  document.getElementById("comentarioUsuario").value = "";

  renderComentarios();
});