// Following day
const h2 = document.querySelector('h2');
const pre1 = document.querySelector('#pre1');
const code = document.querySelector('#code1');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const d1 = document.querySelector('#d1');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');

document.querySelector("#d1").innerHTML = 
`
<input type='text' id='userInput' placeholder='Day...'>
<button id='usersDayChoice'><i class='bx bxs-calendar-check'></i></button>
`
document.querySelector("#usersDayChoice").addEventListener("click", nextDay);

function removePreviousInfo(){
    h2.innerText = "";
    p1.innerText = "";
    p2.innerText = "";
    p3.innerText = "";
    p4.innerText = "";
    d1.innerText = "";
}

function nextDay(){
    let userDay = document.querySelector("#userInput").value.toLowerCase();
    const weekDays = [
        "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
    ];
    
    const currentIndex = weekDays.indexOf(userDay);

    if(currentIndex === -1){
        p3.innerHTML = "Invalid day entered. Please enter a valid day of the week.";
    } else{
        const nextDayIndex = (currentIndex + 1) % weekDays.length;

        p3.innerHTML = "The next day of the week is " + 
            weekDays[nextDayIndex].charAt(0).toUpperCase() + weekDays[nextDayIndex].slice(1);

        p4.innerHTML = 
        `
        Let's move on to the next problem! <i class='bx bxs-right-arrow' id='nextArrow'></i>
        `

        document.querySelector('#nextArrow').addEventListener('click', nextPage); 
    }
}

function nextPage(){
    removePreviousInfo();
    h2.innerText = 'Number comparison'
    p1.innerText = 'Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.'
    d1.innerHTML = 
    `
    <input id='number1'>
    <p>Compared to</p>
    <input id='number2'>
    `
}