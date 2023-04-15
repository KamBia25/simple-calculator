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
let firstVariable="";
let secondVariable="";
let operator="";
let condition=0;

function clearInput(){
  var getValue= document.getElementById("input");
    if (getValue.value !="") {
        getValue.value = "";
    }
}
function numberButton(event){
  
  input.value = input.value + event.target.textContent;
  let value= input.value;
  const dotButton = document.getElementById("button-.")
  dotButton.addEventListener('click', function(){
    input.value = input.value + this.textContent;
    dotButton.removeEventListener('click')
  })
if(condition==4){
  clearInput()
  condition=0;
  input.value = input.value + event.target.textContent;

}
if(condition==3){
  clearInput()
  condition-=1;
  input.value = input.value + event.target.textContent;

}
updateInputValue(value)
}
function updateInputValue(value) {
  if (value.length > maxLength) {
    value = value.substring(0, maxLength);
  }
  input.value = value;
}
const numeralButtons = document.getElementsByClassName("numeral");
let input = document.getElementById("input");
const maxLength = input.getAttribute("maxLength");
for (let i = 0 ; i < numeralButtons.length; i++) {
  numeralButtons[i].addEventListener('click', function(event){
    numberButton(event);
  });
  // numeralButtons[i].addEventListener('click', function() {
  //   input.value = input.value + this.textContent;

  //     const dotButton = document.getElementById("button-.")
  //     dotButton.addEventListener('click', function(){
  //       input.value = input.value + this.textContent;
  //       dotButton.removeEventListener('click')
  //     })
  //   if(condition==4){
  //     clearInput()
  //     condition=0;
  //     input.value = input.value + this.textContent;
  //   }
  //   if(condition==3){
  //     clearInput()
  //     condition-=1;
  //     input.value = input.value + this.textContent;
  //   }
  // });
}

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
      if(operator=="/" && secondVariable==0){
        input.value="ERROR"
        firstVariable="";
        secondVariable="";
        operator="";
        condition=4;
      }
      else{
      input.value=operate(firstVariable, operator, secondVariable)
      firstVariable=parseFloat(input.value); 
      secondVariable="";
      condition+=1;
      operator=button.value;
    }}
  })
}
const equalsButton = document.getElementById("button-=");
equalsButton.addEventListener('click',function(){
  if(firstVariable!=""  && operator!=""){
    if(operator=="/" && secondVariable==0){
      input.value="ERROR"
      firstVariable="";
      secondVariable="";
      operator="";
      condition=4;
    }
    else{
    secondVariable=parseFloat(input.value);
      clearInput()
      input.value=operate(firstVariable, operator, secondVariable) 
      firstVariable=parseFloat(input.value);
      operator="";  
  }
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


// const buttons = document.querySelectorAll('.my-button');
//   buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       const value = button.textContent;
//       console.log(`Button ${value} was clicked`);
//     });
//   });

//   ['mousemove', 'touchmove'].forEach(function(e){
//     window.addEventListener(e,mouseMoveHandler,false);
//   });

// ['mousemove', 'touchmove'].forEach(function(event){
//   window.addEventListener(event,mouseMoveHandler,false);
//   numberButton(event)
//  });
