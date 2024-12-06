const rockBtn = document.querySelector(".user-choose-rock");
const paperBtn = document.querySelector(".user-choose-paper");
const scissorsBtn = document.querySelector(".user-choose-scissors");
const userScoreText = document.querySelector("#user-score");
const pcScoreText = document.querySelector("#pc-score");
const evenText = document.querySelector("#even");
const userResultImg = document.querySelector(".user-result-img");
const pcResultImg = document.querySelector(".pc-result-img");


let userWins = 0;
let pcWins = 0;
let even = 0;

const pcChooses = ["rock", "paper", "scissors"];

rockBtn.onclick = rockScenario;
paperBtn.onclick = paperScenario;
scissorsBtn.onclick = scissorsScenario;

function rockScenario(){
    userResultImg.src = "../images/rock-emoji.png";

    if (pickComputerMove(pcChooses) === "rock") {
        pcResultImg.src = "../images/rock-emoji.png";
        even++;
        evenText.innerText = "Even: " + even;
    } else if (pickComputerMove(pcChooses) === "paper") {
        pcResultImg.src = "../images/paper-emoji.png";
        pcWins++;
        pcScoreText.innerText = "PC Wins: " + pcWins;

    } else if (pickComputerMove(pcChooses) === "scissors") {
        pcResultImg.src = "../images/scissors-emoji.png";
        userWins++;
        userScoreText.innerText = "User Wins: " + userWins;
    }
}

function paperScenario(){
    userResultImg.src = "../images/paper-emoji.png";

    if (pickComputerMove(pcChooses) === "rock") {
        pcResultImg.src = "../images/rock-emoji.png";
        userWins++;
        userScoreText.innerText = "User Wins: " + userWins;
    } else if (pickComputerMove(pcChooses) === "paper") {
        pcResultImg.src = "../images/paper-emoji.png";
        even++;
        evenText.innerText = "Even: " + even;

    } else if (pickComputerMove(pcChooses) === "scissors") {
        pcResultImg.src = "../images/scissors-emoji.png";
        pcWins++;
        pcScoreText.innerText = "PC Wins: " + pcWins;
    }
}

function scissorsScenario(){
    userResultImg.src = "../images/scissors-emoji.png";

    if (pickComputerMove(pcChooses) === "rock") {
        pcResultImg.src = "../images/rock-emoji.png";
        pcWins++;
        pcScoreText.innerText = "PC Wins: " + pcWins;
    } else if (pickComputerMove(pcChooses) === "paper") {
        pcResultImg.src = "../images/paper-emoji.png";
        userWins++;
        userScoreText.innerText = "User Wins: " + userWins;

    } else if (pickComputerMove(pcChooses) === "scissors") {
        pcResultImg.src = "../images/scissors-emoji.png";
        even++;
        evenText.innerText = "Even: " + even;
    }
}

function pickComputerMove(computerMove) {
    const randomPick = Math.floor(Math.random() * computerMove.length);
    return pcChooses[randomPick];
}
