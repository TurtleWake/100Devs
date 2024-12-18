// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let apple = true;
// alert(apple)

// Declare a variable, reassign it to your favorite color, and console log the value
let favoriteColor;
favoriteColor = "Teal";
console.log(favoriteColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNumsReturnSumOfFirstThreeDividedByFourth(n1, n2, n3, n4){
    return (n1 + n2 + n3) / n4;
}
fourNumsReturnSumOfFirstThreeDividedByFourth(3, 5, 6, 2)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function takeOneNumToPowerOfSecondNum(n1, n2){
    console.log(n1 ** n2)
}
takeOneNumToPowerOfSecondNum(3, 5)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function takesBooleanAndString(bool, string){
    if(bool){
        alert(string);
    } else {
        console.log(string)
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function takesFizzBuzz(n1){
   for(let i = 1; i <= n1; i++){
        if(n1 % 3 === 0 && n1 % 5 === 0){
            console.log("fizzbuzz")
            return;
        }else if(n1 % 5 === 0){
            console.log("buzz")
            return;
        }else if(n1 % 3 === 0){
            console.log("fizz")
            return;
        }else{
            console.log(i)
        }
   }
}

takesFizzBuzz(22)