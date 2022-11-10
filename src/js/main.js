let todoList = document.getElementById("todo-list");
let todoBtn = document.getElementById("todo-btn");

todoBtn.addEventListener("click", addTodo);

//Klass med objekt
class Todo {
  constructor(todoName) {
    this.todoName = todoName;
    this.done = false;
  }
}

let firstTodo = new Todo("Fixa TV-bänken");
let secoundTodo = new Todo("Rensa kylen och frysen");
let thirdTodo = new Todo("Sätta upp en spegel");
let fourthTodo = new Todo("Köpa förvaring till skafferiet");
let fifthTodo = new Todo("Ta hand om utemöblerna");

let myTodos = [firstTodo, secoundTodo, thirdTodo, fourthTodo, fifthTodo];

//for loop för min todos
function createHtml() {
    // saveToLs();
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
    //   todoLi.classList.toggle("complited");
      console.log(myTodos);
      myTodos[i].done = !myTodos[i].done;
      createHtml();
    }
  }
}

function removeItem(removeItem) {
    //   todoLi.remove();
      console.log(myTodos);
      myTodos.splice(removeItem, 1);
      createHtml();
    }

createHtml();

//funktion för min input knapp//
function addTodo() {
  todoList.innerHTML = "";

  let todoInput = document.getElementById("todo-input");
  let newItem = new Todo(todoInput.value);
  todoInput.value = "";

  myTodos.push(newItem);

  localStorage.setItem("myTodos", JSON.stringify(myTodos));
  createHtml();
}



