//intro
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1')

//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();

//scenes
const scene = new ScrollMagic.Scene({
  duration: 550,
  triggerElemnt: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//video animation
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

//easing effect on video with the accelAmount
setInterval(() => {
  delay += (scrollpos - delay) * accelAmount;
  video.currentTime = delay;
}, 416.1)
