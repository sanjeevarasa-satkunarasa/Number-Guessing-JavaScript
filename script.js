let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    let randomNumber = Math.random()*9
    return randomNumber
}

function getAbsoluteDistance(number1, number2) {
    return Math.abs(number1-number2)
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    if (getAbsoluteDistance(userGuess,targetNumber) < getAbsoluteDistance(compareGuesses,targetNumber)) {
        return true
    } else if (getAbsoluteDistance(userGuess,targetNumber) > getAbsoluteDistance(compareGuesses,targetNumber)) {
        return false
    }
}

function updateScore(whoWinner) {
    if (whoWinner === "human") {
        humanScore += 1
    } else if (whoWinner === "computer") {
        computerScore += 1
    }
}

function advanceRound() {
    currentRoundNumber += 1
}

