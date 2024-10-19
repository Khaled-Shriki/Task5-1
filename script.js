const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const operator = document.querySelector('.operator');
const calculateBtn = document.querySelector('.cal');
const resultSpan = document.querySelector('.result');
function calculate(){
   let result = 0
   if(operator.value == "+"){
      result = Number(firstNumber.value) + Number(secondNumber.value);
   } else if(operator.value == "-"){
      result = Number(firstNumber.value) - Number(secondNumber.value);
} else if(operator.value == "*"){
   result =Number(firstNumber.value) * Number(secondNumber.value);
} else if(operator.value == "/"){
   result =Number(firstNumber.value) / Number(secondNumber.value);
}
 resultSpan.innerHTML = result;
}
calculateBtn.addEventListener("click",calculate)