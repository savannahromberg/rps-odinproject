const rockButton = document.querySelector('#rockbutton');
rockButton.addEventListener('click', () => {
    alert("You chose ROCK");
});

const paperButton = document.querySelector('#paperbutton');
paperButton.addEventListener('click', () => {
    alert("You chose PAPER");
});

const scissorsButton = document.querySelector('#scissorsbutton');
scissorsButton.addEventListener('click', () => {
    alert("You chose SCISSORS");
});

console.log(rockButton, paperButton, scissorsButton)

