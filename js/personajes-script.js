// Mostrar la flecha cuando se desplaza hacia abajo
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) { // Mostrar el botón después de 300px de desplazamiento
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Desplazamiento suave al hacer clic en el botón
document.getElementById('back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Efecto de Zoom al hacer scroll
window.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.personaje-card img');
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            img.classList.add('scroll-zoom');
        } else {
            img.classList.remove('scroll-zoom');
        }
    });
});
