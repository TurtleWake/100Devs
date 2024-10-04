//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtraction(){
    let difference = 23 - 10;
    alert(difference)
}

subtraction();
//create a function that divides three numbers and console logs the quotient
function division(){
    let divisable = 18 / 2 / 3;
    console.log("Division: ", divisable);
}

division();

//create a function that multiplys three numbers and returns the product
function multiply(){
    let multiplication = 6.5 * 2 * 1;
    return multiplication;
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takes3(){
    let number1 = 3;
    let number2 = 13;
    let number3 = 23;

    let addition = number1 + number2;
    let remainder = addition % number3; 

    console.log("Remainder: ", remainder);
}

takes3();

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takes4(){
    let number1 = 3;
    let number2 = 13;
    let number3 = 23;
    let number4 = 8;

    let multiplied = number1 * number2;
    
    if(multiplied > 100){
        let sum = multiplied + number3 + number4;
        console.log("Sum > 100: ", sum);
    } else if(multiplied < 100){
        let difference = number3 - number4;
        let sum = multiplied - difference;
        console.log("Sum < 100: ", sum);
    } else if(multiplied === 100){
        let multipliedAgain = number1 * number2 * number3;
        console.log("Is 100: ", multipliedAgain);
    }
}

takes4();