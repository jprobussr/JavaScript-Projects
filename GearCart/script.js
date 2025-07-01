const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const quantityDisplay = document.getElementById('quantity-display');
const cartBtn = document.getElementById('cartBtn');

let quantity = 0;

decrement.addEventListener('click', () => {
  quantity--;
  if (quantity === 0) {
    decrement.disabled = true;
    cartBtn.disabled = true;
  }
  quantityDisplay.innerText = quantity;
});

increment.addEventListener('click', () => {
  quantity++;
  if (quantity >= 1) {
    cartBtn.disabled = false;
  }
  decrement.disabled = false;
  quantityDisplay.innerText = quantity;
});

cartBtn.addEventListener('click', () => {
    console.log(`Your order for ${quantity} backpack(s) is being processed.`);
})