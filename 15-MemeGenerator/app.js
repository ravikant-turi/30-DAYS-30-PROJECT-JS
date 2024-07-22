const button=document.querySelector(".btn")


let memeImage=document.querySelector('#mameImage')

console.log(memeImage)

button.addEventListener('click' , generateMeme )

// button.onclick=()=>generateMeme()




const apiUrl='https://meme-api.com/gimme'

function generateMeme(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      memeImage.style.display="block"
      memeImage.src = data.url;
      console.log(data.url);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}