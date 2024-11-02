document.querySelector('#d1 button').addEventListener('click', countDown);

function countDown() {
    let count = parseInt(document.querySelector('#turnCount').innerText);

    const intervalId = setInterval(() => {
        if (count > 0) {
            count--;
            document.querySelector('#turnCount').innerText = count;
        } else if (count === 0) {
            clearInterval(intervalId);
            document.querySelector('#turnCount').innerHTML = `<input id='userTurnCount' placeholder='#'>`;
        } else {
            clearInterval(intervalId);
            userCountDown();
        }
    }, 1000);
}


function userCountDown() {
    let userCount = parseInt(document.querySelector('#userTurnCount').innerText);

    const intervalId = setInterval(() => {
        if (userCount > 0) {
            userCount--;
            document.querySelector('#userTurnCount').innerText = count;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}