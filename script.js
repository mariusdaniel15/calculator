
let firstNum = 0;
let secondNum = 0;
const operators = ['-','+','*','/'];

const buttons = () => {
    const numbers = document.querySelector('.numbers');
    for(i=9;i>=0;i--){
        const number = document.createElement('button');
        number.classList.add('number');
        number.textContent = `${i}`;
        numbers.appendChild(number);}
    
}
buttons();

const buttons2 = () => {
    const operatorsContainer = document.querySelector('.operators');
    for(i=0;i<=3;i++){
        const operator = document.createElement('button');
        operator.classList.add('operator');
        operator.textContent = `${operators[i]}`;
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

const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = ((firstNum,secondNum,operator) => {

});