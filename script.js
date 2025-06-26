let playerScore = 0;
let computerScore = 0;

const resultText = document.getElementById('result-text');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');
const drawSound = document.getElementById('draw-sound');

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    resultText.textContent = `It's a draw! You both chose ${playerChoice}.`;
    drawSound.play();
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    winSound.play();
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    loseSound.play();
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  resultText.textContent = "Make your move!";
}

// Theme toggle
document.getElementById('theme-toggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
});
