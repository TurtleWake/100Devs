document.querySelector('#check').addEventListener('click', check);

function check(){
  const day = document.querySelector('#day').value.toLowerCase();

  const message = randomResponse(day);

  document.querySelector('#placeToSee').innerText = message;
}

const classResponses = [
  "🎓 Time to hit the books! Let's crush this class! 💪",
  "📝 Class is in session, smarty pants! 📚",
  "🎒 Ready or not, it's learning time! Let's do this! 📖",
  "🎓 Another day, another class—bring on the knowledge!",
  "📘 You've got class today! Let's make it a productive one!"
];

const weekendResponses = [
  "🎉 Woohoo, it's the weekend! Time to relax and recharge! 🌴",
  "😎 Weekend vibes! Time to kick back and have some fun! 🎮",
  "🍕 It'’'s the weekend! Let'’'s celebrate with some pizza and chill time! 🎉",
  "🎉 Weekend mode activated! Time to enjoy your free time! 🕺",
  "🌞 The weekend is here! Go out and make it awesome!"
];

const humpdayResponses = [
  "🐪 Humpday is here! You're halfway through the week—keep going! 💥",
  "🧗‍♂️ You've made it to the middle of the week—Humpday! Almost there!",
  "🐫 Humpday! You're climbing that weekly mountain like a pro!",
  "🚀 It's Humpday! The weekend is within sight—keep pushing!",
  "🐪 Halfway through the week, and you're doing great! Let's finish strong!"
];

const regularResponses = [
  "😴 Ugh, it's a boring day… but hey, it's what you make of it! 🌟",
  "💤 Just another boring day… spice it up if you can!",
  "🤔 Boring day ahead… perfect time to start something new!",
  "😐 Not the most exciting day… but maybe something interesting will happen!",
  "😴 Yawn! Looks like a dull day… but you've got the power to change that!"
];

const invalidResponses = [
  "🤔 I've never heard of that day… are you sure you're not making things up?",
  "🧐 Is that a real day? Let's stick to the usual ones, shall we?",
  "😅 Um… that's not a day I recognize. Try again, maybe?",
  "🤨 What day is that? I'm confused… stick to the basics!",
  "😂 Nice try! But that's not a real day, at least not on this planet!"
]

function randomResponse(day){
  if(day === 'tuesday' || day === 'thursday'){
    return classResponses[Math.floor(Math.random() * classResponses.length)];
  }else if(day === 'saturday' || day === 'sunday'){
    return weekendResponses[Math.floor(Math.random() * weekendResponses.length)];
  }else if(day === 'wednesday'){
    return humpdayResponses[Math.floor(Math.random() * humpdayResponses.length)];
  }else if(day === 'monday' || day === 'friday'){
    return regularResponses[Math.floor(Math.random() * regularResponses.length)];
  }else{
    return invalidResponses[Math.floor(Math.random() * invalidResponses.length)];
  }
}