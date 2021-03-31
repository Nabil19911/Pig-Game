'use strict';
/*


player--active
// Player 1-----------
.player--0
#current--0
#score--0
#name--0

// Player 2-----------
.player--0
#current--1
#score--1
#name--1


.player--active

.btn--new
.btn--roll
.btn--hold
.dice
*/

/*
when click the roll the dice
    roll the dice - img src tag
    add the amount to player current
    if rolled 1 remove all the current score and change the player

when click the hold btn
    update the score and change

reset all when new btn pressed
*/

// Players
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerNameOne = document.querySelector('#name--0');
const playerNameTwo = document.querySelector('#name--1');

// current score
const currentScorePlayerOne = document.querySelector('#current--0');
const currentScorePlayerTwo = document.querySelector('#current--1');

//Total Score
const totalScorePlayerOne = document.querySelector('#score--0');
const totalScorePlayerTwo = document.querySelector('#score--1');

// Button
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// Image
const diceImg = document.querySelector('.dice');

// Variable
let currentScore = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
diceImg.style.display = 'none';

rollBtn.addEventListener('click', () => {
  diceImg.style.display = 'block';
  let number = Math.trunc(Math.random() * 6) + 1;
  diceImg.setAttribute('src', `dice-${number}.png`);
  currentScore += number;
  if (playerOne.classList.contains('player--active')) {
    if (number === 1) {
      currentScore = 0;
      playerOne.classList.remove('player--active');
      playerTwo.classList.add('player--active');
    }
    currentScorePlayerOne.textContent = currentScore;
  } else {
    if (number === 1) {
      currentScore = 0;
      playerTwo.classList.remove('player--active');
      playerOne.classList.add('player--active');
    }
    currentScorePlayerTwo.textContent = currentScore;
  }
});

holdBtn.addEventListener('click', () => {
  if (playerOne.classList.contains('player--active')) {
    playerOne.classList.remove('player--active');
    playerTwo.classList.add('player--active');
    playerOneScore += currentScore;
    totalScorePlayerOne.textContent = playerOneScore;
    if (playerOneScore >= 100) {
      rollBtn.style.display = 'none';
      diceImg.style.display = 'none';
      holdBtn.style.display = 'none';
      playerNameOne.textContent = 'Winner';
      playerNameTwo.textContent = 'Looser';
    }
    currentScore = 0;
    currentScorePlayerOne.textContent = currentScore;
  } else {
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
    playerTwoScore += currentScore;
    totalScorePlayerTwo.textContent = playerTwoScore;
    if (playerTwoScore >= 100) {
      rollBtn.style.display = 'none';
      diceImg.style.display = 'none';
      holdBtn.style.display = 'none';
      playerNameTwo.textContent = 'Winner';
      playerNameOne.textContent = 'Looser';
    }
    currentScore = 0;
    currentScorePlayerTwo.textContent = currentScore;
  }
});

newBtn.addEventListener('click', () => {
  currentScore = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  rollBtn.style.display = 'block';
  holdBtn.style.display = 'block';
  playerNameOne.textContent = 'Player 1';
  playerNameTwo.textContent = 'Player 2';
  currentScorePlayerOne.textContent = currentScore;
  currentScorePlayerTwo.textContent = currentScore;
  totalScorePlayerOne.textContent = playerTwoScore;
  totalScorePlayerTwo.textContent = playerTwoScore;
});

// const playerSection0 = document.querySelector('.player--0');
// const playerSection1 = document.querySelector('.player--1');

// const playerName0 = document.querySelector('#name--0');
// const playerName1 = document.querySelector('#name--1');

// const currentScore0 = document.querySelector('#current--0');
// const currentScore1 = document.querySelector('#current--1');

// const score0 = document.querySelector('#score--0');
// const score1 = document.querySelector('#score--1');

// // Btn
// const rollBtn = document.querySelector('.btn--roll');
// const holdBtn = document.querySelector('.btn--hold');
// const newBtn = document.querySelector('.btn--new');

// // Image
// const diceImg = document.querySelector('.dice');

// let currentScore;
// let isPlaying;
// let activePlayer;
// let scores;

// const initial = () => {
//   currentScore = 0;
//   scores = [0, 0];
//   activePlayer = 0;
//   diceImg.style.display = 'none';
//   score0.textContent = 0;
//   score1.textContent = 0;
//   currentScore0.textContent = 0;
//   currentScore1.textContent = 0;
//   rollBtn.style.display = 'block';
//   holdBtn.style.display = 'block';
//   playerSection0.textContent = 'Player 1';
//   playerSection1.textContent = 'Player 2';
// };
// initial();

// const changeplayer = () => {
//   document.querySelector(`#current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 1 ? 0 : 1;
//   currentScore = 0;
//   playerSection0.classList.toggle('player--active');
//   playerSection1.classList.toggle('player--active');
// };

// rollBtn.addEventListener('click', () => {
//   const randomNumber = Math.trunc(Math.random() * 6) + 1;
//   diceImg.style.display = 'block';
//   diceImg.src = `dice-${randomNumber}.png`;

//   if (randomNumber !== 1) {
//     currentScore += randomNumber;
//     document.querySelector(
//       `#current--${activePlayer}`
//     ).textContent = currentScore;
//   } else {
//     changeplayer();
//   }
// });

// holdBtn.addEventListener('click', () => {
//   scores[activePlayer] += currentScore;
//   document.querySelector(`#score--${activePlayer}`).textContent =
//     scores[activePlayer];
//   if (scores[activePlayer] >= 20) {
//     document.querySelector(`#name--${activePlayer}`).textContent = 'You Won';
//     rollBtn.style.display = 'none';
//     holdBtn.style.display = 'none';
//   } else {
//     changeplayer();
//   }
// });

// newBtn.addEventListener('click', initial);
