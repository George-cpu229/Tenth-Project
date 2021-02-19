//1.Set DOM value
const form = document.getElementById("form"); 
const input = document.getElementById("input"); 
const todosUl =  document.getElementById("todos");
//16.Create DOM manipulation using todos for connection with localStorage
const todos = JSON.parse(localStorage.getItem('todos'));
//17.Then I attach every todos to storage
if(todos) {
    todos.forEach(todo => {
        addTodo(todo)
    });
}

//2.Set value to submit in order not to stay in default position
form.addEventListener("submit", (e) => {
 e.preventDefault();
 //9.Type addTodo function here
addTodo();

});

//8.Add function in order to nest params. below
//18.Take this params. to addTodo
function addTodo(todo){
    //3.Also I set a value which I typed in placeholder
 let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

//4.Then I type if statement for getting  a new list if I write a todo note
 if(todoText){
 const todoEl = document.createElement("li");
 //19.Then I fix them in this if statement, fater that I know that every information will be completed if I mark it.
 if(todo && todo.completed){
 todoEl.classList.add('completed');
 }
 //20.Attachment between the todos and JSON.stings
 todoEl.innerText = todoText;
//6.Add function to strike our words with lines
 todoEl.addEventListener('click', () => {
     todoEl.classList.toggle('completed');

//15.Using the value in order to turn on the true/false complete
     updateLS();
 });
//7.Set a value to these points in order to remove them
todoEl.addEventListener('contextmenu', (e) =>{
    e.preventDefault();
    
    todoEl.remove();

    //15.Using the value in order to turn on the true/false complete
    updateLS();
});

 todosUl.appendChild(todoEl);

 //5. Set a null value on the textcreator when I submit previous text
 input.value = '';
//15.Using the value in order to turn on the true/false complete
 updateLS();
 }
}

//10. For getting in database applications I must create this function

function updateLS() {
    //11. Take a DOM detalisation
    const todosEl = document.querySelectorAll('li');
    //12.Default position is null array
    const todos = [];
    //13. This function make for every todonote attach to LocalStorage data
     todosEl.forEach((todoEl) => {
         todos.push({
             text: todoEl.innerText,
             completed: todoEl.classList.contains('completed'),
         });
     });
     //14.This is possibility to see information using stringify from JSON
     localStorage.setItem("todos", JSON.stringify(todos));
}
