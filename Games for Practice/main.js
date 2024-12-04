const tutorialGames = [
    { name: "Rock Paper Scissors", link: "./Tutorial-Games/RockPaperScissors/rock-paper-scissors.html" },
    { name: "Memory Game", link: "#" },
    { name: "Whac-a-mole", link: "#" },
    { name: "Breakout", link: "#" },
    { name: "Frogger", link: "#" },
    { name: "Connect Four", link: "#" },
    { name: "Space Invaders", link: "#" }, 
];

const bubbleGrid = document.querySelector('.bubble-grid');
tutorialGames.forEach(game => {
    bubbleGrid.innerHTML += `
    <article class="project-bubble">
        <a href="${game.link}" class="pop" ${game.link === "#" ? 'style="pointer-events: none; opacity: 0.5;"' : ""}>
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
