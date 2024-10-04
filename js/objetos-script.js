function toggleTexto(boton) {
    const contenidoMas = boton.previousElementSibling;

    if (contenidoMas.style.display === "none" || contenidoMas.style.display === "") {
      contenidoMas.style.display = "block";
      boton.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'; // Cambia a flecha hacia arriba
    } else {
      contenidoMas.style.display = "none";
      boton.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'; // Cambia a flecha hacia abajo
    }
  }


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