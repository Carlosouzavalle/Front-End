
const banners = document.querySelector('.banners');
const slides = document.querySelectorAll('.banners div');
const next = document.querySelector('.btn_next button');
const prev = document.querySelector('.btn_prev button');

const slideWidth = slides[0].offsetWidth + 15; // largura + gap
const containerWidth = document.querySelector('.banners_container').offsetWidth;

const visibleSlides = Math.floor(containerWidth / slideWidth);
const maxIndex = slides.length - visibleSlides;

let index = 0;

function updateCarousel() {
    banners.style.transform = `translateX(-${index * slideWidth}px)`;
}

next.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
    } else {
        index = 0; // 🔁 volta pro início
    }
    updateCarousel();
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = maxIndex; // 🔁 vai pro final
    }
    updateCarousel();
});

