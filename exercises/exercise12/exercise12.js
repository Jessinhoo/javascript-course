//12a
console.log('12a:');
const add = function() {
  console.log(2+3);
}

add();
add();

//12b
console.log('12b:');
function runTwice(fun){
  fun();
  fun();
}
runTwice(function() {
  console.log('12b');
})
runTwice(add);

//12c
document.querySelector('.js-1sec-button').addEventListener('click', () => { //12q
  oneSecClicked();
})
function oneSecClicked() {
  //12d
  document.querySelector('.js-1sec-button').innerHTML = 'Loading...';
  setTimeout(() => {
    document.querySelector('.js-1sec-button').innerHTML = 'Finished!';
  }, 1000)
}

//12e
document.querySelector('.js-add-to-cart-button').addEventListener('click', () => { //12q
  addToCartClicked();
})
function addToCartClicked() {
  setTimeout(() => {
    document.querySelector('.js-add-to-cart-text').innerHTML = '';
  }, 2000);
  document.querySelector('.js-add-to-cart-text').innerHTML = 'Added';
}

//12f
let alreadyClicked = false;
let timeoutID;

function addToCartClicked() {
  if(!alreadyClicked) {
    timeoutID = setTimeout(() => {
      document.querySelector('.js-add-to-cart-text').innerHTML = '';
    }, 2000);
    document.querySelector('.js-add-to-cart-text').innerHTML = 'Added';
    alreadyClicked = true;
  } else {
    clearTimeout(timeoutID);
    alreadyClicked = false;
  }
}

//12g,h,i
document.querySelector('.js-add-notification-button').addEventListener('click', () => {
  startNotification();
  updateCounter(1);
})
document.querySelector('.js-remove-notification-button').addEventListener('click', () => {
  if (messages > 0){
    updateCounter(-1)
  }
  if (messages === 0){
    stopNotification();
  }
})
let messages = 2;
let isDisplayingNotification;
let intervalID;
startNotification();
console.log(messages);
if (messages === 0){

}

function stopNotification(){
  isDisplayingNotification = false;
  clearInterval(intervalID);
  document.title = 'App';
}

function startNotification(){
  if (isDisplayingNotification) {
    return;
  }
  isDisplayingNotification = true;

  intervalID = setInterval(() => {
    if (document.title === 'App'){
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000)
}

function updateCounter(newValue){
  return messages += newValue;
}

//12j&k
console.log('12j:')
const multiply = ((num1, num2) => num1 * num2);

console.log(multiply(2,3));
console.log(multiply(7,10));

//12l
console.log('12l:');
let counter = 0;
function countPositive(nums){
  nums.forEach((value) => {
    if (value >= 0){
      counter++
    }
  })
  return counter;
}

console.log(countPositive([1, -3 ,5])); //2
console.log(countPositive([-2, 3, -5, 7, 10])); //5


//12m
console.log('12m:');
function addNum(array, num){
  return array.map(value => value + num);
};

console.log(addNum([1, 2, 3,], 2));
console.log(addNum([-2, -1, 0, 99], 2));

//12n
console.log('12n:');
function removeEgg(foods){
  return foods.filter((value) => {
    if (!(value === 'egg')){
      return value;
    }
  })
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

//12o
console.log('12o:');
let eggCounter = 0;

function removeEgg1(foods) {
  return foods.filter((value) => {
    if (value === 'egg' && (eggCounter < 2)) {
      eggCounter++;
      return false; // Remove 'egg' from the filtered array
    } else {
      return true; // Keep other values in the filtered array
    }
  });
}

console.log(removeEgg1(['egg', 'apple', 'egg', 'egg', 'ham']));

