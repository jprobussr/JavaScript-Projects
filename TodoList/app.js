import LinkedList from './LinkedList.js';

document.addEventListener('DOMContentLoaded', () => {

  const list = new LinkedList();
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
      list.addTask(task);
      taskInput.value = '';
      renderTasks();
    }
  });

  function renderTasks() {
    taskList.innerHTML = '';
    list.getTasks().forEach((task) => {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
    });
  }
});
