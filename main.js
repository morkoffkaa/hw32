const sliderLine = document.querySelector(".slider-line");

offset = 0;

const buttonNext = document.querySelector(".slider-next");

console.log(buttonNext);
buttonNext.addEventListener("click", function() {
    offset = -offset + 256;
    if (offset > 768) {
      offset=0;  
    }
    sliderLine.style.left = offset + "px";
});


