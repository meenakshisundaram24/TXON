function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var newTask = document.createElement("li");
    newTask.setAttribute("name", taskInput.value);
    var taskText = document.createTextNode(taskInput.value);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.className ="btn";
    deleteButton.setAttribute("id",taskInput.value);

    var editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));


    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    newTask.appendChild(editButton);
    taskList.appendChild(newTask);
    
    
    deleteButton.onclick=function()
    {
        if(confirm("Are you sure you want to delete the task?"))
        {
            var a= document.getElementById(deleteButton.id);
            a.parentElement.remove();
        }
    }

    editButton.onclick=function()
    {
        var newText=prompt("Enter new task : ",taskText.nodeValue);
        taskText.nodeValue=newText;
    }
    taskInput.value = "";
}

