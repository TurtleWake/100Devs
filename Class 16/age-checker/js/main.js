//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', ageChecker)

function ageChecker(){
    let result = document.querySelector('#results');
    let age = document.querySelector("#ageInput").value
    console.log("Age: ", age);
    console.log("Result: ", result);
    //If under 16, tell them they can not drive
    if(age < 16){
        result.innerText = "You can't drive!"
    }
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if(age < 18){
        result.innerText = "You can hate from outside the club, because you can't even get in yet."
    }
    //If under 21, tell them they can not drink
    else if(age < 21){
        result.innerText = "You can't drink."
    }
    //If under 25, tell them they can not rent cars affordably
    else if(age < 25){
        result.innerText = "You can't rent cars affordably"
    }
    //If under 30, tell them they can not rent fancy cars affordably
    else if(age < 30){
        result.innerText = "You can't rent fancy cars affordably"
    }
    //If over 30, tell them there is nothing left to look forward too
    else if(age >= 30){
        result.innerText = "There's nothing left to look forward too."
    } else{
        result.innerText = "That's not a real age -_-"
    }
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
