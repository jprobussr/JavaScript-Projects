const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const list = document.getElementById('list');

let shoppingList = [];

addItemBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (shoppingList.includes(itemInput.value.trim())) {
    alert('No Duplicates');
  } else if (itemInput.value.trim() !== '') {
    shoppingList.push(itemInput.value.trim());
    render()
  }

  itemInput.value = '';
});

const render = (e) => {
  let html = '';
  for (let item of shoppingList) {
    html += `<li>${item}</li>`;
  }
  list.innerHTML = html;
};

render();
