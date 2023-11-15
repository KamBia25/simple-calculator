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
 function checkNumber(event){
  let ASCInumber = event.which ? event.which :  event.keyCode;
  console.log(event.keyCode)
  if (ASCInumber > 31 && (ASCInumber < 48 || ASCInumber > 57 || ASCInumber==46)) return false;
  return true;
 }
 
 const numeralButtons = document.getElementsByClassName("numeral");
 let input = document.getElementById("input");
 for (let i = 0 ; i < numeralButtons.length; i++) {
   numeralButtons[i].addEventListener('click', function() {
     input.value = input.value + this.textContent;
 
       const dotButton = document.getElementById("button-.")
       dotButton.addEventListener('click', function(){
        if (input.value.includes(".")){
          dotButton.removeEventListener('click',true)
         }
         else
         input.value = input.value + this.textContent;
         
         
       },{once : true})
      
     if(condition==4){
       clearInput()
       condition=0;
       input.value = input.value + this.textContent;
     }
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
   operationalButtons[i].addEventListener('click',function(event)
   {
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
  }
  )}
    
    
input.addEventListener("keydown", function(event){
  
  if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/')
  {
    console.log(event.key)
    
    
    {
      
      if(firstVariable==""  && condition==0){
      firstVariable=parseFloat(input.value);
     
      operator=event.key;
      console.log(operator)
      clearInput()
      condition+=2;
      }
      else if (firstVariable!="" && condition==2 && operator==""){
        operator=event.key;
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
        operator=event.key;
      }}
      
    }
      
    
       
  }
})

input.addEventListener('keydown', function(event){
  if(event.key==="."){
    if (input.value.includes(".")){
      input.removeEventListener('keydown',true)
     }
     else
     input.value = input.value + event.key;
     
     
   }})
  
 




 const equalsButton = document.getElementById("button-=");
 equalsButton.addEventListener('click',function(){
   if(firstVariable!=""  && operator!=""){
    secondVariable=parseFloat(input.value); 
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
       secondVariable="";
       firstVariable="";
       condition=0;
       
   }
 }
 })

 input.addEventListener("keydown", function(event){
  if(event.key === '='){
    if(firstVariable!=""  && operator!=""){
      secondVariable=parseFloat(input.value); 
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
         secondVariable="";
         firstVariable="";
         condition=0;
         
     }
   }
  }
 }
 )
 const clear = document.getElementById("clearButton")
 clear.addEventListener('click',function(){
   clearInput()
   firstVariable="";
   secondVariable="";
   operator="";
   condition=0;
 })

 const backspace = document.getElementById("backspaceButton")
 backspace.addEventListener('click',function(){
var numbersFromInput = input.value;
 console.log(numbersFromInput);
 let numberToArray = num => Number(num); 
      
    var arrayFromInput= Array.from(String(numbersFromInput), numberToArray);
 console.log(arrayFromInput);
 arrayFromInput.pop();
 console.log(arrayFromInput)
 numbersFromInput = arrayFromInput.join('');

 console.log(numbersFromInput) 
 input.value =  numbersFromInput;
 });

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

