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
function oneSecClicked() {
  //12d
  document.querySelector('.js-1sec-button').innerHTML = 'Loading...';
  setTimeout(function(){
    document.querySelector('.js-1sec-button').innerHTML = 'Finished!';
  }, 1000)
}

//12e
function addToCartClicked() {
  setTimeout(function(){
    document.querySelector('.js-add-to-cart-text').innerHTML = '';
  }, 2000);
  document.querySelector('.js-add-to-cart-text').innerHTML = 'Added';
}

//12f
let alreadyClicked = false;
let timeoutID;

function addToCartClicked() {
  if(!alreadyClicked) {
    timeoutID = setTimeout(function(){
      document.querySelector('.js-add-to-cart-text').innerHTML = '';
    }, 2000);
    document.querySelector('.js-add-to-cart-text').innerHTML = 'Added';
    alreadyClicked = true;
  } else {
    clearTimeout(timeoutID);
    alreadyClicked = false;
  }
}

//12g&h
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

  intervalID = setInterval(function() {
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
 

