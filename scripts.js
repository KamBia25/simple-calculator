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
function clearInput(){
  var getValue= document.getElementById("input");
    if (getValue.value !="") {
        getValue.value = "";
    }
}
let firstVariable = "";
let secondVariable = "";
let operator = "";

let numeralButtons = document.getElementsByClassName("numeral");
let input = document.getElementById("input");
for (let i = 0 ; i < numeralButtons.length; i++) {
  numeralButtons[i].addEventListener('click', function() {
    input.value = input.value + this.textContent ;
  });
}
let operationalButtons = document.getElementsByClassName("operational");
for (let i = 0 ; i <operationalButtons.length; i++) {
  operationalButtons[i].addEventListener('click', function() {
    if(firstVariable!=""){
    secondVariable = input.value;
    clearInput()
    }
    else{
      firstVariable = input.value;
      clearInput()
    }
  });
}