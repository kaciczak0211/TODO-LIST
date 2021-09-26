//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const newTodo = document.querySelector(".new-todo");
//const todoitems = document.querySelector("body > div");
//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//todoitems = addEventListener('click', getUnique);
// ARRAYS
const array = [  ];





//Functions
function addTodo(event) {
    
    //Prevent form from submitting
    event.preventDefault();
    //Includes itemm
 
   
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Ceate LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //CLEAT TODO INPUT VALUE 

    //NEW ARRAY
   // const currentTodoItems = new Array();
    //const currentTodoItems = [todoInput.value];
    //currentTodoItems.push(todoInput.value);
    console.log(array.includes(todoInput.value));
    if(array.includes(todoInput.value) === true)
        alert("THIS VALUE EXIST") &&
        
    
  
    //console.log(currentTodoItems);
    array.push(todoInput.value);
    console.log(array);
    todoInput.value = "";
    
    

}

function deleteCheck(e){
    const item = e.target;
    // Delete TODO
    if (item.classList[0] === "trash-btn" ) 
     {
         const todo = item.parentElement;
         //Animation
         todo.classList.add("fall");
         todo.addEventListener('transitionend', function(){
             todo.remove();
         });
      
}
  

    //CHECK MARK
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                    if(todo.classList.contains('completed')){
                       todo.style.display = 'flex';

                    }else{
                        todo.style.display = "none";
                    }
                    break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";

                }else{
                        todo.style.display = "none";
                    }
                    break;
        }
    });

}
