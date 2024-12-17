//Create a conditonal that checks their age
const ageCheck = document.querySelector('h1');
const result = document.querySelector('p');

ageCheck.addEventListener('click', ()=>{
    const age = Number(document.querySelector('#danceDanceRevolution').value);
    console.log(age)
    if( age < 16 ){
        //If under 16, tell them they can not drive
        result.innerText = "You cannot drive yet."
    } else if( age < 18 ){ 
        //If under 18, tell them they can't hate from outside the club, because they can't even get in
        result.innerText = "You can't hate from outside the club, because you can't even get in!"
    } else if( age < 21 ){
        //If under 21, tell them they can not drink
        result.innerHTML = "You can't drink yet."
    } else if( age < 25 ){
        //If under 25, tell them they can not rent cars affordably
        result.innerHTML = "You can't rent cars affordably."
    } else if( age <= 30 ){
        //If under 30, tell them they can not rent fancy cars affordably
        result.innerHTML = "You can't rent fancy cars affordably"
    } else{
        //If under over 30, tell them there is nothing left to look forward too
        result.innerHTML = "There's nothing left to look forward to. :("
    }
})
