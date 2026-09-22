

function getComputerChoice() {
    let object = Math.floor(Math.random()*3)
    if (object < 1){
        return "rock";
    } else if (object <2 ) {
        return "paper";
    } else if (object <= 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock paper or scissors","rock");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function PlayRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(computerChoice);

    console.log(humanChoice);

    if (humanChoice === computerChoice){
        return "It is a tide";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper"){
            computerScore += 1;
            return "You loose this round"
        } else {
            humanScore += 1;
            return "You win this round"
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            computerScore += 1;
            return "You loose this round"
        } else {
            humanScore += 1;
            return "You win this round"
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore += 1;
            return "You loose this round"
        } else {
            humanScore += 1;
            return "You win this round"
        }
    }
}

const numberOfRounds = 5;

function PlayGame() {
    for (let i = 0; i < numberOfRounds; i++) {
        console.log(PlayRound());
        console.log("Score: Computer-", computerScore, "Human-", humanScore);
    }
}

PlayGame();

