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
        let userChoice = prompt("Choose Between Rock, Paper and Scissors.").toLowerCase()

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
function playRound(playerChoice, computerChoice){
    let human = playerChoice();
    let computer = computerChoice();

    // if tie log to console
    if (human === computer) { 
        console.log(`Its a tie! Both used ${human}.`)
        return "tie"
    }

    // if paper and rock or vice-versa, log "paper beats rock" return round winner
    else if ((human === "Rock" || human === "Paper") && (computer === "Rock" ||computer === "Paper")) {

        if (human == "Paper") {
            console.log("“You Won! Paper beats Rock”.")
            return true;
        }

        else {
            console.log("“You Lost! Paper beats Rock”.")
            return false;
        }
    }

    // else if rock and scissors or vice-versa, log "rock beats scissors" return round winner
    else if ((human === "Rock" || human === "Scissors") && (computer === "Rock" || computer === "Scissors")) {

        if (human == "Rock") {
            console.log("“You Won! Rock beats Scissors”.")
            return true;
        }

        else {
            console.log("“You Lost! Rock beats Scissors”.")
            return false;
        }
    }


    // else scissors and paper or vice-versa, log "scissors beats paper" return round winner
    else {
        if (human == "Scissors") {
            console.log("“You Won! Scissors beats Paper”.")
            return true;
        }

        else {
            console.log("“You Lost! Scissors beats Paper”.")
            return false;
        }
    }

}

// log score and outcome of match
function logResult(humanScore, computerScore) {

    // if game tie log result with score
    if (humanScore == computerScore) {
        console.log(`Game was a tie! PlayerScore: ${humanScore}, ComputerScore: ${computerScore}.`);
    }

    // if player won log result with score
    else if (humanScore > computerScore) {
        console.log(`Player Won! PlayerScore: ${humanScore}, ComputerScore: ${computerScore}.`);
    }

    // if computer won log result with score
    else {
        console.log(`Computer Won! ComputerScore: ${computerScore}, PlayerScore: ${humanScore}.`);
    }
}

// create function called playGame
function playGame(playRound) {

    // move score variables
    let humanScore = 0;
    let computerScore = 0;
    
    // call playRound 5 times and increment score for winner    
    for (let i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice, getComputerChoice);

        // increment score of player, if player won
        if (result === true) {
            humanScore += 1;
        }

        // increment score of computer, if computer won
        else if (result === false) {
            computerScore += 1;
        }

        // log score, start new line
        console.log(`PlayerScore: ${humanScore}`);
        console.log(`ComputerScore: ${computerScore}`);
        console.log(" ")
    }

    logResult(humanScore, computerScore)
}

playGame(playRound)