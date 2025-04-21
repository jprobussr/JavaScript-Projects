import ToDoList from './TodoList';

const toDoList = new ToDoList();
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    toDoList.addTask(task);
    taskInput.value = '';
    updateTaskList();
  }
});

taskList.addEventListener('click', () => {
  toDoList.removeTask();
  updateTaskList();
});

function updateTaskList() {
  taskList.innerHTML = '';
  const tasks = toDoList.getTask();
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}
