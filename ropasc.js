//Array of computer choices
const choices = ["ROCK", "PAPER", "SCISSORS"];

//Variables explaining which ones beat the others and who won
const rockPaper = "Paper covers Rock! \n";
const scissorsRock = "Rock smashes Scissors! \n";
const paperScissors = "Scissors cut Paper! \n";
const playerWin = "YOU WIN! \n";
const playerLose = "YOU LOSE! \n";
const playerTie = "It's a tie! \n";

let playerWinCount = 0;
let computerWinCount = 0;

//Player buttons & event listeners
const rockButton = document.querySelector('#rockbutton').addEventListener('click', (rockEvent) => {
    gameRound(rockEvent);
});
const paperButton = document.querySelector('#paperbutton').addEventListener('click', (paperEvent) => {
    gameRound(paperEvent);
});
const scissorsButton = document.querySelector('#scissorsbutton').addEventListener('click', (scissorsEvent) => {
    gameRound(scissorsEvent);
});

//Function to randomly generate computer selection
function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
};

//Function that runs computer selection vs player selection, and displays who wins
function gameRound(event) {

    let playerSelection = event.target.innerText;
    let computerSelection = getComputerChoice();

    let div = document.querySelector('#text');
    div.innerText = 'You chose: ' + playerSelection + ".\n" + 'Your opponent chose: ' + computerSelection + ".";

    let scoreCounter = document.querySelector('#scoreCounter');
    let matchWinner = document.querySelector('#matchWinner');

    let rock_vScissors = (playerSelection === "ROCK" && computerSelection === "SCISSORS");
    let rock_vPaper = (playerSelection === "ROCK" && computerSelection === "PAPER");
    let scissors_vRock = (playerSelection === "SCISSORS" && computerSelection === "ROCK");
    let scissors_vPaper= (playerSelection === "SCISSORS" && computerSelection === "PAPER");
    let paper_vRock = (playerSelection === "PAPER" && computerSelection === "ROCK");
    let paper_vScissors = (playerSelection === "PAPER" && computerSelection === "SCISSORS");
    let gameTie = (playerSelection === computerSelection);
    let gameError = (!choices.includes(playerSelection));

    if (rock_vScissors) {
        matchWinner.innerText = scissorsRock + playerWin;
        playerWinCount +=1;
    } else if (rock_vPaper) {
        matchWinner.innerText = rockPaper + playerLose;
        computerWinCount +=1;
    } else if (scissors_vPaper) {
        matchWinner.innerText = paperScissors + playerWin;
        playerWinCount +=1;
    } else if (scissors_vRock) {
        matchWinner.innerText = scissorsRock + playerLose;
        computerWinCount +=1;
    } else if (paper_vRock) {
        matchWinner.innerText = rockPaper + playerWin;
        playerWinCount +=1;
    } else if (paper_vScissors) {
        matchWinner.innerText = paperScissors + playerLose;
        computerWinCount +=1;
    } else if (gameTie) {
        matchWinner.innerText = playerTie;
    } else if (gameError) {
        matchWinner.innerText = "Error: Invalid input. Please refresh and try again.<br>"
    };  
    scoreCounter.innerText = "Score counter: " + "player: " + playerWinCount + ", computer: " + computerWinCount;

    //To see if 1) function is running and 2) counter is working
    console.log("Score counter 2: " + "player: " + playerWinCount + ", computer: " + computerWinCount);

    if (playerWinCount === 5) {
        document.write("YOU WON!");
        document.write("<br>Player score: " + playerWinCount);
        document.write("<br>Computer score: " + computerWinCount);
    } else if (computerWinCount === 5) {
        document.write("YOU LOST!");
        document.write("<br>Computer score: " + computerWinCount);
        document.write("<br>Player score: " + playerWinCount);
    };
};
