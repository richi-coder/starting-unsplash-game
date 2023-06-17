import './style.css'

let ownClientID = 'v1S5Sma8reiXZd8lYNzLzoFwpgezPjgDxKb04XR32rk';
let testClientID = 'gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k';

let button = document.getElementById('fetch-button');
let container = document.getElementById('container')
const query = 'mouse pc'

button.addEventListener('click', async() => {
  console.log('button Clicked!');
    // USING ANOTHER CLIENT ID since mine is not working ok
  const res = await fetch(`https://api.unsplash.com/search/photos/?per_page=5&query=${query}&client_id=${testClientID}`)
  const data = await res.json()
  data.results.map(image => {
    let newImage = document.createElement('img');
    newImage.src = image.urls.regular;
    newImage.style.width = '300px';
    container.appendChild(newImage)
  })
})

