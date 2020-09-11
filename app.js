const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const BOMB = 'BOMB';
const DEFAULT = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS!';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS!';

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
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      pChoice === BOMB
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK) ||
//   pChoice === BOMB
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  console.log(winner);
  let message = `You picked ${
    playerChoice || DEFAULT
  }, computer picked ${computerChoice}, therefore `;
  if (playerChoice === BOMB) {
    message = `${BOMB} always wins! You silly cheat.`;
  } else if (winner === RESULT_DRAW) {
    message += 'it is a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'you won!';
  } else {
    message += 'the computer won.';
  }
  alert(message);
  gameRunning = false;
});

// not related to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  'fdsa',
  -3,
  6,
  10
);
combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUBTRACT',
  1,
  10,
  15,
  20
);
