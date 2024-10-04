// Función para voltear las tarjetas
function flipCard(card) {
    card.classList.toggle('flipped');
}

const carouselContainer = document.querySelector('.carousel-container');

    // Mostrar la flecha cuando se desplaza hacia abajo
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 50) { // Mostrar el botón después de 300px de desplazamiento
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Desplazamiento suave al hacer clic en el botón
    document.getElementById('back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



// Escuchar el evento wheel (scroll del ratón) en el contenedor del carrusel
carouselContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); // Evita el scroll vertical por defecto
    carouselContainer.scrollLeft += e.deltaY; // Aplica el scroll horizontal
});

const carousel = document.querySelector('.carousel');
let isDragging = false;
let startX, scrollLeft;

// Captura el evento de scroll del ratón para mover el carrusel
document.querySelector('.carousel-container').addEventListener('wheel', (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
});
 document.addEventListener('DOMContentLoaded', () => {
    
// Inicia el arrastre
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

// Mueve el carrusel mientras se arrastra
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Desplazamiento más rápido
    carousel.scrollLeft = scrollLeft - walk;
});

// Detiene el arrastre
carousel.addEventListener('mouseup', () => {
    isDragging = false;
});

// Detiene el arrastre si el ratón sale del área del carrusel
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});
});