const box = document.querySelector('.box');

let boxY = box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight)

let isDisabled = true;

box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  
  if( isDisabled && boxHeight + scroll > boxY - 5 ) {
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }

})