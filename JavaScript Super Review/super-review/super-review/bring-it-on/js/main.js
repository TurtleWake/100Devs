// *Variables*
// Create a variable and console log the value
let thisOne = "That One";
console.log("This One or", thisOne)

// Create a variable, add 10 to it, and alert the value
let addTen = 10;
addTen += 10;
console.log("Add Ten = ", addTen)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(n1, n2, n3, n4){
    return n1 - n2 - n3 - n4;
}
console.log("Subtract Four = ", subtractFour(30, 10, 3, 4))

// Create a function that divides one number by another and returns the remainder
function divideTwo(n1, n2){
    return n1 / n2;
}
console.log("Divide Two = ", divideTwo(30, 3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwoAndSumIsGreater(n1, n2){
    let sum = n1 + n2;

    if(sum > 50){
        console.log('Jumanji')
    }
}
addsTwoAndSumIsGreater(25, 30)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeAndDivideByThree(n1, n2, n3){
    let product = n1 * n2 * n3;
    if(product % 3 === 0){
        console.log("Zebra")
    }
}

multiplyThreeAndDivideByThree(3, 3, 3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(n1, w1){
    for(let i = 1; i <= n1; i++){
        console.log(w1)
    }
}

wordAndNumber(5, "apple")