//Create a function that grabs the number of snacks from the input and tells you to stop that many times



// Psuedo Code

// Set up a event listener on click for help
document.querySelector("#help").addEventListener('click', snackStopper);
// Create function 
function snackStopper(){ 
// Get input value
    let howManySnacks = Number(document.querySelector("#howManySnacks").value);
// Make sure we clear the previous inputs
    document.querySelector("#stops").innerText = ""
// Make loop run input value times
    for(let i = 1; i <= howManySnacks; i++){
        document.querySelector("#stops").innerText += " Stop!"
    }
}

