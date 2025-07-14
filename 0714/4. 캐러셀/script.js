const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const carousel = document.querySelector('.carousel');

btn2.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-100vw)'
})