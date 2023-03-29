function add(firstVariable, operator, secondVariable){
    return `${firstVariable} ${operator} ${secondVariable}`;
}  
function subtract(firstVariable, operator, secondVariable){
    return `${firstVariable} ${operator} ${secondVariable}`;
}
function multiply(firstVariable, operator, secondVariable){
    return `${firstVariable} ${operator} ${secondVariable}`;
}
function divide(firstVariable, operator, secondVariable){
    return `${firstVariable} ${operator} ${secondVariable}`;
}
function operate(firstVariable,operator,secondVariable){
    switch(operator) {
        case "+":
          add(firstVariable, operator, secondVariable);
        case "-":
          subtract(firstVariable, operator, secondVariable);
        case "*":
          multiply(firstVariable, operator, secondVariable);
        case "/":
          divide(firstVariable, operator, secondVariable);
}
}
let numeralButtons = document.getElementsByClassName("numeral");
let input = document.getElementById("input");
for (let i = 0 ; i < numeralButtons.length; i++) {
  numeralButtons[i].addEventListener('click', function() {
    input.value = input.value + this.textContent ;
  });
}
