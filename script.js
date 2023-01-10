'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let bestScore = 0;

function loseTheGame() {
  document.querySelector('.message').textContent = 'You lost the game!';
  score = 0;
  document.querySelector('.score').textContent = score;
}

function higherScore() {
  if (score > bestScore) {
    bestScore = score;

    document.querySelector('.highscore').textContent = bestScore;
  }
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//document.querySelector('.number').textContent = secretNumber;
document
  .querySelector('.check')
  .addEventListener('click' || 'keypress', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // no input or 0
    if (!guess) {
      displayMessage('No number');

      //When player wins
    } else if (guess == secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('Correct number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      higherScore();
      // When guess number is not a secret number
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too high' : 'Too low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        loseTheGame();
      }
    }
  });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  displayMessage('Start guessing...');
});
