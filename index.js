const todoInput = document.querySelector('.todo-input');
const addTodoButton = document.querySelector('.add-todo');
const list = document.querySelector('.list');



function addTodo(event) {
 event.preventDefault();
  //div
  const todo = document.createElement('div');
  todo.classList.add('todo');

 
  //Li
  const newTodo = document.createElement('li');
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add('todo-item');
  todo.appendChild(newTodo)
  

  // button
  const buttoncheck = document.createElement('button');
  buttoncheck.type = 'button';
  buttoncheck.classList.add('check-todo');
  buttoncheck.innerHTML = '<i class="fas fa-check"></i>';
  buttoncheck.addEventListener('click', check);
  todo.appendChild(buttoncheck)

  const buttonremove = document.createElement('button');
  buttonremove.type = 'button';
  buttonremove.classList.add('remove-todo');
  buttonremove.innerHTML = '<i class="fas fa-trash"></i>';
  buttonremove.addEventListener('click', removeTodo);
  todo.appendChild(buttonremove)


  //append
  list.prepend(todo);


  //clear input
  todoInput.value="";
}

function keyboardEvent(event){
  if(event.key === "Enter"){
    addTodo();
  }
 
}

function removeTodo(event) {
  event.target.parentNode.remove();

}

function check(event){
  event.target.parentElement.classList.toggle("completed");



}




addTodoButton.addEventListener('click', addTodo);
document.addEventListener("keyup", keyboardEvent);
