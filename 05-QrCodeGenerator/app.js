const qrImage = document.getElementById("qrImage")
const inputText = document.getElementById("inputText")
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data='

function generateQR(e){
    e.preventDefault()
    let userText = inputText.value
    qrImage.src = api + userText
    qrImage.style.display = 'block'
    qrImage.style.transition = 'width 10s ease'
    qrImage.style.width = '80%'
    inputText.value =  ''
}

