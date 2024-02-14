const display = document.getElementById('display');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
const plus = document.getElementById('plus');
let counter = 0;

minus.addEventListener('click', () => {
  counter--;
  display.innerHTML = counter;
});

plus.addEventListener('click', () => {
  counter++;
  display.innerHTML = counter;
});

reset.addEventListener('click', () => {
  counter = 0;
  display.innerHTML = counter;
});
