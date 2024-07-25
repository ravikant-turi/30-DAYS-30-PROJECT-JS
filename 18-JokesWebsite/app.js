
const apiUrl=' https://hindi-jokes-api.onrender.com/jokes?api_key=eeca35e46c4164dce2016cfe9413'

const funnyImages = []

for(let i=1; i<=5; i++){
    funnyImages.push('image/' + i + '.jpg')
}

console.log(funnyImages)

const funnyImage=document.querySelector('#funnyImage')
console.log("image : " +funnyImage)

const joke=document.querySelector('#joke')

const jokesDiv=document.querySelector('.jokesDiv')

const loader=document.querySelector('#loader')

const error=document.querySelector('#error')


fetch(apiUrl)
.then(response=>
   response.json()

    
)
.then(data=>{
   
    jokesDiv.classList.remove('hidden')
    loader.classList.add('hidden')
    joke.innerHTML=data.jokeContent

    const index=Math.floor(Math.random()*4)
    funnyImage.src=funnyImages[index]
})
.catch(Error=>{
    loader.classList.add('hidden')
    error.innerHTML=Error
    error.classList.remove('hidden')
  
})