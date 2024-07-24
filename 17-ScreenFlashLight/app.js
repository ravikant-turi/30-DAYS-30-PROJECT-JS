const display=document.querySelector('.main')
 
const onOff=document.querySelector('.onOff')



console.log(onOff.innerHTML)
const handleScreenFlash=()=>{
    display.classList.toggle('flashOff')
    
    let text=onOff.innerHTML

    if(text==="ON"){

        onOff.innerHTML='Off'
    }
    else{
        onOff.innerHTML='ON'

    }

}
display.addEventListener('dblclick', handleScreenFlash)
console.log(onOff.innerHTML)