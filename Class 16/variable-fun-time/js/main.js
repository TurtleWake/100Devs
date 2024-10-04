//--- Easy
//create a variable and assign it a number
let number = 30;
//minus 10 from that number
number = number - 10;
//print that number to the console
console.log("Easy: ", number);
//--- Medium
//create a variable that holds a value from the input
let ddr = document.querySelector("#danceDanceRevolution").value;
//add 25 to that number
ddr = ddr + 25;
//alert that number
alert(ddr)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', logSum);

function logSum(){
    console.log(ddr + Number(number));
}