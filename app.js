const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const BOMB = 'BOMB';
const DEFAULT = ROCK;

let gameRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS &&
    selection !== BOMB
  ) {
    alert(`Invalid Choice! We chose ${DEFAULT} for you.`);
    return DEFAULT;
  }
  return selection;
};

startGameBtn.addEventListener('click', function () {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
