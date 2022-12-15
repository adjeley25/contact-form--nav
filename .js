/* 
  Use Javascript to get the traffic light working correctly 
*/


// Simple solution

const stopButton = document.querySelector('#stopButton');
const slowButton = document.querySelector('#slowButton');
const goButton = document.querySelector('#goButton');

const stopLight = document.querySelector('#stopLight');
const slowLight = document.querySelector('#slowLight');
const goLight = document.querySelector('#goLight');

stopButton.addEventListener('click', () => {
  resetBlack();
  stopLight.style.backgroundColor = 'red';
});
slowButton.addEventListener('click', () => {
  resetBlack();
  slowLight.style.backgroundColor = 'orange';
});
goButton.addEventListener('click', () => {
  resetBlack();
  goLight.style.backgroundColor = 'green';
});
function resetBlack() {
  stopLight.style.backgroundColor = 'black';
  slowLight.style.backgroundColor = 'black';
  goLight.style.backgroundColor = 'black';
}


// Complex solution
// Still could be better if we had some more data attrs on the HTML for colours
// or come more CSS 

// const buttons = document.querySelectorAll('.button');
// const bulbs = document.querySelectorAll('.bulb');

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     bulbs.forEach((bulb) => bulb.style.backgroundColor = 'black');
//     const buttonId = button.getAttribute('id').split('Button')[0] + 'Light';
//     let colour = 'red';
//     if(buttonId === 'slowLight') colour = 'orange';
//     if(buttonId === 'goLight') colour = 'green';
//     document.querySelector('#'+buttonId).style.backgroundColor = colour;
//   })
// });