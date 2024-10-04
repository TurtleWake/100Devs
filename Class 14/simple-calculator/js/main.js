document.querySelector('#zero').addEventListener('click', makeZero);
document.querySelector('#addThree').addEventListener('click', addThree);
document.querySelector('#addNine').addEventListener('click', addNine);
document.querySelector('#minusTwo').addEventListener('click', minusTwo);
document.querySelector('#random').addEventListener('click', random);

let total = 0;

function makeZero(){
  total = 0;
  document.querySelector('#placeToPutResult').innerText = total;
}

function addThree(){
  total = total + 3;
  document.querySelector('#placeToPutResult').innerText = total;
}

function addNine(){
  total = total + 9;
  document.querySelector('#placeToPutResult').innerText = total;
}

function minusTwo(){
  total = total - 2;
  document.querySelector('#placeToPutResult').innerText = total;
}




function random() {
  const randomOperator = [
    "+",
    "-",
    "/",
    "*",
  ];

  const selectedOperator = randomOperator[Math.floor(Math.random() * randomOperator.length)];
  
  const randomNumber = Math.floor(Math.random() * 100);
  
  switch (selectedOperator) {
    case "+":
      total = total + randomNumber;
      break;
    case "-":
      total = total - randomNumber;
      break;
    case "*":
      total = total * randomNumber;
      break;
    case "/":
      total = total / randomNumber;
      break;
    default:
      console.log("Invalid operator");
  }
  
  document.querySelector('#placeToPutResult').innerText = total;
  
  console.log("Selected Operator:", selectedOperator);
  console.log("Random Number:", randomNumber);
  console.log("Updated Total:", total);
}
