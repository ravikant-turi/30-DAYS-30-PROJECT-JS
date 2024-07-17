// const textArea=document.querySelector('.textArea')

// function checkText(e){

//     e.preventDefault()
//      let str=textArea.value;
//      console.log((str))


     
// }


const axios = require('axios');

const API_KEY = 'your-api-key-here';
const API_URL = 'https://api.openai.com/v1/completions';

const prompt = 'Once upon a time';

const data = {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 50,
};

axios.post(API_URL, data, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})
.then(response => {
    console.log(response.data.choices[0].text);
})
.catch(error => {
    console.error('Error:', error);
});
