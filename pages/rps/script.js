const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const output = document.getElementById("output");
const score = document.getElementById("score");

let playerScore = 0;
let cpuScore = 0;

rockBtn.addEventListener("click", () => {
    updateScore(getWinner("rock", getCpuMove()));
});
paperBtn.addEventListener("click", () => {
    updateScore(getWinner("paper", getCpuMove()));
});
scissorsBtn.addEventListener("click", () => {
    updateScore(getWinner("scissors", getCpuMove()));
});

updateScore();

function getWinner(player, cpu) {
    if (player == cpu) {
        return "tie";
    } else if (player == "rock" && cpu == "scissors") {
        return "player";
    } else if (player == "paper" && cpu == "rock") {
        return "player";
    } else if (player == "scissors" && cpu == "paper") {
        return "player";
    }
    return "cpu";
}

function getCpuMove() {
    let rand = Math.floor(Math.random() * 3 + 1);
    switch (rand) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "error";
    }
}

function updateScore(winner) {
    if (winner == "tie") {
        output.textContent = `tie!`;
    } else {
        output.textContent = `${winner} wins!`;
    }

    if (winner == "player") {
        playerScore++;
    } else if (winner == "cpu") {
        cpuScore++;
    }
    score.textContent = `Player: ${playerScore} wins | CPU: ${cpuScore} wins`;
}
