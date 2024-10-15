

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose a weapon:")

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Choose a weapon:")
    }
    
    return humanChoice
}


function playGame() {
    humanScore = 0
    computerScore = 0

    function playRound(humanChoice, computerChoice) {
        console.log(`You: ${humanChoice}`)
        console.log(`Computer: ${computerChoice}`)
        
        
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Rock loses to paper.")
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock wins to scissors.")
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper wins to rock.")
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Paper loses to scissors.")
            computerScore++
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Scissors loses to rock.")
            computerScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors wins to paper.")
            humanScore++
        } else {
            console.log("It's a tie lol")
        }
    }

    // Play round 5 times
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    console.log(`You scored ${humanScore}, and the computer scored ${computerScore}.`)
}

playGame()