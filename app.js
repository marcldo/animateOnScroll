//intro
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const tag1 = intro.querySelector('#tag1')
const tag2 = intro.querySelector('#tag2')

//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();

//scenes
let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//text animation
const textAnimation = TweenMax.fromTo(tag1, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnimation)
  .addTo(controller);

//text animation
const textAnimation2 = TweenMax.fromTo(tag2, 3, { opacity: 1 }, { opacity: 0 });

let scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnimation2)
  .addTo(controller);

//video animation
let accelAmount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

//easing effect on video with the accelAmount
setInterval(() => {
  delay += (scrollpos - delay) * accelAmount;
  video.currentTime = delay;
}, 250)
