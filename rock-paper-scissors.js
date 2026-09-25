const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const results = document.querySelector(".results");

const roundResult = document.createElement("div");
const totalScore = document.createElement("div");
const winner = document.createElement("h3");

const countDown = document.createElement("h2");

results.appendChild(roundResult);
results.appendChild(totalScore);
results.appendChild(winner);

const WINNING_SCORE = 3;

// Each key beats its value: rock beats scissors, etc.
const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

let isRestarting = false;

function handleClick(choice) {
    if (isRestarting) {
        return;
    }
    if (isGameOver()) {
        restartGame();
        return;
    }
    const text = playRound(choice);
    displayScore(text);
}

function restartGame() {
    isRestarting = true;
    let secondsLeft = 5;
    countDown.textContent = "Game restarting in " + secondsLeft;
    results.appendChild(countDown);

    const timerId = setInterval(() => {
        secondsLeft -= 1;
        if (secondsLeft > 0) {
            countDown.textContent = "Game restarting in " + secondsLeft;
        } else {
            clearInterval(timerId);
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    roundResult.textContent = "";
    totalScore.textContent = "";
    winner.textContent = "";
    countDown.textContent = "";

    isRestarting = false;
}

function isGameOver() {
    return humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let text = "You chose: " + humanChoice + " - PC chose: " + computerChoice + ". ";

    if (humanChoice === computerChoice) {
        text += "It's a tie.";
    } else if (beats[humanChoice] === computerChoice) {
        humanScore += 1;
        text += "You win this round.";
    } else {
        computerScore += 1;
        text += "You lose this round.";
    }

    return text;
}

function displayScore(text) {
    roundResult.textContent = text;
    totalScore.textContent = humanScore + " - " + computerScore;

    if (humanScore >= WINNING_SCORE) {
        winner.textContent = "You won";
    } else if (computerScore >= WINNING_SCORE) {
        winner.textContent = "PC won, skill issue";
    }
}