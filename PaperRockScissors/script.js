const choiceButtons = document.querySelectorAll('.choices button');
const resultSpans = document.querySelectorAll('.results span');

const userChoiceSpan = resultSpans[0];
const computerChoiceSpan = resultSpans[1];
const resultSpan = resultSpans[2];

const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  const randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
};

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Draw';
  }

  const winsAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winsAgainst[userChoice] === computerChoice ? 'You win!' : 'You lose!';
};

const formatChoice = (choice) => {
  return choice[0].toUpperCase() + choice.slice(1);
};

choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceSpan.textContent = formatChoice(userChoice);
    computerChoiceSpan.textContent = formatChoice(computerChoice);
    resultSpan.textContent = result;
  });
});
