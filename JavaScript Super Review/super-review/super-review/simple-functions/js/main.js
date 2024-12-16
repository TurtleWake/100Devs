//---Easy
//create a function that subtracts two numbers and alerts the difference
function subNums(a, b){
    let result = a - b;
    console.log( result)
}
subNums(28, 5)

//create a function that divides three numbers and console logs the quotient
function divideThreeNums(num1, num2, num3){
    let result = num1 / num2 / num3;
    console.log(result)
}
divideThreeNums(33, 11, 1)

//create a function that multiplys three numbers and returns the product
function multiplyThree(n1, n2, n3){
    return n1 * n2 * n3;
}
console.log(multiplyThree(3, 3, 3))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function returnRemainder(numb1, numb2, numb3){
    let result = (numb1 + numb2) % numb3;
    console.log(result)
}
returnRemainder(3, 5, 10)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takesFour(n1, n2, n3, n4){
    let product = (n1 * n2)

    if( product > 100 ){
        product = product + (n3 + n4)
    } else if ( product < 100 ){
        product = product - (n3 + n4)
    } else {
        product = (n1 * n2 * n3) % n4
    }

    console.log(product)
}

takesFour(10, 3, 3, 3)