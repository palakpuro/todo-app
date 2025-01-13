let todoList = [
  {
    item:'Buy Milk',
     dueDate: '4/10/2023'
  },
  {
    item:'Buy Milk',
     dueDate: '4/10/2023'
  }
];
displayItems();
function addTodo(){
let inputElement = document.querySelector('#todo-input');
let todoItem = inputElement.value;
let dateElement = document.querySelector('#todo-date');
let todoDate = dateElement.value;
//  console.log(todoItem);
todoList.push(
{
  item: todoItem ,
  dueDate: todoDate
});
 inputElement.value='';
 dateElement.value='';
 displayItems();
}
function displayItems(){
  let containerElement = document.querySelector('.todocontainer');
  let newHtml='';
  for(let i=0;i<todoList.length;i++){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let{item,dueDate}= todoList[i];
   newHtml += `
   
   <span>${item}</span>
      <span>${dueDate}</span>
   <button class="btn-delete" onclick="todoList.splice(${i},1);
   displayItems();">Delete</button>
    `;     
  }
  containerElement.innerHTML = newHtml;
}

