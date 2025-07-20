// document.getElementById('bored-bot').addEventListener('click', getIdea);

// const getIdea = () => {
//   fetch('https://www.boredapi.com/api/activity').then((res) => {
//     document.body.classList('fun');
//     document.getElementById('idea').textContent = data.activity;
//     document.getElementById('title').textContent = '🦾 HappyBot🦿';
//   });
// };

fetch('https://apis.scrimba.com/bored/api/activity')
.then(response => response.json())
.then(data => {
 document.getElementById('bored-idea').textContent = data.activity;
})
.catch(error => {
    console.error('Error Message:', error);
});
