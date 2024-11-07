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

// I'd like to just get through this and move onto the next phase of this program so I'm just going to do the objective. No funny bizz.
// Not a lot done today. :(