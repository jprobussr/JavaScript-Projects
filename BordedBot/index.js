document.getElementById('bored-bot').addEventListener('click', () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('bored-idea').textContent = data.activity;

      const titles = [
        '🕹️ FunFinder 1985 👾',
        '👾 Boredom Blaster 8-Bit 💥',
        '🎮 Insert Fun Coin 🪙',
        '🚀 Pixel Party Engine 🧬',
      ];

      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      document.getElementById('title').textContent = randomTitle;

      document.body.classList.add('fun1');
    })
    .catch((error) => {
      console.error('Network Fetching Error:', error);
    });
});
