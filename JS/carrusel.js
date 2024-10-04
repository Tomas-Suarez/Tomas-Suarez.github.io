let currentIndex = 0;
const items = document.getElementsByClassName('carousel-item');

function showItem(index) {
    // Ocultar todas las imágenes
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    // Mostrar la imagen actual
    items[index].classList.add('active');
}

function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    showItem(currentIndex);
}

// Iniciar el carrusel mostrando la primera imagen
showItem(currentIndex);
