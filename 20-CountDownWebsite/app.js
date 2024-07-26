
const days=document.querySelector('#days')


const quote=document.querySelector('.quote')
// const api='http://zenquotes.io/api/today'

let today=new Date()


let currentYear=today.getFullYear()


let nextYear=new Date(currentYear+1,0,1)


let milliSecondInADay=24*60*60*1000


let dayLeft=Math.floor( (nextYear-today)/milliSecondInADay )



days.innerText=dayLeft
const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4e8f4e97fbmshef684590adf91e2p13d77fjsn771eb52a4d0a',
		'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};

// Define an async function to use await inside
// async function fetchQuote() {
// 	try {
// 		const response = await fetch(url, options); // Fetch data from API
// 		const result = await response.json(); // Parse response as text
// 		console.log(result); // Log the result
       
//         quote.innerText=result.text;
        
// 	} catch (error) {
// 		console.error(error); // Log any errors
// 	}
// }

// Call the async function to execute the fetch operation
// fetchQuote();


