const todoinputElement = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const liElement = document.querySelector(".li-element");
const checkBtn = document.querySelector(".checkbtn");
// const pElement = document.getElementsByTagName("p");
const deleteBtn= document.querySelector(".delete-btn");


function inputSection(){
    if(todoinputElement.value.trim() !== "" ){
    const ulElement = document.createElement("ul");
    const liListItem = document.createElement("li");
    liListItem.classList.add("li-element");
    liListItem.innerHTML = `
    <div class="view">
    <div class="todo-text">
    <button class="checkbtn">
    <span class="check-icon open">
     ✓
    </span>
    </button>
        <p>${todoinputElement.value}</p>
    </div>
    <button class="delete-btn">x</button>
    </div>   `
       ulElement.appendChild(liListItem);
       todoList.appendChild(ulElement);
       
      
    }
}

todoinputElement.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        inputSection();
        resetInput()
    }
})

function resetInput(){
    todoinputElement.value = ""
}


checkBtn.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkbtn")) {
        const checkIcon = event.target.querySelector(".check-icon");
        checkIcon.classList.toggle("open");
       
    }
});

todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.closest(".li-element");
        listItem.remove();
    }
});