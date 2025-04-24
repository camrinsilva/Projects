const display = document.querySelector('.display');
const appendButton = document.querySelectorAll('.btn');

function appendInput(input) {
  let lastChar = display.value.slice(-1);
  if(['+', '-', '*', '/', '%', '.'].includes(lastChar) && ['+', '-', '*', '/', '%', '.'].includes(input)) {
    return;
  }
  display.value += input;
}

function clearAll() {
  display.value = '';
}

/* function clearLast() {
  if(display > 0 && display.textContent.length > 0) {
    display.textContent = display.textContent.slice(0, -1);
  }
} */


const operations = {
  '+': (a,b) => a + b,
  '-': (a,b) => a - b,
  '*': (a,b) => a * b,
  '/': (a,b) => a / b,
}

document.querySelector('.pos-neg').addEventListener('click', function() {
  if(display.value) {
    let value = parseFloat(display.value);
    display.value = value > 0 ? `(-${value})` : `${Math.abs(value)}`
  } 

})


function operate() {
  const regex = /[-]?\d+(\.\d+)?|[-+*/]/g;
  const matches = display.value.match(regex);
  const result = matches || [];
  console.log(result);

  let i = 0;
  while(i < result.length) {
    if(result[i] == '*' || result[i] == '/') {
      const num1 = parseFloat(result[i - 1]);
      const num2 = parseFloat(result[i + 1]);
      const operation = operations[result[i]];
      const tempResult  = operation(num1, num2)

      result.splice(i - 1, 3, tempResult);
    }else {
      i++;
    }
  }

  i = 0; 

  while( i < result.length) {
    if(result[i] == '+' || result[i] == '-') {
      const num1 = parseFloat(result[i - 1]);
      const num2 = parseFloat(result[i + 1]);
      const operation = operations[result[i]];
      const tempResult = operation(num1, num2);

      result.splice(i - 1, 3, tempResult);
    }else {
      i++;
    }
  }
  
  display.value = result[0];
  return display.value;

}


