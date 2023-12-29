const taskInput = document.getElementById("task-input");
const tasks = document.getElementById("tasks");

$("#btnAdd").click(function (e) {
    if (taskInput.value.length > 0) {

        e.preventDefault()
        const list = document.createElement("li");
        const task = document.createElement("span");
        const btnDelete = document.createElement("button");
        const btnDone = document.createElement("button");
        task.classList.add("content");
        task.innerText = $("#task-input").val();
        btnDelete.classList.add("delete");
        btnDelete.innerText = "Delete";
        btnDone.classList.add("done");
        btnDone.innerText = "Done";

        list.appendChild(task);
        list.appendChild(btnDone);
        list.appendChild(btnDelete);
        tasks.appendChild(list);
        btnDelete.addEventListener("click",function(){
            tasks.removeChild(list);
        })
        btnDone.addEventListener("click", function () {
            const span = list.querySelector(".content")
            span.style.color = "#ffffff";
            span.style.textDecoration = "line-through";
            list.style.background="#707070";
            btnDelete.style.background="#707070";
            btnDone.style.background="#707070";
        })

        taskInput.value = ""
        taskInput.focus();
    }else{
        e.preventDefault();
    }

});