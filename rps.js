let humanScore = 0
let computerScore = 0

// Create getComputerChoice function with random number parameter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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

// Create function called playRound with humanChoice and computerChoice parameters
function playRound(getHumanChoice, getComputerChoice){
    human = getHumanChoice()
    computer = getComputerChoice()

    // if paper and rock or vice-versa, log "paper beats rock" return round winner
    if ((human === "Rock" || human === "Paper") && (computer === "Rock" ||computer === "Paper"))

        if (human == "Paper") {
            console.log("“You Won! Paper beats Rock”.")
            humanScore += 1;
            return "Player Wins!"
        }

        else {
            console.log("“You Lost! Paper beats Rock”.")
            computerScore += 1;
            return "Computer Wins!"
        }

    // else if rock and scissors or vice-versa, log "rock beats scissors" return round winner
    else if ((human === "Rock" || human === "Scissors") && (computer === "Rock" || computer === "Scissors"))

        if (human == "Rock") {
            console.log("“You Won! Rock beats Scissors”.")
            humanScore += 1;
            return "Player Wins!"
        }

        else {
            console.log("“You Lost! Rock beats Scissors”.")
            computerScore += 1;
            return "Computer Wins!"
        }


    // else scissors and paper or vice-versa, log "scissors beats paper" return round winner
    else {
        if (human == "Scissors") {
            console.log("“You Won! Scissors beats Paper”.")
            humanScore += 1;
            return "Player Wins!"
        }

        else {
            console.log("“You Lost! Scissors beats Paper”.")
            computerScore += 1;
            return "Computer Wins!"
        }
    }
}

console.log(playRound(getHumanChoice, getComputerChoice))


