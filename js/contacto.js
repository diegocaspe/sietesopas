// Función para mostrar los mensajes flash y desaparecer después de 5 segundos
window.onload = function() {
    const flashMessages = document.querySelector('#flash-messages');
    const contactForm = document.getElementById('contact-form');
    
    // Muestra el mensaje flash solo si el formulario fue enviado
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto de envío de formulario

        // Muestra el mensaje flash
        flashMessages.style.display = 'block';  

        // Simulamos el tiempo de espera por el envío del formulario
        setTimeout(function() {
            flashMessages.style.display = 'none';  // Oculta el mensaje después de 5 segundos
        }, 5000);
        
        // Enviar el formulario a Formspree
        contactForm.submit();  // Realizamos el envío real del formulario a Formspree
    });
};

