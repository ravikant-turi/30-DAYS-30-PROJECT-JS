const factText=document.querySelector("#facts")
console.log(factText)
const api='https://cat-fact.herokuapp.com/facts'
const api1='/api/spacecrafts'

var index=0;
function show(){
    fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data[index].text);
      factText.innerText=data[index].text
      index++;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }