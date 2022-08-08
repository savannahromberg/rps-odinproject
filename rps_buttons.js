
function alertFunction() {
    alert("You chose: " + "");
  }


const rockButton = document.getElementById('rockbutton');
const paperButton = document.getElementById('paperbutton');
const scissorsButton = document.getElementById('scissorsbutton');

console.log(rockButton, paperButton, scissorsButton)

rockButton.addEventListener('click', alertFunction);
paperButton.addEventListener('click', alertFunction);
scissorsButton.addEventListener('click', alertFunction);









// btn.addEventListener('click', function (e) {
//     console.log(e);
//   });
// const btn = document.createElement('#btn');
// document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert("You made an alert button.");
// });
