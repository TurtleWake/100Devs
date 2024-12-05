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
        const disabledStyle = game.link === "#" ? 'style="pointer-events: none; opacity: 0.5;"' : "";
        bubbleGrid.innerHTML += `
            <article class="project-bubble">
                <a href="${game.link}" class="pop" ${disabledStyle}>
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

// Carousel Navigation Logic
const carousels = document.querySelectorAll('.carousel-view');
carousels.forEach(carousel => {
    const leftArrow = carousel.querySelector('.prev-arrow');
    const rightArrow = carousel.querySelector('.next-arrow');
    const bubbleGrid = carousel.querySelector('.bubble-grid');
    const audio = carousel.querySelector('.myAudio');
    const itemWidth = 174;
    const padding = 75;

    leftArrow.addEventListener('click', () => {
        bubbleGrid.scrollLeft -= (itemWidth + padding);
        if (audio) audio.play();
    });

    rightArrow.addEventListener('click', () => {
        bubbleGrid.scrollLeft += (itemWidth + padding);
        if (audio) audio.play();
    });
});


function initializeCarousel(carousel) {
    const bubbleGrid = carousel.querySelector('.bubble-grid');
    const leftArrow = carousel.querySelector('.prev-arrow');
    const rightArrow = carousel.querySelector('.next-arrow');
    const audio = carousel.querySelector('.myAudio');
    const bubbles = Array.from(bubbleGrid.children);
    const bubbleWidth = 150 + 20; // Bubble size + gap

    let currentIndex = 0;

    function updateActiveBubble() {
        bubbles.forEach((bubble, index) => {
            bubble.classList.toggle('active', index === currentIndex);
        });
    }

    function scrollToIndex() {
        bubbleGrid.scrollTo({
            left: currentIndex * bubbleWidth,
            behavior: 'smooth',
        });
        updateActiveBubble();
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            scrollToIndex();
            if (audio) audio.play();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < bubbles.length - 1) {
            currentIndex += 1;
            scrollToIndex();
            if (audio) audio.play();
        }
    });

    // Set initial active bubble
    updateActiveBubble();
}

// Initialize carousels
document.querySelectorAll('.carousel-view').forEach(initializeCarousel);
