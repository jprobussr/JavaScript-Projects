document.getElementById('bored-bot').addEventListener('click', () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('bored-idea').textContent = data.activity;
    })
    .catch((error) => {
      console.error('Error Message:', error);
    });
});
