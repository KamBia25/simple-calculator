function add(firstVariable, secondVariable){
 return firstVariable + secondVariable;
}
function subtract(firstVariable, secondVariable){
    return firstVariable - secondVariable;
}
function multiply(firstVariable, secondVariable){
    return firstVariable * secondVariable;
}
function divide(firstVariable, secondVariable){
    return firstVariable / secondVariable;
}
function operate(firstVariable, operator, secondVariable) {
  switch(operator) {
    case "+":
      return add(firstVariable, secondVariable);
    case "-":
      return subtract(firstVariable, secondVariable);
    case "*":
      return multiply(firstVariable, secondVariable);
    case "/":
      return divide(firstVariable, secondVariable);
    default:
      return "Invalid operator";
  }
}

function clearInput(){
  var getValue= document.getElementById("input");
    if (getValue.value !="") {
        getValue.value = "";
    }
}

const numeralButtons = document.getElementsByClassName("numeral");
let input = document.getElementById("input");
for (let i = 0 ; i < numeralButtons.length; i++) {
  numeralButtons[i].addEventListener('click', function() {
    input.value = input.value + this.textContent ;
  });
}
let firstVariable="";
let secondVariable="";
let operator="";
const operationalButtons = document.getElementsByClassName("operational");
for(let i = 0; i < operationalButtons.length; i++){
  operationalButtons[i].addEventListener('click',function(event){
    const button = event.target;
    if(firstVariable==""){
    firstVariable=parseInt(input.value);
    operator=button.value;
    clearInput()
    }
    else{
    secondVariable=parseInt(input.value);
    clearInput()
    input.value=operate(firstVariable, operator, secondVariable) 
    firstVariable="";
    secondVariable="";
    operator=""; 
    }
    
  })
}