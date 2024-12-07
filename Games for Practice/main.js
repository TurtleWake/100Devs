// Game Data
const gamesData = {
    tutorialGames: [
        { name: "Rock Paper Scissors", link: "./Tutorial-Games/RockPaperScissors/rock-paper-scissors.html" },
        { name: "Memory Game", link: "#" },
        { name: "Whac-a-mole", link: "#" },
        { name: "Breakout", link: "#" },
        { name: "Frogger", link: "#" },
        { name: "Connect Four", link: "#" },
        { name: "Space Invaders", link: "#" },
    ],
    reimaginedGames: [
        { name: "Elemental Clash", link: "./Reimagined-Games/ElementClash/element-clash.html" },
        { name: "Memory Game", link: "#" },
        { name: "Whac-a-mole", link: "#" },
        { name: "Breakout", link: "#" },
        { name: "Frogger", link: "#" },
        { name: "Connect Four", link: "#" },
        { name: "Space Invaders", link: "#" },
    ],
};

// Render Function
function renderGames(gridId, games) {
    const bubbleGrid = document.querySelector(`#${gridId}`);
    if (!bubbleGrid) return;
    games.forEach(game => {
        bubbleGrid.innerHTML += `
            <article class="project-bubble">
                <a href="${game.link}">
                    <div class="bubble">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <p>${game.name}</p>
            </article>
        `;
    });
}

// Render Tutorial and Reimagined Games
renderGames('tutorialGames', gamesData.tutorialGames);
renderGames('reimaginedGames', gamesData.reimaginedGames);

const leftArrow = document.querySelector('.prev-arrow');
const rightArrow = document.querySelector('.next-arrow');
const audio = document.querySelector(".myAudio");

leftArrow.addEventListener('click', ()=>{
    audio.play();
})
rightArrow.addEventListener('click', ()=>{
    audio.play();
})