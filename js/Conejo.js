function startSlider(sliderId, interval) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll("img");
    let current = 0;

    setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, interval);
  }

  // Iniciar sliders independientes
  startSlider("sliderTop", 3000);
  startSlider("sliderLeft", 4000);
  startSlider("sliderRight", 5000);