document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(event.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
