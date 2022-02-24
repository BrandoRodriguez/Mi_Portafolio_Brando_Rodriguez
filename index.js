
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
  autoplay
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

// setInterval(function(){ nextt()}, 3000);


// 
const tiltEffectSettings = {
  max: 3, // max tilt rotation (degrees (deg))
  perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale:1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
};

const cards = document.querySelectorAll(".slider-hover");

cards.forEach(card => {
  card.addEventListener("mouseenter", cardMouseEnter);
  card.addEventListener("mousemove", cardMouseMove);
  card.addEventListener("mouseleave", cardMouseLeave);
});

function cardMouseEnter(event) {
  setTransition(event);
}

function cardMouseMove(event) {
  const card = event.currentTarget;
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const centerX = card.offsetLeft + cardWidth / 2;
  const centerY = card.offsetTop + cardHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  const rotateXUncapped = (+1) * tiltEffectSettings.max * mouseY / (cardHeight / 2);
  const rotateYUncapped = (-1) * tiltEffectSettings.max * mouseX / (cardWidth / 2);
  const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max :
      (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
  const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max :
      (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);

  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function cardMouseLeave(event) {
  event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  setTransition(event);
}

function setTransition(event) {
  const card = event.currentTarget;
  clearTimeout(card.transitionTimeoutId);
  card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
  }, tiltEffectSettings.speed);
}