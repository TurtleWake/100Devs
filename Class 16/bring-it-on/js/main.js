// *Variables*
// Create a variable and console log the value
let bringIt = "Spirit Fingers";

console.log(bringIt);

// Create a variable, add 10 to it, and alert the value
let brought = 3;
brought = brought + 10;
alert(brought);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtraction(n1,n2,n3,n4){
    alert(n1 - n2 - n3 - n4);
}

subtraction(200, 100, 5, 6);

// Create a function that divides one number by another and returns the remainder
function division(n1,n2){
    return n1 % n2;
}

console.log(division(13, 10));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function additionSum(n1,n2){
    if(n1 + n2 > 50){
        alert("Jumanji");
    }
}

additionSum(30, 21);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplication(n1,n2,n3){
    let sum = n1 * n2 * n3;
    if(sum % 3 === 0){
        alert("ZEBRA");
    }
}

multiplication(10, 2, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(w1, x){
    for( i = 1; i <= x; i++){
        console.log(w1)
    }
}

wordAndNumber("cowabunga", 10);