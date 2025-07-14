document.querySelector('a').addEventListener('click', (e) => {
  
  // 기본동작 막아줌
  e.preventDefault();

  console.log('aaaaa');
})

document.querySelector('p')
        .addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('ㅋㅋㅋ');
})

document.querySelector('p')
        .addEventListener('selectstart', (e) => {
  e.preventDefault();
    
})