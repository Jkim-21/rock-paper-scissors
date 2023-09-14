// Rock-Papers-Scissors
// Name: Jonathan Kim

let playerChoice;
let computerChoice;
let rockChoice;
let paperChoice;
let scissorChoice;
let computerScore = 0;
let playerScore = 0;
let count = 0;
let gameOver = false;
let userScoreBox = document.createElement("p");
let computerScoreBox = document.createElement("p");
let body = document.querySelector("body");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");

rockChoice = () => game("rock");
paperChoice = () => game("paper");
scissorChoice = () => game("scissors");


rockBtn.addEventListener("click", rockChoice); ;
paperBtn.addEventListener("click", paperChoice);
scissorBtn.addEventListener("click", scissorChoice);

function game(playerChoice) {
    let computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection); 
    updateScore();
    checkGame();
}

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
    let playerAnswer = playerSelection.toLowerCase();
    count += 1;
    
    if (playerAnswer == "rock") {
        if (computerSelection == "rock") {
            return ("tie");
        }
        if (computerSelection == "scissors") {
            playerScore += 1;
            return ("win");
        }
        if (computerSelection == "paper") {
            computerScore += 1;
            return ("lose");
        }
    }

    if (playerAnswer == "scissors") {
        if (computerSelection == "rock") {
            computerScore += 1;
            return ("lose");
        }
        if (computerSelection == "scissors") {
            return ("tie");
        }
        if (computerSelection == "paper") {
            playerScore += 1;
            return ("win");
        }
    }

    if (playerAnswer == "paper") {
        if (computerSelection == "rock") {
            playerScore += 1;
            return ("win");
        }
        if (computerSelection == "scissors") {
            computerScore += 1;
            return ("lose");
        }
        if (computerSelection == "paper") {
            return ("tie");
        }
    }
}

function updateScore() {
    if (count == 1) {
        userScoreBox.textContent = "User Score: " + playerScore;
        computerScoreBox.textContent = "Computer Score: " + computerScore;
        body.appendChild(userScoreBox);
        body.appendChild(computerScoreBox);
    }
        
    else {
        userScoreBox.textContent =  "User Score: " + playerScore;
        computerScoreBox.textContent = "Computer Score: " + computerScore;
    }
}

function checkGame() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            winner = document.createElement("p");
            winner.textContent = "You beat the computer! Great job :)";
            body.appendChild(winner);
        }
        else if (computerScore == 5) {
            winner = document.createElement("p");
            winner.textContent = "The computer beat you... Nice try :(";
            body.appendChild(winner);
        }
        gameOver = true; 
        rockBtn.removeEventListener("click", rockChoice);
        paperBtn.removeEventListener("click", paperChoice);
        scissorBtn.removeEventListener("click", scissorChoice);
    }
}