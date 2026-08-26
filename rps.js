// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Create getComputerChoice function with random number parameter
function getComputerChoice(num = Math.floor(Math.random() * 3)) {
    // if parameter == 0 choose rock
    if (num == 0) {
        return "Rock"
    }

    // else if parameter == 1 choose scissors
    else if (num == 1) {
        return "Scissors"
    }

    // else choose paper
    else {
        return "Paper"
    }
}

console.log(getComputerChoice())