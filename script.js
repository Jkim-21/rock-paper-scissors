// Rock-Papers-Scissors
// Name: Jonathan Kim

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
    let userAnswer = playerSelection.toLowerCase();
    
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return ("You draw! Rock ties with Rock")
        }
        if (computerSelection == "scissors") {
            return ("You win! Rock beats Scissors")
        }
        if (computerSelection == "paper") {
            return ("You lose! Rock loses against Paper")
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return ("You lose! Scissors loses against Rock")
        }
        if (computerSelection == "scissors") {
            return ("You tie! Scissors ties with Scissors")
        }
        if (computerSelection == "paper") {
            return ("You win! Scissors beats Paper")
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ("You win! Paper beats Rock")
        }
        if (computerSelection == "scissors") {
            return ("You lose! Paper loses against Scissors")
        }
        if (computerSelection == "paper") {
            return ("You tie! Paper ties with Paper")
        }
    }
}













// let rawInput = prompt("Let's play Rock, Paper, Scissors. Enter one of the three options in the game.", "");
