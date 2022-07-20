const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

let rockPaper = 'Paper beats Rock!';
let scissorsRock = 'Rock beats Scissors!';
let paperScissors = 'Scissors beats Paper!';
let playerWin = 'You win!';
let playerLose = 'You lose!';

let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, paper, or scissors?').toUpperCase();

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK', computerSelection === 'SCISSORS') {
        alert(scissorsRock, ' You win!');
    } else if (playerSelection === 'PAPER', computerSelection === 'ROCK') {
        alert(rockPaper);
    } else if (playerSelection === 'SCISSORS', computerSelection === 'PAPER') {
        alert(paperScissors);
    }
}

console.log(playerSelection);
console.log(computerSelection);
