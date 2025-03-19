const blackButton = document.querySelector('.black');
const randomButton = document.querySelector('.random-color');
const resetButton = document.querySelector('.reset');
const enterButton = document.querySelector('.enter');




function createGrid() {
  const container = document.querySelector('.container');
  const input = parseInt(document.querySelector("input").value, 10);


  container.innerHTML = '';
  if(!Number.isNaN(input) && input > 0 && input <= 64) {
  const totalCells = input * input;
  const cellSize = 500 / input;

    const fragment = document.createDocumentFragment();

    for(let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        fragment.appendChild(cell);
    } 

    container.appendChild(fragment);

    const cell = document.querySelectorAll(".cell");

    resetButton.addEventListener('click', function() {
      cell.forEach(cells => {
        cells.style.backgroundColor = "white";
        container.innerHTML = '';
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
  }else {
    alert("Enter a valid number");
  }
}

enterButton.addEventListener('click', createGrid);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

const randomColor = getRandomColor();



