'use strict';
// selecting elemnts
const Score0El = document.querySelector('#score--0');
const Score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// variables
const scores = [0, 0];
let currentScore = 0;
let ActivePlayer = 0;
let playing = true;
// function to output direct to dom
function print(cls, msg) {
  cls.textContent = `${msg}`;
}
function switchPlayer(params) {
  let player = document.getElementById(`current--${ActivePlayer}`);
  print(player, 0);
  currentScore = 0;
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

print(Score0El, 0);
print(Score1El, 0);
diceEl.classList.add('hidden');
btnRoll.addEventListener('click', () => {
  if (playing) {
    // pick a randmom a number betwenn 1 and 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check if dice 1
    if (dice !== 1) {
      // add dice to cunnret score
      currentScore += dice;
      let player = document.getElementById(`current--${ActivePlayer}`);
      print(player, currentScore);
    } else {
      // switch the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
    if (playing) {
        
    
  // add curent score to active player score
  console.log(currentScore);
  scores[ActivePlayer] += currentScore;
  document.getElementById(`score--${ActivePlayer}`).textContent =
    scores[ActivePlayer];

  // check if player reach 100
  if (scores[ActivePlayer] >= 100) {
      playing = false;
      document
      .querySelector(`.player--${ActivePlayer}`)
      .classList.add('player--winner');
    document
    .querySelector(`.player--${ActivePlayer}`)
      .classList.remove('player--active');
    // finish the game
    diceEl.classList.add('hidden');

  } else {
      // switch the palyer
    switchPlayer();
  }
}
});

btnNew.addEventListener('click' , ()=>{
    print(Score0El , '0')
    print(Score1El , '0')
    diceEl.classList.add('hidden')
    currentScore = 0
    for (let index = 0; index < scores.length; index++) {
         scores[index] = 0; 
    }
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    print(currentScore0El , 0)
    print(currentScore1El , 0)
    playing = true
    ActivePlayer = 0

}) 