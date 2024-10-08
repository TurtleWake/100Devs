//Given a number as an input, print out every interger from 1 to that number. However, when the integer is divisible by 3, print out "Fizz"; when it's divisible by 5, print out "Buzz"; when it's divisible by both 3 and 5, print out "Fizz Buzz".

// PREP
// num -> 1 to that num -> div 3 fizz; div 5 buzz; div 3/5 fizz buzz
// always int; pos; no floats; no funny business; int always
// print to console; notes



// print out every interger from 1 to that number
function fizzBuss(){
    let number = userInput;

    if(userInput % 3 === 0 && userInput % 5 === 0){
    // when it's divisible by both 3 and 5 print out "Fizz Buzz" 
        console.log("Fizz Buzz")

    }else if(userInput % 3 === 0){
    // when the integer is divisible by 3, print out "Fizz"
        console.log("Fizz")


    
    }else if(userInput % 5 === 0){
    // when it's divisible by 5 print out "Buzz";
        console.log("Buzz")

    }else{
        console.log("Not compatible")
    }
}

