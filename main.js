const sliderLine = document.querySelector('.slider-line');
const images = document.querySelectorAll('.img');
const prevBtn = document.querySelector('.slider-back');
const nextBtn = document.querySelector('.slider-next');

let counter = 0;
const size = images[0].clientWidth;

sliderLine.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    sliderLine.style.transition = 'transform 0.4s ease-in-out';
    sliderLine.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (counter === images.length - 1) {
        nextBtn.style.display = 'none';
    }
    if (counter !== 0) {
        prevBtn.style.display = 'block';
    }
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    sliderLine.style.transition = 'transform 0.4s ease-in-out';
    sliderLine.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (counter === 0) {
        prevBtn.style.display = 'none';
    }
    if (counter !== images.length - 1) {
        nextBtn.style.display = 'block';
    }
});
