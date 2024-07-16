const addCardForm = document.querySelector('.addCardForm')
// console.log(addCardForm)

const noteText = document.querySelector('#noteText')
// console.log(noteText)


const mainContainer = document.querySelector('.main')


const addCard = document.querySelector('.addCard')

// console.log(addCard)
const mainCard = document.querySelector('.mainCard')
// console.log(stickyNotes)

let notes = []


function addNote() {
    console.log("add Note")
    addCardForm.classList.remove('hideElement')
    addCard.classList.add('hideElement');
}
function removeNote(noteName) {

    notes = notes.filter((note) => note != noteName)
    createNotes()
}

function createNotes() {

    notes.reverse()
    mainCard.innerHTML = ''

    notes?.map((note, index) => {
        let html =
            ` <div class="noteCard card " id='${index}'>

         <h1 class="note">'${note}'</h1>

        <button class="closebutton" onclick="removeNote(${note})">X</button>
        
      </div>`


        mainCard.insertAdjacentHTML('afterbegin', html)
    })



}

function submitNote(e) {

    e.preventDefault()

    notes.push(noteText.value)
    noteText.value = ""

    createNotes()

    addCardForm.classList.add('hideElement')
    addCard.classList.remove('hideElement');



}
