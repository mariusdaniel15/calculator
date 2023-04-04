
let firstNum = 0;
let secondNum = 0;
const operators = ['-','+','*','/'];
let currentOp = '';

//create the buttons
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

const buttons3 = () => {
    const twoButtons = document.querySelector('.numbers');
    const equals = document.createElement('button');
    equals.classList.add('equals');
    equals.textContent = '=';
    twoButtons.appendChild(equals);

    const clear = document.createElement('button');
    clear.classList.add('clear');
    clear.textContent = 'c';
    twoButtons.appendChild(clear);
}
buttons3();

// operator functions
const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//display the numbers and operators
const display = document.querySelector('.display');
const addNumberListener = (num) => {
    const numberButton = document.querySelector(`#num${num}`);
    numberButton.addEventListener('click', () => {
        if(!firstNum){
            firstNum = num;
        }
        else {
            secondNum = num;
        }
        display.textContent += num;
    });
}

for(let i=0; i<=9; i++){
    addNumberListener(i);
}

const addOperatorListener = (op) => {
    const opButton = document.querySelector(`#op${op}`);
    opButton.addEventListener('click', () => {
        display.textContent += operators[op];
        currentOp = operators[op];
    });
}

for(let i=0; i<=3; i++){
    addOperatorListener(i);
}

const operate = ((firstNum,secondNum,currentOp) => {
    let result = 0;
    if(currentOp == '+') result = add(firstNum,secondNum);
    else if(currentOp == '-') result = substract(firstNum,secondNum);
    else if(currentOp == '*') result = multiply(firstNum,secondNum);
    else result = divide(firstNum,secondNum);
    return result;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    firstNum = 0;
    secondNum = 0;
    currentOp = '';
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => display.textContent = `=${operate(firstNum,secondNum,currentOp)}`);