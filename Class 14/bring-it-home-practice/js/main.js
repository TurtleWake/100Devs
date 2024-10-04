// *Variables* //

// Create a variable and console log the value
let value = "golden";
console.log("What is the value? ", value);

// Create a variable, add 10 to it, and alert the value
let bigValue = 10;
bigValue = bigValue + 10;
alert(bigValue);

// *Functions* //

// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(){
    const subtraction = 89 - 3 - 13 - 7;
    alert("Subtraction = " + subtraction);
}

subtractFour();

// Create a function that divides one number by another and returns the remainder
function division(){
    let itDivides = 13 % 10;
    console.log("DIVIDED: ", itDivides); 

    return itDivides;
}

division();

// *Conditionals* //

// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(){
   let manji = 30 + 59;
   
   if(manji > 50){
    alert("Jumanji!")
   }
}

jumanji();


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(){
    let multiplied = 3 * 10 * 13;
    if (multiplied % 3 === 0){
        alert("ZEBRA")
    }
}

multiply();