const items = document.querySelectorAll('.carousel-item');
    const total = items.length;
    let currentIndex = 0;

    function updateCarousel() {
      items.forEach((item, i) => {
        const relativeIndex = (i - currentIndex + total) % total;

        switch (relativeIndex) {
          case 0: // izquierda tralatrala
            item.style.transform = 'translate(-50%, -50%) translateX(-220px) scale(0.9) rotateY(30deg)';
            item.style.zIndex = 1;
            item.style.opacity = 0.6;
            break;
          case 1: // centro ñañañañañ
            item.style.transform = 'translate(-50%, -50%) translateX(0px) scale(1.2) rotateY(0deg)';
            item.style.zIndex = 3;
            item.style.opacity = 1;
            break;
          case 2: // derecha ñañañañ
            item.style.transform = 'translate(-50%, -50%) translateX(220px) scale(0.9) rotateY(-30deg)';
            item.style.zIndex = 2;
            item.style.opacity = 0.6;
            break;
          default: // fuera de escena fuga dijo la oruga
            item.style.transform = 'translate(-50%, -50%) scale(0.5)';
            item.style.opacity = 0;
            item.style.zIndex = 0;
        }
      });

      // Avanzar una imagen: de derecha hacia la izquierda
      currentIndex = (currentIndex + 1) % total;
    }

    updateCarousel();
    setInterval(updateCarousel, 3000);
