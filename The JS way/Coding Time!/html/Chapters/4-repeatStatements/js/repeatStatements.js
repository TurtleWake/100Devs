document.querySelector('#d1 button').addEventListener('click', countDown);

function countDown() {
    let count = parseInt(document.querySelector('#turnCount').innerText);

    const intervalId = setInterval(() => {
        if (count > 0) {
            count--;
            document.querySelector('#turnCount').innerText = count;
        } else if(count === 0){
            clearInterval(intervalId);
            count.innerHTML = `<input id='userTurnCount' placeholder='#'>`
        } else {
            clearInterval(intervalId); 
        }
    }, 1000); 
}


