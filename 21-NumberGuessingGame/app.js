

const buttons = document.querySelectorAll('.numberButton')


const result = document.querySelector('.result')

buttons.forEach((button) => button.addEventListener('click', (e) => {
    checkAnswer(e)
}))

function generateNumber() {
    return Math.floor(Math.random() * 6 + 1)
}


function dissableButton(option) {
    buttons.forEach((button) => {
      
        button.disabled = option 
    })
}

function reset(e) {
    dissableButton(false)
    buttons.forEach((button) => {
        button.classList.remove('win')  
        
    })

}

function setColorOnCorrectAnsButton(number) {

    buttons.forEach((button) => {
        //    console.log(button.innerText + " " + number + " : " + Number(button.innerText)===Number)
        if (Number(button.innerText) === number) {
            button.style.backgroundColor = 'green'

            // button.classList.add('loss')


        }

    })


}

function playerWinnigMessage(e, number) {
    if (number === Number(e.target.innerText)) {
        result.innerText = " you win" + " ans is : " + number
        return;
    }
    return result.innerText = " you losses" + " ans is : " + number
}

function checkAnswer(e) {

    const number = generateNumber()
    
    const userChosenNumber = Number(e.target.innerText)
    
    setColorOnCorrectAnsButton(number)
    if (number === userChosenNumber) {
        
        e.target.classList.toggle('won')
        
    }
    
    else {
        console.log("lsot" + number)
        
        e.target.classList.toggle('loss')
    }
    playerWinnigMessage(e, number)
    dissableButton(true)
    reset(e)

}


