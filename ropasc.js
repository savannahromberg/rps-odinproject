// figure out how to only accept three available choices - not spelling errors, or stupid answers

const choices = ["ROCK", "PAPER", "SCISSORS"];

const rockPaper = "Paper covers Rock! ";
const scissorsRock = "Rock smashes Scissors! ";
const paperScissors = "Scissors cut Paper! ";
const playerWin = "You win!";
const playerLose = "You lose!";
const playerTie = "It's a tie!"

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();

function gameRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)

    // for (let i = 0; i < 5; i++) {
        // see whether if statement can be refactored into a switch
            if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
                document.write(scissorsRock, playerWin);
            } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
                document.write(rockPaper, playerLose);
            } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
                document.write(paperScissors, playerWin);
            } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
                document.write(scissorsRock, playerLose);
            } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
                document.write(rockPaper, playerWin);
            } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
                document.write(paperScissors, playerLose);
            } else if (playerSelection === computerSelection) {
                document.write(playerTie);
            }   
    // }
}   


// //counter for computer wins
// function compWinCounter() {
//     let computerWins = 0;
//     for (let i = 0; i < 5; i++) {
//     }
// }


document.write('You chose: ' + playerSelection + '. ', "<br>");
document.write('Your opponent chose: ' + computerSelection + '. ', "<br>");


// function game() {
//     for (let i = 0; i < 5; i++) {

//     }
// }
// game();

gameRound(playerSelection, computerSelection);