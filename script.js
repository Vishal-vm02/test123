// Hero Carousel
(function () {
  function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.hero-carousel-prev');
    const nextBtn = document.querySelector('.hero-carousel-next');

    if (!slides.length || !prevBtn || !nextBtn) {
      return;
    }

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
      // Remove active class from all slides
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });

      // Add active class to current slide
      if (slides[index]) {
        slides[index].classList.add('active');
      }
      currentSlide = index;
    }

    function nextSlide(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    function prevSlide(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initialize first slide
    showSlide(0);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroCarousel);
  } else {
    initHeroCarousel();
  }
})();

// New Arrivals horizontal slider
(function () {
  const grid = document.querySelector('.new-arrivals-section .product-grid');
  const prev = document.querySelector('.new-arrivals-section .carousel-prev');
  const next = document.querySelector('.new-arrivals-section .carousel-next');

  if (!grid || !prev || !next) return;

  const scrollAmount = () => grid.clientWidth * 0.8;

  prev.addEventListener('click', () => {
    grid.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    grid.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
})();

// Mobile menu toggle
(function () {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
})();


