
const days=document.querySelector('#days')


const quote=document.querySelector('.quote')


const loader=document.querySelector('.loader')

const countdown=document.querySelector('.countdown')

let today=new Date()


let currentYear=today.getFullYear()


let nextYear=new Date(currentYear+1,0,1)


let milliSecondInADay=24*60*60*1000


let dayLeft=Math.floor( (nextYear-today)/milliSecondInADay )

days.innerText=dayLeft


fetch('https://api.quotable.io/random')

  .then(res => res.json())

  .then(data => {
   loader.classList.add('hidden')
   countdown.classList.remove('hidden')
    quote.innerText=data.content
    console.log(data.content)})

  .catch(error => console.error('Error:', error));





















