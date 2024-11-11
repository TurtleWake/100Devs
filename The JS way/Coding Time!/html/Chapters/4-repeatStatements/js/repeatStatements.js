document.querySelector('#d1 button').addEventListener('click', countDown);
let count = document.querySelector('#turnCount').innerText;

console.log('Count: ', count)

function countDown(){
    setInterval(() => {
        if(count > 0){
            count--;
            document.querySelector('#turnCount').innerText = count;
        }
    }, 1000)

    if (count === 0){
        document.querySelector('#d2').innerHTML = `<input id='userCount'`;
        count = userCount;
    }
}


