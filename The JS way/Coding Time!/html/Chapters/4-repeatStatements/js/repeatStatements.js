document.querySelector('#d1 button').addEventListener('click', handleButtonClick);
let count = parseInt(document.querySelector('#turnCount').innerText);

const h2 = document.querySelector('h2');
const pre1 = document.querySelector('#pre1');
const code = document.querySelector('#code1');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const d1 = document.querySelector('#d1');
const d2 = document.querySelector('#d1');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');


function removePreviousInfo(){
    document.querySelector("h2").innerText = "";
    document.querySelector("#p1").innerText = "";
    document.querySelector("#p2").innerText = "";
    document.querySelector("#p3").innerText = "";
    document.querySelector("#d1").innerText = "";
    document.querySelector("#d2").innerText = "";
}

// ****Carousel**** //

function handleButtonClick() {
    const inputField = document.querySelector('#userCount');
    if (inputField) {
        const newCount = parseInt(inputField.value);
        
        if (!isNaN(newCount) && newCount > 0) {
            count = newCount;
            document.querySelector('#turnCount').innerText = count; 
            countDown(); 
        } else {
            alert("Please enter a valid positive number!");
        }
    } else {
        countDown();
    }
}

function countDown() {
    clearInterval(window.intervalId);

    window.intervalId = setInterval(() => {
        if (count > 0) {
            count--;
            document.querySelector('#turnCount').innerText = count; 
        } else {
            clearInterval(window.intervalId); 
            showInputField(); 
        }
    }, 1000);
}

function showInputField() {
    document.querySelector('#turnCount').innerHTML = ``;
    document.querySelector('#d2').innerHTML = `
        <input id='userCount' placeholder='Enter new count'>
    `;
    document.querySelector('#p3').innerHTML = `<i class='bx bxs-pear' id='nextPage'></i>`
    document.querySelector('#nextPage').addEventListener('click', parityPage);
}

// ****Parity**** //

function parityPage(){
    removePreviousInfo();
    h2.innerText = 'Parity'
    p1.innerText = 'Check the following program that shows even numbers (divisible by 2) between 1 and 10.'
    pre1.classList.toggle('hidden')
    code.innerHTML = `
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log('\${i}\ is even');
        }
    }
  `
    p2.innerText = 'Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.'
    
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log('${i} is even');
        }
    }
}

// Let's try this the prep way. 
// P
// R
// E
// P



