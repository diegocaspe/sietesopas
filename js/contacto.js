window.onload = function() {
    const flashMessages = document.querySelector('#flash-messages');
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        flashMessages.style.display = 'block';  

        setTimeout(function() {
            flashMessages.style.display = 'none';  
        }, 5000);
        
        contactForm.submit();
    });
};
