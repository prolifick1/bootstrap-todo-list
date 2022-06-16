const handleFormSubmit = (event) => {
  console.log(event)
  event.preventDefault() // this will prevent the default browser behavior (page refresh)

  
  // alternate way (without using FormData)
  
   let inputBox = event.target.elements[0]
   console.log(inputBox.value)
   // let input_box = evt.target.elements[0]
   // console.log(form.value)
  
  //let completeTodo = function(event) {
   // console.log('ok');
  //} 
  
  // showGreeting(nameElem.value)
  let liElement = document.createElement('li');
  let todoList = document.getElementById('todo-list');
  liElement.innerText = inputBox.value;
  liElement.setAttribute('onclick', 'completeTodo(event)') 
  todoList.appendChild(liElement);
  inputBox.value = ''; 
}

const completeTodo = function(event) {
  event.target.style.setProperty("text-decoration", "line-through");

}

//document.getElementById('input-form').addEventListener('submit', handleFormSubmit);
