
const todoBox=document.querySelector('.todoBox')
console.log(todoBox)
const textInput=document.getElementById('input')
console.log(textInput.value)



function deleteTodo(event){
    var clickedElement = event.target;
    // console.log(event.target)
    // Find the parent element with the 'todo' class
    var todoElement = clickedElement.closest('.todo');

    // Remove the 'todo' class from the parent element
    if (todoElement) {
        todoElement.remove();
        // console.log('Removed todo:', todoElement);
    }
    
}
function updateTodo(event){
    console.log("updated")
}

function saveTodo(e){
  
  let html=  ` <div class="todo">
<p class="todoContent">${textInput.value}</p>
<button class="btn delete" onclick="deleteTodo(event)">Delete</button>
<button class="btn update" onclick="updateTodo(event)">update</button>
</div>
` 
todoBox.insertAdjacentHTML("beforebegin",html )
}
function addTodo(e){
       
       
    
        e.preventDefault()
        saveTodo(e);
 
    }