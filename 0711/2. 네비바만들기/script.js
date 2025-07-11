const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');

btn.addEventListener( 'click', () => {

  // js
  list.classList.toggle('show');
  // jQuery
  // $('.list-group').toggleClass('show');

});

// const liTags = document.querySelectorAll('.list-group-item');

// for(let i=0; i<liTags.length; i++) {
  
//   liTags[i].addEventListener('click', () => {
//     alert('ㅋㅋㅋㅋㅋ');
//   });

// }

$('.list-group-item').on('click', () => {
  alert('ㅋㅋㅋ');
})
