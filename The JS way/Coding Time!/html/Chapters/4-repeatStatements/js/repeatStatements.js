// Initial setup for button click event to start the countdown
document.querySelector('#d1 button').addEventListener('click', handleButtonClick);
let count = parseInt(document.querySelector('#turnCount').innerText);

function handleButtonClick() {
    // Check if the input field exists and has a valid number
    const inputField = document.querySelector('#userCount');
    if (inputField) {
        const newCount = parseInt(inputField.value);
        
        if (!isNaN(newCount) && newCount > 0) {
            count = newCount; // Set count to the new value
            document.querySelector('#turnCount').innerText = count; // Update display
            countDown(); // Start the countdown with the new value
        } else {
            alert("Please enter a valid positive number!"); // Alert if the input is invalid
        }
    } else {
        // Start countdown if no input field is present
        countDown();
    }
}

function countDown() {
    // Clear any existing interval to prevent overlap
    clearInterval(window.intervalId);

    // Start the countdown with setInterval
    window.intervalId = setInterval(() => {
        if (count > 0) {
            count--; // Decrease the count by 1
            document.querySelector('#turnCount').innerText = count; // Update displayed count
        } else {
            clearInterval(window.intervalId); // Stop the countdown at 0
            showInputField(); // Display the input box for a new countdown value
        }
    }, 1000);
}

function showInputField() {
    // Replace #turnCount content with an input box for a new countdown
    document.querySelector('#turnCount').innerHTML = `
        <input id='userCount' placeholder='Enter new count'>
    `;
}
