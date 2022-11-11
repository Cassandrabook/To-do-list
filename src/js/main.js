import { Todo } from "./models/todo";

let todoList = document.getElementById("todo-list");
let todoBtn = document.getElementById("todo-btn");
let todoInput = document.getElementById("todo-input");

todoBtn.addEventListener("click", addTodo);

let firstTodo = new Todo("Fixa TV-bänken");
let secoundTodo = new Todo("Rensa kylen och frysen");
let thirdTodo = new Todo("Sätta upp en spegel");
let fourthTodo = new Todo("Köpa förvaring till skafferiet");
let fifthTodo = new Todo("Ta hand om utemöblerna");

let myTodos = [firstTodo, secoundTodo, thirdTodo, fourthTodo, fifthTodo];

function createHtml() {
    todoList.innerHTML = "";

  for (let i = 0; i < myTodos.length; i++) {
    let todoLi = document.createElement("li");
    todoLi.classList.add("todo__item");
    todoLi.innerHTML = myTodos[i].todoName;

    if(myTodos[i].done === true) {
        todoLi.classList.toggle("complited");
    }

    todoList.appendChild(todoLi);

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo__btnContainer");
    todoLi.appendChild(todoDiv);

    let completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
    completedBtn.classList.add("todo__btnCompleted");
    todoDiv.appendChild(completedBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteBtn.classList.add("todo__btnDelete");
    todoDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        removeItem(i);
    });

    completedBtn.addEventListener("click", () => {
        checkItem(i);
    });

    function checkItem() {
      console.log(myTodos);
      myTodos[i].done = !myTodos[i].done;
      localStorage.setItem("myTodos", JSON.stringify(myTodos));
      createHtml();
    }
  }
}

function removeItem(removeItem) {
      myTodos.splice(removeItem, 1);
      localStorage.setItem("myTodos", JSON.stringify(myTodos));
      createHtml();
    }

createHtml();

function addTodo(e) {
    e.preventDefault();
    let newItem = new Todo(todoInput.value);

  if(todoInput.value === ""){
    alert("OBS! Du måste fylla i rutan med text");
  }else{
  myTodos.push(newItem);
  createHtml();
  localStorage.setItem("myTodos", JSON.stringify(myTodos));
  todoInput.value = "";
  }
}

const getTodoFromLs = ()=>{
    myTodos = JSON.parse(localStorage.getItem("myTodos"));
    createHtml();
}

window.addEventListener("DOMContentLoaded", getTodoFromLs);