//10c
const buttonElement = document.querySelector('.js-button');
console.log(buttonElement.classList.contains('js-button'));

//10d&e
function changeColor(buttonName) {
  const button = document.querySelector(buttonName);
  if (!button.classList.contains('is-toggled')){
    unselectPreviousButton();
  }  
  button.classList.add('is-toggled');
}



function unselectPreviousButton() {
  const previous = document.querySelector('.is-toggled');
  if (previous) {
    previous.classList.remove('is-toggled');
  }
} 
