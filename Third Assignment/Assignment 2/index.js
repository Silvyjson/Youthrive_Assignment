function addTask() {
    let inputField = document.getElementById("task-input");
    let taskText = inputField.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    let list = document.getElementById("task-list");
    let newTask = document.createElement("li");
    newTask.classList.add("task-item");
  
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
      toggleTaskCompletion(this);
      changeColor(this.nextSibling);
    };
  
    let label = document.createElement("span");
    label.textContent = taskText;
  
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    list.appendChild(newTask);
  
    inputField.value = "";
  }
  
  function toggleTaskCompletion(checkbox) {
    let label = checkbox.nextSibling;
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  }
  
  function changeColor(label) {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    label.style.color = color;
  }