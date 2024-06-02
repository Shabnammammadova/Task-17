const todoinputElement = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const liElement = document.querySelector(".li-element");

function inputSection(){
    if(todoinputElement !== "" ){
    const ulElement = document.createElement("ul");
    const liListItem = document.createElement("li");
    liListItem.classList.add("li-element");

    liListItem.innerHTML = `
    <div class="view">
    <div class="todo-text">
        <div class="check-btn"></div>
        <p>${todoinputElement.value}</p>
    </div>
    <button class="delete-btn">x</button>
    </div>   `
       ulElement.appendChild(liListItem);
       todoList.appendChild(ulElement);
       console.log(ulElement);
      
    }
}

todoinputElement.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        inputSection();
    }
})

function resetInput(){
    todoinputElement.value === ""
}
