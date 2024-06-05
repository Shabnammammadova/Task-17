const todoinputElement = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const liElement = document.querySelector(".li-element");
const checkbox = document.querySelector('.toggle');
const labelElement = document.querySelector('.label-element');
const deleteBtn= document.querySelector(".delete-btn");
const iconImg = document.querySelector(".iconimg");
const clearBtn = document.querySelector(".clear-btn")
const completedBtn =document.querySelector(".completed-btn")
const activeBtn = document.querySelectorAll(".li-active");
const spanItemsElement = document.querySelector(".span-items");
const allClick = document.getElementById("allclick");
const activeClick = document.getElementById("activeclick");
const completedClick = document.getElementById("completedclick");


alltaskLocaladded()

function inputSection(){
    if(todoinputElement.value.trim() !== "" ){
    const ulElement = document.createElement("ul");
    const liListItem = document.createElement("li");
    liListItem.classList.add("li-element");
    liListItem.innerHTML = `
    <div class="view">
    <div class="todo-text">
    <input class="toggle" type="checkbox">
    <label for="Checkboxelement" class="label-element">${todoinputElement.value}</label>
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
        saveTodo();
        resetInput();
    }
})

function resetInput(){
    todoinputElement.value = "";
   
}

todoList.addEventListener("change", (event) => {
    if (event.target.classList.contains("toggle")) {
        const labelElement = event.target.nextElementSibling;
        if (event.target.checked) {
            labelElement.classList.add("checked");
        } else {
            labelElement.classList.remove("checked");
        }
        saveTodo()
    }
});

todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.closest(".li-element");
        listItem.remove();
    }
});


iconImg.addEventListener("click", () => {
    const liElements = document.querySelectorAll(".li-element");
    const allChecked = Array.from(liElements).every(li => li.querySelector(".toggle").checked);
    liElements.forEach(li => {
        const checkbox = li.querySelector(".toggle");
        const label = li.querySelector(".label-element");
        checkbox.checked = !allChecked;
        if (!allChecked) {
            label.classList.add("checked");
        } else {
            label.classList.remove("checked");
        }
    });
    saveTodo()
});

clearBtn.addEventListener("click", ()=>{
   const allCheckElement = document.querySelectorAll(".li-element .completed")
   if(!allCheckElement){
    liElement.remove()
   }
   saveTodo();
})

function saveTodo(){
   let todos = [];
   todoList.querySelectorAll("li").forEach(function(item){
   todos.push(item.textContent.trim())
   });
   localStorage.setItem("todo",JSON.stringify(todos))
}

function alltaskLocaladded(){
    const todo = JSON.parse(localStorage.getItem('todo')) || [];
    todo.forEach(inputSection)
}

function deleteTodo(){
    saveTodo();
}
activeBtn.forEach(btn => {
    btn.addEventListener("click", function(event) {
        const active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active");
        }
        this.classList.add("active");
       event.preventDefault()
    });
});

function spanItem(){
    if(todoinputElement.value != ""){
        const count =  parseInt(spanItemsElement.textContent);
       
        spanItemsElement.textContent = count
    }
}

allClick.addEventListener("click",()=>{
    const liElements = document.querySelectorAll(".li-element");
    liElements.forEach(li=>{
       li.style.display = "block"
        
    })
})

activeClick.addEventListener("click",()=>{
    const liElements = document.querySelectorAll(".li-element");
    liElements.forEach(li=>{
        const checkbox = li.querySelector(".toggle");
        const label = li.querySelector(".label-element");
        if (label.classList.contains("completed")) {
            li.style.display = "block";
        } 
        else if(!checkbox.checked){
            li.style.display = "block";
        }
        else{
            li.style.display = "none"
        }
    })
})

completedClick.addEventListener("click", () => {
    const liElements = document.querySelectorAll(".li-element");
    liElements.forEach(li => {
        const checkbox = li.querySelector(".toggle");
        if (checkbox.checked) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
});