const choices = ["ROCK", "PAPER", "SCISSORS"];

const rockPaper = "Paper covers Rock! <br>";
const scissorsRock = "Rock smashes Scissors! <br>";
const paperScissors = "Scissors cut Paper! <br>";
const playerWin = "YOU WIN! <br>";
const playerLose = "YOU LOSE! <br>";
const playerTie = "It's a tie! <br>"

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
};

function gameRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();

    document.write('You chose: ' + playerSelection + ". <br>");
    document.write('Your opponent chose: ' + computerSelection + ". <br>");

    let rock_vScissors = (playerSelection === "ROCK" && computerSelection === "SCISSORS");
    let rock_vPaper = (playerSelection === "ROCK" && computerSelection === "PAPER");
    let scissors_vRock = (playerSelection === "SCISSORS" && computerSelection === "ROCK");
    let scissors_vPaper= (playerSelection === "SCISSORS" && computerSelection === "PAPER");
    let paper_vRock = (playerSelection === "PAPER" && computerSelection === "ROCK");
    let paper_vScissors = (playerSelection === "PAPER" && computerSelection === "SCISSORS");
    let gameTie = (playerSelection === computerSelection);
    let gameError = (!choices.includes(playerSelection));

        if (rock_vScissors) {
            document.write(scissorsRock, playerWin);
        } else if (rock_vPaper) {
            document.write(rockPaper, playerLose);
        } else if (scissors_vPaper) {
            document.write(paperScissors, playerWin);
        } else if (scissors_vRock) {
            document.write(scissorsRock, playerLose);
        } else if (paper_vRock) {
            document.write(rockPaper, playerWin);
        } else if (paper_vScissors) {
            document.write(paperScissors, playerLose);
        } else if (gameTie) {
            document.write(playerTie);
        } else if (gameError) {
            document.write("Error: Invalid input. Please refresh and try again.<br>")
        }  
}; 

function game() {
    for (let gameCounter = 1; gameCounter < 6; gameCounter++) {
        console.log("Game counter: " + gameCounter);
        setTimeout(gameRound, 2*1000);
    }
};

game();
