let todoList = [
  {item:'first',dueDate:'04/10/2024'},
  {item:'second',dueDate:'04/10/2024'}
];

displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let DateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = DateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  DateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for(i=0; i<todoList.length; i++){
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    // let {item, dueDate} = todoList[i];//Destructuring 9same as above)
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button  class="btn-delete" onclick="todoList.splice(${i},1);
    displayItems(); 
    ">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}