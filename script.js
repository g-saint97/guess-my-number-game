let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber ;

let score = 20;
let highScore = 0;
//this variable above is called state variable because in the state of the application

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No guess, try again';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 Correct Number!, Please restart to play again';
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The guess is too high ☝🏽, try again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost 😿, please restart';
      document.body.style.backgroundColor = '#A30000';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The guess is too low 👇🏽, try again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost 😿, please restart';
      document.body.style.backgroundColor = '#A30000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  // displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
