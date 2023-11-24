const inputdata = document.getElementById("input-box");
const listcontainer = document.getElementById("list-box");

function addTask(){
                     if(inputdata.value === ''){
                        alert("You must add one task");
                     }
                     else{
                           let li = document.createElement("li");
                           li.innerHTML = inputdata.value;
                           listcontainer.appendChild(li);
                           let delbtn = document.createElement("button");
                           delbtn.innerHTML = "Delete";
                           li.appendChild(delbtn)
                     }
                     inputdata.value = '';
                     saveTasks();
}

listcontainer.addEventListener("click", function(e){
        
                if(e.target.tagName === "LI"){
                    e.target.classList.toggle("checked");
                    saveTasks();
                }
                else if(e.target.tagName === "BUTTON"){
                    e.target.parentElement.remove();
                    saveTasks();
                }
}, false)

function saveTasks(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function displayTasks(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

displayTasks();