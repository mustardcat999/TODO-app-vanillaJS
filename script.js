const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const totalTasks = document.querySelector("#total-tasks");

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  const taskId = Date.now();
  const li = document.createElement("li");
  li.dataset.id = taskId;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", toggleChecked);

  const span = document.createElement("span");
  span.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteTask);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  input.value = "";
  input.focus();

  updateTotalTasks();
}

function deleteTask(event) {
  const li = event.target.closest("li");
  if (!li) return;

  li.remove();

  updateTotalTasks();
}

function toggleChecked(event) {
  const li = event.target.closest("li");
  if (!li) return;

  li.classList.toggle("checked");
}

function updateTotalTasks() {
  const count = todoList.children.length;
  totalTasks.innerText = `Total tasks: ${count}`;
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

todoList.addEventListener("click", function(event) {
  const deleteBtn = event.target.closest("button");
  if (deleteBtn) {
    deleteTask(event);
  }
});
