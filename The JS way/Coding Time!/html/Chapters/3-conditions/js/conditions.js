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

    let nb1 = '';
    let nb2 = '';
    let nb3 = '';

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
    <span>nb1 = <span><input id='inputNB1'>
    <span>nb2 = <span><input id='inputNB2'>
    <span>nb3 = <span><input id='inputNB3'>
    
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
            <td>${nb1}</td>
            <td>${nb2}</td>
            <td>${nb3}</td>
        </tr>
        <tr>
            <td>nb1=4, nb2=3, nb3=2</td>
            <td>${nb1}</td>
            <td>${nb2}</td>
            <td>${nb3}</td>
        </tr>
        <tr>
            <td>nb1=2, nb2=4, nb3=0</td>
            <td>${nb1}</td>
            <td>${nb2}</td>
            <td>${nb3}</td>
        </tr>
        <tr>
            <td>nb1=, nb2=4, nb3=0</td>
            <td>${nb1}</td>
            <td>${nb2}</td>
            <td>${nb3}</td>
        </tr>
    </tbody>
</table>
`
    p3.innerText = 'Check your predictions by executing the program.'
}
