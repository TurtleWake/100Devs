document.querySelector('#d1 button').addEventListener('click', countDown);
let count = document.querySelector('#turnCount').innerText;

console.log('Count: ', count)

function countDown(){
    setInterval(() => {
        if(count > 0){
            count--;
            document.querySelector('#turnCount').innerText = count;
        } else if (count === 0){
            document.querySelector('#turnCount').innerHTML = `<input id='userCount'>`
        }
    }, 1000)
}

// Tomorrow we back on track, let's go! 