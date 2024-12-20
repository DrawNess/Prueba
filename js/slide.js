// Selección de elementos
const slider = document.querySelector('.presentation-slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentIndex = 0;
let slideInterval;

// Función para mover el slider
function moveSlide(step) {
  clearInterval(slideInterval); // Pausar el ciclo automático
  currentIndex = (currentIndex + step + totalSlides) % totalSlides; // Evitar índices fuera de rango
  updateSliderPosition();
  startAutoSlide(); 
}

// Posicion
function updateSliderPosition() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Iniciar el ciclo automático
function startAutoSlide() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000); // Tiempo de recarga
}

startAutoSlide();
