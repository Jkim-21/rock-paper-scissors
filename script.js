// Rock-Papers-Scissors
// Name: Jonathan Kim

function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices(choiceNumber);
}

