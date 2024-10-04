// // document.querySelector('#check').addEventListener('click', check)

// // function check() {

// //   const day = document.querySelector('#day').value

// //   if(day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday"){
// //     document.getElementById('placeToSee').innerHTML = "Weekend"
// //   } else if( day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday"){
// //     document.getElementById('placeToSee').innerHTML = "Class"
// //   } else {
// //     document.getElementById('placeToSee').innerHTML = "Boring"
// //   }
// // }


// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value;

//   if(day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday"){
//     document.getElementById('placeToSee').innerHTML = "Weekend";
//   } else if( day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday'){
//     document.getElementById('placeToSee').innerHTML = "Class";
//   } else {
//     document.getElementById('placeToSee').innerHTML = "Boring";
//   }
// }



document.querySelector('#check').addEventListener('click', check);

function check(){
  const day = document.querySelector('#day').value;

  if( day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday'){
    document.getElementById('placeToSee').innerHTML = 'Weekend';
  } else if( day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday') {
    document.getElementById('placeToSee').innerHTML = 'Class';
  } else {
    document.getElementById('placeToSee').innerHTML = 'Boring';
  }
}