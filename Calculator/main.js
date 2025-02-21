let display = document.getElementById('display');
let isNegative = false;

function appendToDisplay(input) {
  let lastChar = display.value.slice(-1);
  if(['+', '-', '*', '/', '%'].includes(lastChar) && ['+', '-', '*', '/', '%'].includes(input)) {
    return;
  }
  display.value += input;
}

function clearDisplay() {
  display.value = '';
  isNegative = false;
}

function toggleSign() {
    if (display.value) {
      let value = parseFloat(display.value);
      display.value = value > 0 ? `-${value}` : `${Math.abs(value)}`;
    }
}

function calculate() {
  try {
    let lastChar = display.value.slice(-1);
  if(['+', '-', '*', '/', '%'].includes(lastChar)) {
    throw new Error('Invalid Input');
  }

    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function toggleBrightness() {
  let bodyEl = document.body;
  bodyEl.classList.toggle('lightmode');

  let icon = document.querySelector('.brightness-toggle i');
  icon.classList.add('fa-moon');

  if(document.body.classList.contains('lightmode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }


}

