
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

let slide = document.querySelectorAll('.slide-containe');
let indexx = 0;

function nextt(){
  slide[indexx].classList.remove('active');
  indexx = (indexx + 1) % slide.length;
  slide[indexx].classList.add('active');
}

function preve(){
  slide[indexx].classList.remove('active');
  indexx = (indexx - 1 + slide.length) % slide.length;
  slide[indexx].classList.add('active');
}

