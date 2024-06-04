const todoinputElement = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const liElement = document.querySelector(".li-element");
const checkbox = document.querySelector('.toggle');
const labelElement = document.querySelector('.label-element');
const deleteBtn= document.querySelector(".delete-btn");


function inputSection(){
    if(todoinputElement.value.trim() !== "" ){
    const ulElement = document.createElement("ul");
    const liListItem = document.createElement("li");
    liListItem.classList.add("li-element");
    liListItem.innerHTML = `
    <div class="view">
    <div class="todo-text">
    <input class="toggle" type="checkbox">
    <label class="label-element">${todoinputElement.value}</label>

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

checkbox.addEventListener("change", function() {
    if (this.checked) {
        labelElement.classList.add("checked");
    } else {
        labelElement.classList.remove("checked");
    }
});

todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.closest(".li-element");
        listItem.remove();
    }
});

