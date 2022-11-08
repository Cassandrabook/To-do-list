let todoList = document.getElementById("todo-list");
let todoBtn = document.getElementById("todo-btn");

function addTodo(todos){
    let todoInput = document.getElementById("todo-input");
    new Todo(todoInput.value);
    console.log(todoInput.value);
    //Clear todo input value
    todoInput.value = "";
}

todoBtn.addEventListener("click", addTodo);


//Klass med objekt
class Todo {
    constructor(todoname){
        this.todoname = todoname;
    }
}

let firstTodo = new Todo("Fixa TV-bänken");
let secoundTodo = new Todo("Rensa kylen och frysen");
let thirdTodo = new Todo("Sätta upp en spegel");
let fourthTodo = new Todo("Köpa förvaring till skafferiet");
let fifthTodo = new Todo("Ta hand om utemöblerna");

let myTodos = [firstTodo, secoundTodo, thirdTodo, fourthTodo, fifthTodo];

//for loop för min todos
for(let i=0; i < myTodos.length; i++){

    let todoLi = document.createElement("li");
    todoLi.classList.add("todo__item")
    todoLi.innerHTML = myTodos[i].todoname;

    todoList.appendChild(todoLi);

    let completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
    completedBtn.classList.add("todo__btnCompleted");
    todoList.appendChild(completedBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteBtn.classList.add("todo__btnDelete");
    todoList.appendChild(deleteBtn);

} 

