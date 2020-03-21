let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = function() {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = function(humanGuess, compGuess, secretNum) {
  const humanDifference = Math.abs(secretNum - humanGuess);
  const compDifference = Math.abs(secretNum - compGuess);
  return humanDifference <= compDifference;
};

const updateScore = function(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
