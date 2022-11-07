let myTodo = ["Fixa TV-bänken", "Rensa kylen och frysen", "Sätta upp en spegel", "Köpa förvaring till skafferiet"];

for(let i = 0; i < myTodo.length; i++){

}
//Selectors
let todoInput = document.getElementById("todo-input");
let todoButton = document.getElementById("todo-btn");
let todoList = document.getElementById("todo-list");

//Event listener
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event){
    event.preventDefault();

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo__container");

    let newTodo = document.createElement("li");
    newTodo.classList.add("todo__item");

    todoDiv.appendChild(newTodo);

    let completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
    completedBtn.classList.add("todo__btnCompleted");
    todoDiv.appendChild(completedBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteBtn.classList.add("todo__btnDelete");
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
}
