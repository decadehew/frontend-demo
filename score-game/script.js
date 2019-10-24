const p1Button = document.querySelector('#p1Button');
let p1Score = 0;

const p2Button = document.querySelector('#p2Button');
let p2Score = 0;

const displayP1 = document.querySelector('#displayP1');
const displayP2 = document.querySelector('#displayP2');

// reset game score
const resetButton = document.querySelector('#reset');

// input score to game
const numInput = document.querySelector('.inputScore');
const winnerScoreDisplay = document.querySelector('p span');

let gameOver = false;
let winningScore = 5;

// Player One
p1Button.addEventListener('click', () => {
  if(!gameOver) {
    p1Score++;
    if(winningScore === p1Score) {
      displayP1.classList.add('winner');
      gameOver = true;
    }
    displayP1.textContent = p1Score;
  }
})


// Player Two
p2Button.addEventListener('click', () => {
  if(!gameOver) {
    p2Score++;
    if(winningScore === p2Score) {
      displayP2.classList.add('winner');
      gameOver = true;
    }
    displayP2.textContent = p2Score;
  }
})

//reset game
resetButton.addEventListener('click', () => {
  p1Score = 0;
  p2Score = 0;

  displayP1.textContent = p1Score;
  displayP2.textContent = p2Score;

  displayP1.classList.remove('winner');
  displayP2.classList.remove('winner');

  numInput.value = '';
  gameOver = false;
})

numInput.addEventListener('change', () => {
  winnerScoreDisplay.textContent = parseInt(numInput.value);
  winningScore = parseInt(numInput.value);
})
