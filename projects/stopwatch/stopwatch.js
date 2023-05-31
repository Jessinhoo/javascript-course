let timer = JSON.parse(localStorage.getItem('timer')) || {
  minutes: 0,
  seconds: 0,
  milliSeconds: 0
}

let startButton = document.querySelector('.js-start-button');
let stopButton = document.querySelector('.js-stop-button');
let resetButton = document.querySelector('.js-reset-button');
console.log(resetButton);

let additionalMinutesDigit = handleSingleDigits('.additional-minutes-digit', timer.minutes, 9);
document.querySelector('.js-stopwatch-minutes').innerHTML = timer.minutes;

let additionalSecondsDigit = handleSingleDigits('.additional-seconds-digit', timer.seconds, 9);
document.querySelector('.js-stopwatch-seconds').innerHTML = timer.seconds;

let additionalMillisecondsDigit = handleSingleDigits('.additional-milliSeconds-digit', timer.milliSeconds, 9);
document.querySelector('.js-stopwatch-milliSeconds').innerHTML = timer.milliSeconds;

let intervalId;

startButton.addEventListener('click', () => {
  if (!intervalId){
    runTimer();
  }
})

stopButton.addEventListener('click', () => {
  stopTimer();
})

resetButton.addEventListener('click', () => {
  resetTimer();
})

function runTimer(){
  intervalId = setInterval(() => {
    document.querySelector('.js-stopwatch-milliSeconds').innerHTML = timer.milliSeconds += 1;
    if (timer.milliSeconds > 9){
      additionalMillisecondsDigit.innerHTML = '';
    } else {
      additionalMillisecondsDigit.innerHTML = 0;
    }

    if (timer.milliSeconds === 99) {
      document.querySelector('.js-stopwatch-seconds').innerHTML = timer.seconds += 1;
      timer.milliSeconds = 0;
    }

    if (timer.seconds > 9){ // if seconds below 10, show '0' infront of seconds, so time is always two-digit
      additionalSecondsDigit.innerHTML = '';
    }

    if (timer.seconds === 59) {
      document.querySelector('.js-stopwatch-minutes').innerHTML = timer.minutes += 1;
      timer.seconds = 0;
    }

    localStorage.setItem('timer', JSON.stringify(timer));
  }, 10)
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = 0;
  timerIsRunning = false;
}

function resetTimer() {
  localStorage.removeItem('timer');
  timer.minutes = 0;
  timer.seconds = 0;
  timer.milliSeconds = 0;
  additionalSecondsDigit.innerHTML = 0;
  additionalMillisecondsDigit.innerHTML = 0;
  timerIsRunning = false;
  renderTime();
}

function renderTime() {
  document.querySelector('.js-stopwatch-minutes').innerHTML = timer.minutes;
  document.querySelector('.js-stopwatch-seconds').innerHTML = timer.seconds;
  document.querySelector('.js-stopwatch-milliSeconds').innerHTML = timer.milliSeconds;
}

function handleSingleDigits(HTMLClass, toCheck, number) {
  let additionalDigit = document.querySelector(HTMLClass);
  if (toCheck > number) {
    additionalDigit.innerHTML = '';
  }
  return additionalDigit;
}

