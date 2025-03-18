const cell = document.querySelectorAll(".cell");
const input = document.querySelector(".input");
const blackButton = document.querySelector('.black');
const randomButton = document.querySelector('.random-color');
const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function() {
  cell.forEach(cells => {
    cells.style.backgroundColor = "white"
  });
});

blackButton.addEventListener('click', function() {
  cell.forEach(cells =>{
    cells.addEventListener('mouseover', () => {
    cells.style.backgroundColor = 'black';
   });
 });
});

randomButton.addEventListener('click', function() {
  cell.forEach(cells =>{
    cells.addEventListener('mouseover', () => {
    cells.style.backgroundColor = randomColor;
   });
 });
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

const randomColor = getRandomColor();



