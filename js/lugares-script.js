    // Mostrar la flecha cuando se desplaza hacia abajo
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) { // Mostrar el botón después de 300px de desplazamiento
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