const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    console.log(choices[random]);
    return choices[random];
}

let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();

//function functionName(playerSelection, computerSelection) {
    // code to be executed
//  }

console.log(playerSelection, computerSelection);
  