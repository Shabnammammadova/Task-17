const todoinputElement = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const liElement = document.querySelector(".li-element");

function inputSection(){
    if(todoinputElement !== "" ){
       const pElement = document.createElement("p") ;
       pElement.textContent = todoinputElement.value;
       liElement.append(pElement)
    }
}

todoinputElement.addEventListener("keyup" , ()=>{
inputSection();
})