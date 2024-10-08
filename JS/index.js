let currentIndex = 0;
        const items = document.getElementsByClassName('carousel-item');
        const totalItems = items.length;
        const intervalTime = 3000; // Tiempo en milisegundos (3 segundos)

        function showItem(index) {
            for (let i = 0; i < totalItems; i++) {
                items[i].classList.remove('active');
            }
            items[index].classList.add('active');
        }

        function moveCarousel(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = totalItems - 1;
            } else if (currentIndex >= totalItems) {
                currentIndex = 0;
            }
            showItem(currentIndex);
        }

        showItem(currentIndex);

        setInterval(() => {
            moveCarousel(1);
        }, intervalTime);