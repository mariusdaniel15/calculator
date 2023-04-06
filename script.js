//variables
let firstNum = 0;
let secondNum = 0;
const operators = ['-','+','*','/'];
let currentOp = '';
let result = 0;
let newOp = '';

//create the buttons
//numbers
const buttons = () => {
  const numbers = document.querySelector('.numbers');
  for(let i=9;i>=0;i--){
    const number = document.createElement('button');
    number.classList.add('number');
    number.textContent = `${i}`;
    number.id = `num${i}`;
    numbers.appendChild(number);}
    
}
buttons();

//operators
const buttons2 = () => {
  const operatorsContainer = document.querySelector('.operators');
  for(let i=0;i<=3;i++){
    const operator = document.createElement('button');
    operator.classList.add('operator');
    operator.textContent = `${operators[i]}`;
    operator.id = `op${[i]}`;
    operatorsContainer.appendChild(operator);} 
}
buttons2();

//point and equals
const buttons3 = () => {
  const pointEquals = document.querySelector('.numbers');

  const pointB = document.createElement('button');
  pointB.classList.add('pointB');
  pointB.textContent = '.';
  pointEquals.appendChild(pointB);

  const equals = document.createElement('button');
  equals.classList.add('equals');
  equals.textContent = '=';
  pointEquals.appendChild(equals);

  pointB.addEventListener('click', () => {
    if (!currentOp) {
      if (String(firstNum).includes('.')) {
        return;
      }
      firstNum += '.';
      display.textContent += '.';
    } else {
      if (String(secondNum).includes('.')) {
        return;
      }
      secondNum += '.';
      display.textContent += '.';
    }
  });
}
buttons3();

//delete and clear
const buttons4 = () => {
  const deleteClear = document.querySelector('.twoButtons');

  const deleteB = document.createElement('button');
  deleteB.classList.add('deleteB');
  deleteB.textContent = 'delete';
  deleteClear.appendChild(deleteB);

  const clear = document.createElement('button');
  clear.classList.add('clear');
  clear.textContent = 'clear';
  deleteClear.appendChild(clear);
}
buttons4();

// operator functions
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => {
  if(b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a/b;
}

//display
const display = document.querySelector('.display');

//event listeners for numbers buttons
const addNumberListener = (num) => {
  const numberButton = document.querySelector(`#num${num}`);
  numberButton.addEventListener('click', () => {
    if (!currentOp) {
      firstNum = parseFloat(firstNum.toString() + num.toString());
      display.textContent += num;
    } else {
      if (!secondNum && num === 0) {
        display.textContent += '0';
      } else if (num === '.') {
        if (String(secondNum).includes('.')) {
          return;
        }
        secondNum += '.';
        display.textContent += '.';
      } else {
        secondNum = parseFloat(secondNum.toString() + num.toString());
        display.textContent += num;
      }
    }
  });
}

for(let i=0; i<=9; i++){
  addNumberListener(i);
}

//event listeners for operators buttons
const addOperatorListener = (op) => {
  const opButton = document.querySelector(`#op${op}`);
  opButton.addEventListener('click', () => {
    display.textContent += operators[op];
    if (!currentOp) {
      currentOp = operators[op];
    } else {
      firstNum = operate(firstNum, secondNum, currentOp);
      secondNum = 0;
      currentOp = operators[op];
      display.textContent = firstNum + currentOp;
    }
  });
}

for(let i=0; i<=3; i++){
  addOperatorListener(i);
}

//operate function for two numbers
const operate = ((firstNum,secondNum,currentOp) => {
  let result = 0;
  if(currentOp == '+') result = add(firstNum,secondNum);
  else if(currentOp == '-') result = subtract(firstNum,secondNum);
  else if(currentOp == '*') result = multiply(firstNum,secondNum);
  else result = divide(firstNum,secondNum);
  return result;
});

//continueOperate function if it's more than 2 numbers
const continueOperate = (num1, num2, op) => {
  let result = operate(num1, num2, op);
  while (newOp !== '') {
    if (currentOp !== newOp) {
      num1 = result;
      num2 = 0;
      currentOp = newOp;
    }
    num2 = parseFloat(display.textContent.slice(display.textContent.lastIndexOf(currentOp) + 1));
    result = operate(num1, num2, currentOp);
    previousOp = newOp;
    display.textContent = operate(num1,num2,currentOp)+newOp;
  }
  return result;
}

//events listeners for clear and equals
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  display.textContent = '';
  firstNum = 0;
  secondNum = 0;
  currentOp = '';
  newOp = '';
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
  if (currentOp) {
    const num2 = parseFloat(display.textContent.slice(display.textContent.lastIndexOf(currentOp) + 1));
    result = continueOperate(firstNum, num2, currentOp);
    display.textContent = `=${result}`;
    firstNum = result;
    secondNum = 0;
    currentOp = '';
    newOp = '';
  }
});

const deleteB = document.querySelector('.deleteB');
deleteB.addEventListener('click', () => {
  let string = display.textContent;
  display.textContent = string.slice(0,-1);
})

const pointB = document.querySelector('.pointB');
pointB.addEventListener('click', () => {
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
    if (!currentOp) {
      firstNum = parseFloat(display.textContent);
    } else {
      secondNum = parseFloat(display.textContent.slice(display.textContent.lastIndexOf(currentOp) + 1));
    }
  }
});