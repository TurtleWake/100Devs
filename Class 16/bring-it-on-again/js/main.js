// // *Variables*
// // Declare a variable, assign it a value, and alert the value
// let bringItOnAgain = 'Broughten';

// alert(bringItOnAgain);

// // Create a variable, divide it by 10, and console log the value
// let divided = 100;
// divided = divided / 10;
// console.log("Divided: ", divided);

// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product
// function multipliesThreeAndAlerts(n1,n2,n3){
//         let product = n1 * n2 * n3;
//         alert(product)
// }

// multipliesThreeAndAlerts(3,13,89);

// // Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// function addFirstTwoNumsAndSubtractNextTwo(n1,n2,n3,n4){
//     let product = (n1 + n2) - n3 - n4;
//     console.log("Add Two Sub Two: ", product);
// }

// addFirstTwoNumsAndSubtractNextTwo(13,10,4,6);

// // *Conditionals*
// // Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function startWith100AddFirstSubSecondDivideThird(n1,n2,n3){
//     let product = (100 + n1 - n2) / n3;
//     if(product > 25){
//         console.log("WE HAVE A WINNA")
//     }
// }

// startWith100AddFirstSubSecondDivideThird(23,10,2);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
document.querySelector('#checkButton').addEventListener('click', dayOfTheWeek)


function dayOfTheWeek(){
    let day = document.querySelector("#inputDay").value.toLowerCase();
    console.log("Day: ", day);
    let sayWeekday = document.querySelector("#sayWeekdayHere");
    if(day === 'saturday' || day === 'sunday'){
        sayWeekday.innerText = "Weekend!"
    }else if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'){
        sayWeekday.innerText = "Week day."
    }else{
        alert("Try Again!");
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countBy3(n1){
    let value = n1;
    for( let i = 1; i < value; i += 3){
        console.log("Values: ", i);
    }
}

countBy3(30);