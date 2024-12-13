const gameStart = document.querySelector('#start');
const startButton = new Audio('../../Assets/soundscrate-Sword_Swing_9.wav');
const gameContainer = document.querySelector('#gameContainer');

// Game Space
const gameSpace = document.querySelector('./GameFiles/runningGame.html');

// Characters
const fireWizard = './Characters/Fire vizard/fireWizard.html'

gameStart.addEventListener('click', ()=>{
    startButton.play();
    gameStart.remove();
    gameSpace.innerHTML = `${fireWizard}`
})