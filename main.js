import './style.css'

let ownClientID = 'v1S5Sma8reiXZd8lYNzLzoFwpgezPjgDxKb04XR32rk';
let testClientID = 'gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k';

let button = document.getElementById('fetch-button');

button.addEventListener('click', () => {
  console.log('button Clicked!');
  for (let i = 0; i < 5; i++) {
    // USING ANOTHER CLIENT ID since mine is not working ok
  fetch(`https://api.unsplash.com/photos/random/?query=a banana&client_id=${testClientID}`)
      .then(res => res.json())
      .then(res => {
        let image = document.createElement('img');
        console.log(res.alt_description);
        image.width = '300';
        image.height = '300';
        image.style.objectFit = 'cover';
        image.src = res.links.download;
        document.body.appendChild(image)
      })
  }
})


document.querySelector('#app').innerHTML = `
  <div>
    VITE
  </div>
`
