const listContainer = document.getElementById("list-container")
const inputBox = document.getElementById("input-box")

function AddTask(){
    if(inputBox.value === ""){
        alert("Please Enter any Task here Buddy!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }

})

inputBox.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        e.preventDefault();

        document.getElementById("Btn").click();
    }
})

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function display(){
    listContainer.innerHTML = localStorage.getItem("data");
}

display();