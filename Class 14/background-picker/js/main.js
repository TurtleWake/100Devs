// document.querySelector('#purple').onclick = partyPurple;
// document.querySelector('#green').onclick = partyGreen;
// document.querySelector('#blue').onclick = partyBlue;
// document.querySelector('#red').onclick = partyRed;
// document.querySelector('#iTooLikeToParty').onclick = partyParty;

// function partyPurple(){
//   if(partyInterval) clearInterval(partyInterval);
//   document.querySelector('body').style.backgroundColor = '#F13FF7';
// }

// function partyGreen(){
//   if(partyInterval) clearInterval(partyInterval);
//   document.querySelector('body').style.backgroundColor = '#00FD51'
// }

// function partyBlue(){
//   if(partyInterval) clearInterval(partyInterval);
//   document.querySelector('body').style.backgroundColor = '#00FEFF'
// }

// function partyRed(){
//   if(partyInterval) clearInterval(partyInterval);
//   document.querySelector('body').style.backgroundColor = '#A10909'
// }

// let partyInterval;






document.querySelector('#purple').onclick = partyPurple;
document.querySelector('#green').onclick = partyGreen;
document.querySelector('#blue').onclick = partyBlue;
document.querySelector('#red').onclick = partyRed;
document.querySelector('#iTooLikeToParty').onclick = partyParty;

function partyPurple(){
  document.querySelector('body').style.backgroundColor = "purple";
}

function partyGreen(){
  document.querySelector('body').style.backgroundColor = "green";
}

function partyBlue(){
  document.querySelector('body').style.backgroundColor = "blue";
}

function partyRed(){
  document.querySelector('body').style.backgroundColor = "red";
}

let partyInterval;

function partyParty(){
  if(partyInterval) clearInterval(partyInterval);
  const colors = [];

  for (let i = 0; i < 10; i++){
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }
  
  let colorIndex = 0;

  partyInterval = setInterval(() => {
    document.querySelector('body').style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 200);
}