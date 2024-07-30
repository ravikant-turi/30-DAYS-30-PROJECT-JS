

const input=document.querySelector('#inputbox')

let buttons=document.querySelectorAll('button')


let string=""

let arr=Array.from(buttons);

// console.log(arr)

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
       
        if(e.target.innerText==='=' ){

            try{

                string=eval(string)
            }
            catch(e){
               console.log(e)
            }

            input.value=string
            // console.log(input.value)
        }

        else if(e.target.innerText === 'AC'){
            string=""
            input.value=""
        }
        else if(e.target.innerText=="DEL"){
            
            string=string.substring(0,string.length-1)
            input.value=string
        }
       else{

           string+=e.target.innerText
           input.value=string
        }
    })
})