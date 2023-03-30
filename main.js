const sliderLine = document.querySelector(".slider-line");

let offset = 0;

const buttonNext = document.querySelector(".slider-next");
buttonNext.addEventListener("click", function() {
  offset = offset - 256;
  if (offset < -768) {
    offset = 0; 
    buttonNext.style.display = "none";
    buttonBack.style.display = "block";
  }
  sliderLine.style.left = offset + "px";
});

const buttonBack = document.querySelector(".slider-back");
buttonBack.addEventListener("click", function() {
  offset = offset + 256;
  if (offset > 0) {
    offset = -768;
    buttonBack.style.display = "none"; 
    buttonNext.style.display = "block";
  }
  sliderLine.style.left = offset + "px";
});
