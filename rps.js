// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Create getComputerChoice function with random number parameter
function getComputerChoice(num = Math.floor(Math.random() * 3)) {
    // if parameter == 0 choose rock
    if (num == 0) {
        return "Rock";
    }

    // else if parameter == 1 choose scissors
    else if (num == 1) {
        return "Scissors";
    }

    // else choose paper
    else {
        return "Paper";
    }
}

// Create function getHumanChoice
function getHumanChoice() {
    // While prompt does not equal rock, paper or scissors loop
    while (true) {

        // Get user input
        userChoice = prompt("Choose Between Rock, Paper and Scissors.").toLowerCase()

        // if input equals rock return rock
        if (userChoice == "rock") {
            return "Rock";
        }

        // else if input equals scissors return scissors
        else if (userChoice == "scissors") {
            return "Scissors";
        }

        // else if input equals paper return paper
        else if (userChoice == "paper"){
            return "Paper";
        }
    }
}

console.log(getHumanChoice())