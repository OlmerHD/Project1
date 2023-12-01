

//scroll reveal

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });



//carrusel

const carouselImages = document.querySelector('.carousel-images');

let counter = 0;
const imageSize = document.querySelector('.carousel-images img').clientWidth;
const totalImages = carouselImages.children.length;

function nextSlide() {
    if (counter < totalImages - 1) {
        counter++;
    } else {
        counter = 0;
    }
    carouselImages.style.transform = `translateX(${-counter * imageSize}px)`;
}

setInterval(nextSlide, 3000);
