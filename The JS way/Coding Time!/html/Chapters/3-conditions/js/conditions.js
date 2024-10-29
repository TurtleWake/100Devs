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
    code.innerText = "";
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
    p1.innerText = 'Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases. Put in 3 and 3 to move onto the next problem!'
    d1.innerHTML = 
    `
    <input id='number1'>
    <p id='dynamicResponse'></p>
    <input id='number2'>
    `
    document.querySelector('#number1').addEventListener('input', dynamicResponse);
    document.querySelector('#number2').addEventListener('input', dynamicResponse);
};



function dynamicResponse(){
    let input1 = parseFloat(document.querySelector('#number1').value);
    let input2 = parseFloat(document.querySelector('#number2').value);

    console.log("Input1: ", input1);
    console.log("Input2: ", input2);

        if(input1 > input2){
            result = '>'
        }else if(input1 < input2){
            result = '<'
        }else if(input1 === 3 && input2 === 3){
            result = '='
            p2.innerHTML = `<i class='bx bxs-shower' id='shower'></i> Click me to move on!`
            document.querySelector('#shower').addEventListener('click', finalValuesShower)
        }else if(input1 === input2){
            result = '='
        }else{
            result = 'Add #'
        }

        document.querySelector('#dynamicResponse').innerText = result;
        
}



function finalValuesShower(){
    removePreviousInfo();
    h2.innerText = 'Final values';
    p1.innerText = 'Take a look at the following program.';
    pre1.classList.toggle('hidden');
    code.innerHTML = 
    `
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
nb1 = nb3 * 2;
} else {
nb1++;
if (nb2 > nb3) {
    nb1 += nb3 * 3;
} else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
}
}
console.log(nb1, nb2, nb3);
    `

    p2.innerText = 'Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.';
    d1.innerHTML = `
    
    <table border="1">
    <thead>
        <tr>
            <th>Initial values</th>
            <th>nb1 final value</th>
            <th>nb2 final value</th>
            <th>nb3 final value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nb1=nb2=nb3=4</td>
            <td>0</td>
            <td>4</td>
            <td>12</td>
        </tr>
        <tr>
            <td>nb1=4, nb2=3, nb3=2</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
        </tr>
        <tr>
            <td>nb1=2, nb2=4, nb3=0</td>
            <td>3</td>
            <td>4</td>
            <td>0</td>
        </tr>
        <tr>
            <td>
                nb1=<input id='inputNB1'>, 
                nb2=<input id='inputNB2'>, 
                nb3=<input id='inputNB3'>
            </td>
            <td id="nb1Final"></td>
            <td id="nb2Final"></td>
            <td id="nb3Final"></td>
        </tr>
    </tbody>
</table>
`

    

    p3.innerText = 'Check your predictions by executing the program.'

    document.querySelector('#inputNB1').addEventListener('input', chartAdjustmentOnTheFly);
    document.querySelector('#inputNB2').addEventListener('input', chartAdjustmentOnTheFly);
    document.querySelector('#inputNB3').addEventListener('input', chartAdjustmentOnTheFly);
}


function chartAdjustmentOnTheFly(){
    let nb1 = parseFloat(document.querySelector('#inputNB1').value);
    let nb2 = parseFloat(document.querySelector('#inputNB2').value);
    let nb3 = parseFloat(document.querySelector('#inputNB3').value);

    if (isNaN(nb1)){
        nb1 = 0
    }
    if (isNaN(nb2)){
        nb2 = 0
    }
    if (isNaN(nb3)){
        nb3 = 0
    }

    if (nb1 > nb2) {
        nb1 = nb3 * 2;
        } else {
        nb1++;
        if (nb2 > nb3) {
            nb1 += nb3 * 3;
        } else {
            nb1 = 0;
            nb3 = nb3 * 2 + nb2;
        }
    }
    
    document.querySelector('#nb1Final').textContent = nb1;
    document.querySelector('#nb2Final').textContent = nb2;
    document.querySelector('#nb3Final').textContent = nb3;

    if (!isNaN(nb1) && !isNaN(nb2) && !isNaN(nb3)) {
        p4.innerHTML = "<i class='bx bxs-calendar' id='moveToCalendar'></i> Move onto `Number of days in a month`";
        document.querySelector('#moveToCalendar').addEventListener('click', daysInAMonth);
    }
    
}


function daysInAMonth(){
    removePreviousInfo();
    pre1.classList.toggle('hidden');

    h2.innerText = 'Number of days in a month'
    p1.innerText = 'Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.'

    d1.innerHTML = 
    `
    <input id='userMonth' placeholder='Insert month here...'>
    <button id='howManyDays'>How many days?</button>
    `

    document.querySelector('#howManyDays').addEventListener('click', checkHowManyDays);
}

function checkHowManyDays() {
    const months = [
        { num: 1, name: "January", days: 31 },
        { num: 2, name: "February", days: 28 },
        { num: 3, name: "March", days: 31 },
        { num: 4, name: "April", days: 30 },
        { num: 5, name: "May", days: 31 },
        { num: 6, name: "June", days: 30 },
        { num: 7, name: "July", days: 31 },
        { num: 8, name: "August", days: 31 },
        { num: 9, name: "September", days: 30 },
        { num: 10, name: "October", days: 31 },
        { num: 11, name: "November", days: 30 },
        { num: 12, name: "December", days: 31 }
    ];

    const userInput = document.getElementById('userMonth').value.trim(); 
    console.log("User's Input: ", userInput);

    const userInputNumber = parseInt(userInput, 10);
    const monthByNumber = months.find(m => m.num === userInputNumber);
    
    if(userInput === "Next") {
        followingSecond();
        return;
    }

    if (!isNaN(userInputNumber) && monthByNumber) {
        p3.innerText = `${monthByNumber.name} has ${monthByNumber.days} days in it!`;
    }else {
        const monthByName = months.find(m => m.name.toLowerCase() === userInput.toLowerCase());

        if (monthByName) {
            p3.innerText = `${monthByName.name} has ${monthByName.days} days in it!`;
        } else {
            p3.innerText = "Please enter a valid month number (1-12) or month name.";
        }
    }    
}

function followingSecond(){
    removePreviousInfo();
    h2.innerText = 'Following second';
    p1.innerText = 'Write a program that asks for a time under the form of three information (hours, minutes, seconds).'
    p2.innerText = 'The program calculates and shows the time one second after. Incorrect inputs must be taken into account.This is not as simple as it seems... Look at the following results to see for yourself:'
    d1.innerHTML = `
    <ul id='seconds'>
        <li>14h17m59s should give 14h18m0s</li>
        <li>6h59m59s should give 7h0m0s</li>
        <li>23h59m59s should give 0h0m0s (midnight)</li>
    </ul>
    `
    p3.innerHTML = 
    `
    <input id='userTimeInput' placeholder='00h00m00s insert your time...'>
    <button id='increaseTime'>Check</button>
    `

    document.querySelector("#increaseTime").addEventListener("click", increaseByOne);
}

function isValidTimeFormat(userInput) {
    const timePattern = /^(2[0-3]|[01]?[0-9])h?\s*(5[0-9]|[0-4]?[0-9])m?\s*(5[0-9]|[0-5]?[0-9])s?$/;
    return timePattern.test(userInput.trim());
}

function increaseByOne() {
    let userTime = document.querySelector("#userTimeInput").value;
    
    if (!isValidTimeFormat(userTime)) {
        console.error("Invalid time format. Please use the format 'HHh MMm SSs'.");
        alert("Invalid time format. Please use the format 'HHh MMm SSs'.");
        return; 
    }

    let [hourStr, minStr, secStr] = userTime.split(/h|m|s/);
    let hour = parseInt(hourStr) || 0; 
    let min = parseInt(minStr) || 0;   
    let sec = parseInt(secStr) || 0;   
    console.log("Hours: ", hour);
    console.log("Min: ", min);
    console.log("Sec: ", sec);

    sec += 1;

    if (sec === 60) {
        sec = 0; 
        min += 1; 
    }
    if (min === 60) {
        min = 0; 
        hour += 1; 
    }
    if (hour === 24) {
        hour = 0;
    }

    result = `${hour}h${min}m${sec}s`

    p4.innerText = result;
}


