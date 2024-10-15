let input = document.getElementById("input")
let addBtn = document.getElementById("addBtn")
let todo = document.getElementById("todoList");


let editTodo = null;
function addList(){
    if(input.value === ""){
        alert("Enter the Text!")
        return false
    }
    if(addBtn.value === "edit"){
        editTodo.target.previousSibling.innerHTML = input.value
        addBtn.value = "add";
        input.value = ""
        

    }else{

        let newLi = document.createElement("li");
        let p = document.createElement("p");
        // newLi.innerHTML = input.value;
        p.innerHTML = input.value;
        newLi.appendChild(p)
        input.value = "";

        let editBtn = document.createElement("button");
        editBtn.classList.add("editBtn","btn")
        editBtn.innerText = "edit"
        newLi.appendChild(editBtn)

        
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn", "btn")
        removeBtn.innerText = "remove"
        newLi.appendChild(removeBtn)

        todo.appendChild(newLi  )
    }

}

function updateTodo(e){
    if(e.target.innerText === "remove"){

        e.target.parentElement.remove()
    }else if(e.target.innerText === "edit"){
        input.value = e.target.previousSibling.innerText;
        input.focus();
        addBtn.value = "edit";
        editTodo = e;
    }
    
    
 }

addBtn.addEventListener("click", addList);
todo.addEventListener("click", updateTodo);

