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
    input.value = input.value + this.textContent;

      const dotButton = document.getElementById("button-.")
      dotButton.addEventListener('click', function(){
        input.value = input.value + this.textContent;
        dotButton.removeEventListener('click')
      })

    if(condition==3){
      clearInput()
      condition-=1;
      input.value = input.value + this.textContent;
    }
  });
}
let firstVariable="";
let secondVariable="";
let operator="";
let condition=0;
const operationalButtons = document.getElementsByClassName("operational");
for(let i = 0; i < operationalButtons.length; i++){
  operationalButtons[i].addEventListener('click',function(event){
    const button = event.target;
    if(firstVariable==""  && condition==0){
    firstVariable=parseFloat(input.value);
    operator=button.value;
    clearInput()
    condition+=2;
    }
    else if (firstVariable!="" && condition==2 && operator==""){
      operator=button.value;
      clearInput()
      condition+=1;
    }
    else if(condition==2){
      secondVariable=parseFloat(input.value);
      clearInput()
      input.value=operate(firstVariable, operator, secondVariable)
      firstVariable=parseFloat(input.value); 
      secondVariable="";
      condition+=1;
      operator=button.value;
    }
  })
}
const equalsButton = document.getElementById("button-=");
equalsButton.addEventListener('click',function(){
  if(firstVariable!=""  && operator!=""){
    secondVariable=parseFloat(input.value);
      clearInput()
      input.value=operate(firstVariable, operator, secondVariable) 
      firstVariable=parseFloat(input.value);
      operator="";  
  }
})

const clear = document.getElementById("clearButton")
clear.addEventListener('click',function(){
  clearInput()
  firstVariable="";
  secondVariable="";
  operator="";
  condition=0;
})