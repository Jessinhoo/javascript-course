let score = JSON.parse((localStorage.getItem('score'))) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

/*  
if(!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
}
*/

let isAutoPlaying = false;
let intervalID;

function autoPlay(){
  if(!isAutoPlaying){
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

autoPlayButton = document.querySelector('.js-auto-play-button');
autoPlayButton.addEventListener('click', () => {
  autoPlay();
  if (isAutoPlaying){
    autoPlayButton.textContent = 'Stop Playing';
  } else {
    autoPlayButton.innerHTML = 'Auto Play';
  }
})

resetButton = document.querySelector('.js-reset-score-button');
resetButton.addEventListener('click', () => {
  renderConfirmationMessage();
})




const rockButton = document.querySelector('.js-rock-button');
rockButton.addEventListener('click', () => {
  playGame('rock');
});
let html = '';
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  } else if (event.key === 'p'){
    playGame('paper');
  } else if(event.key === 's') {
    playGame('scissors');
  } else if(event.key === 'a'){
    autoPlay();
  } else if (event.key === 'Backspace'){
    renderConfirmationMessage();    
  }
  }
)



document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
})


function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if(computerMove === 'rock') {
  result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissors'){
    result = 'Tie.';
  }

} else if (playerMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors'){
      result = 'You lose.';
    }
    
} else if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors'){
      result = 'You win.';
    }
}

//here is the problem when loading page
console.log(0);
if (result === 'You win.') {
  console.log(1);
  score.wins += 1;  
} else if (result === 'You lose.') {
  score.losses += 1;
  console.log(2);
} else if (result === 'Tie.') {
  score.ties += 1;
  console.log(3);
}
console.log(4);
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You 
  <img src="/javascript-course/images/${playerMove}-emoji.png"
  class="move-icon">
  <img src="/javascript-course/images/${computerMove}-emoji.png"
  class="move-icon">
  Computer`;        
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'paper';
} else if (randomNumber >= 2/3 && randomNumber < 1){
  computerMove = 'scissors';
}

return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function renderConfirmationMessage() {
  let html = `<p>Are you sure you want to reset the score?
  </p>
  <button class="js-confirmation-yes">Yes</button>
  <button class="js-confirmation-no">No</button>`;
  const confirmationElement = document.querySelector('.confirmation-message');
  confirmationElement.innerHTML = html;
  confirmationElement.classList.add('confirmation-message-active');

  confirmationButtonYes = document.querySelector('.js-confirmation-yes');
  confirmationButtonNo = document.querySelector('.js-confirmation-no');

  //reset score after pressing 'yes' on confirmation message
  confirmationButtonYes.addEventListener('click', () => {
      resetScore();
      confirmationElement.innerHTML = '';
    confirmationElement.classList.remove('confirmation-message-active');  
  }) 

  //do not reset score after pressing 'no' on confirmation message
  confirmationButtonNo.addEventListener('click', () => {
    confirmationElement.innerHTML = '';
    confirmationElement.classList.remove('confirmation-message-active');
  })
}