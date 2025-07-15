const weatherName = document.querySelector('.weather > h3');
const weatherImg = document.querySelector('.weather > img');
const weatherTemp = document.querySelector('.temp');
const weatherDesc = document.querySelector('.desc');

function connectGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // console.log(`위도:${lat} 경도:${lon}`);
  const APIKEY = '66c8c034ba499f2284b9f07e02e51504';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })

}

function errorGeo() {
  alert('위치 정보 연결 실패')
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);