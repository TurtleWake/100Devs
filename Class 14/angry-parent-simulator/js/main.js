document.querySelector('#yell').addEventListener('click', getFullName);
document.querySelector('#angerLevel').addEventListener('input', howAngry);


function getFullName(){
  // Get name values from input fields
  const firstName = document.querySelector('#firstName').value.trim();
  const firstMiddle = document.querySelector('#firstMiddle').value.trim();
  const lastMiddle = document.querySelector('#lastMiddle').value.trim();
  const lastName = document.querySelector('#lastName').value.trim();
  
  // Construct the full name
  const fullName = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName} `;

  displayName(fullName)
}



function displayName(fullName){
  // Display the full name
  document.querySelector('#placeToYell').innerText = fullName; 
  // Text-to-speech (yelling the full name)
  const synth = window.speechSynthesis;
  const yellThis = new SpeechSynthesisUtterance(fullName);

  console.log("Intensity: ", angerLevel.value)
  yellThis.pitch = angerLevel.value * .5;
  yellThis.rate = angerLevel.value;
  yellThis.volume = angerLevel.value * 10;
  synth.speak(yellThis);
}

function howAngry(){
    const angerIntensity = angerLevel.value;
    console.log("ANGER: ", angerIntensity)
      // Update CSS based on the anger level
    const body = document.body;
    body.className = ''; // Reset class
    body.classList.add(`anger-level-${angerIntensity}`);

    document.querySelector('#value').innerText = angerIntensity;
}

