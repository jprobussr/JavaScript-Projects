document.addEventListener('DOMContentLoaded', () => {
  const sentenceEl = document.getElementById('sentence');
  const inputEl = document.getElementById('input');
  const resultEl = document.getElementById('result');

  const sentences = [
    'The quick brown fox jumps over the lazy dog.',
    'Typing speed tests are great for improving accuracy.',
    'JavaScript makes web pages dynamic and interactive.',
    'A dark theme is easier on the eyes during long coding sessions.',
  ];

  let startTime, sentence;

  function startTest() {
    sentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceEl.textContent = sentence;
    inputEl.value = '';
    resultEl.textContent = '';
    startTime = null;
  }

  inputEl.addEventListener('input', () => {
    if (!startTime) {
      startTime = new Date();
    }

    const typedText = inputEl.value;

    if (typedText === sentence) {
      const endTime = new Date();
      const timeTaken = (endTime - startTime) / 1000;
      const words = sentence.split(' ').length;
      const wpm = Math.round((words / timeTaken) * 60);
      resultEl.textContent = `Your speed: ${wpm} WPM`;
    }
  });

  startTest();
});
