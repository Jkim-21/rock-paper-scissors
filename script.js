// Rock-Papers-Scissors
// Name: Jonathan Kim

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
    let userAnswer = playerSelection.toLowerCase();
    
    if (userAnswer == "rock") {
        if (computerSelection == "rock") {
            return ("You draw! Rock ties with Rock");
        }
        if (computerSelection == "scissors") {
            return ("You win! Rock beats Scissors");
        }
        if (computerSelection == "paper") {
            return ("You lose! Rock loses against Paper");
        }
    }

    if (userAnswer == "scissors") {
        if (computerSelection == "rock") {
            return ("You lose! Scissors loses against Rock");
        }
        if (computerSelection == "scissors") {
            return ("You draw! Scissors ties with Scissors");
        }
        if (computerSelection == "paper") {
            return ("You win! Scissors beats Paper");
        }
    }

    if (userAnswer == "paper") {
        if (computerSelection == "rock") {
            return ("You win! Paper beats Rock");
        }
        if (computerSelection == "scissors") {
            return ("You lose! Paper loses against Scissors");
        }
        if (computerSelection == "paper") {
            return ("You draw! Paper ties with Paper");
        }
    }
}

function game() {
    let userScore = 0; 
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play Rock, Paper, Scissors. Enter \
        one of the three options in the game (Rock, Paper, Scissors).", "");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        if (roundResult.includes("You win!")) {
            userScore += 1;
        }
        else if (roundResult.includes("You lose!")) {
            computerScore += 1;
        }
    }
    if (userScore > computerScore) {
        console.log("You're the winner of the game! You beat the computer :)")
    }
    else if (computerScore > userScore) {
        console.log("The computer is the winner the game! You lost against computer :(")
    }
    else {
        console.log("um... awkward")
    }
}

game();













