




// Following day

document.querySelector("#d1").innerHTML = 
`
<input type='text' id='userInput' placeholder='Day...'>
<button id='usersDayChoice'><i class='bx bxs-calendar-check'></i></button>
`
document.querySelector("#usersDayChoice").addEventListener("click", nextDay);

function nextDay(){
    let userDay = document.querySelector("#userInput").value.toLowerCase();
    console.log("click")
    const weekDays = [
        "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
    ];

    if (userDay === weekDays){
        return 
    }
}