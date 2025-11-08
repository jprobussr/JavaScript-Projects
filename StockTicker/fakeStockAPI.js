export function getStockData() {
  return {
    name: 'QtechAI',
    sym: 'QTA',
    price: Math.random() * 3,
    time: new Date().toLocaleTimeString(),
  };
}

console.log(getStockData().name);
console.log(getStockData().time);


// /* return a random number between 0 and 3 to two decimal places */,
// /* return a timestamp in this format: hh/mm/ss */
