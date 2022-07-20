const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const rockPaper = "Paper beats Rock! ";
const scissorsRock = "Rock beats Scissors! ";
const paperScissors = "Scissors beats Paper! ";
const playerWin = "You win!";
const playerLose = "You lose!";
const playerTie = "It's a tie!"

let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK", computerSelection === "SCISSORS") {
        document.write(scissorsRock, playerWin);
    } else if (playerSelection === "ROCK", computerSelection === "PAPER") {
        document.write(rockPaper, playerLose);
    } else if (playerSelection === "ROCK", computerSelection === "ROCK") {
       document.write(paperScissors, playerTie);
    } else if (playerSelection === "SCISSORS", computerSelection === "PAPER") {
        document.write(paperScissors, playerWin);
    } else if (playerSelection === "SCISSORS", computerSelection === "ROCK") {
            document.write(paperScissors, playerLose);
    } else if (playerSelection === "SCISSORS", computerSelection === "SCISSORS") {
            document.write(paperScissors, playerTie);
    } else if (playerSelection === "PAPER", computerSelection === "ROCK") {
            document.write(paperScissors, playerWin);
    } else if (playerSelection === "PAPER", computerSelection === "SCISSORS") {
            document.write(paperScissors, playerLose);
    } else if (playerSelection === "PAPER", computerSelection === "PAPER") {
            document.write(paperScissors, playerTie);
    }
}

console.log(playerSelection);
console.log(computerSelection);
