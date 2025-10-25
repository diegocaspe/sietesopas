// Seleccionamos todos los cuadros
const squares = document.querySelectorAll('.square');

// Función que se ejecuta cuando los elementos se ven en pantalla
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Se añade la clase 'visible'
      observer.unobserve(entry.target); // Deja de observar el elemento una vez que ha aparecido
    }
  });
}, { threshold: 0.5 }); // El 50% del elemento debe ser visible para activar la animación

// Observamos cada cuadro
squares.forEach(square => {
  observer.observe(square);
});

