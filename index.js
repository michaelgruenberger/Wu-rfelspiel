const playerOneScoreDisplay = document.getElementById("score-player-one");
const playerTwoScoreDisplay = document.getElementById("score-player-two");
const grayout = document.getElementById("grayout");
const winnerOverlay = document.getElementById("winner");
const instructionsOverlay = document.getElementById("instructions");
const winner = document.getElementById("player-won");
const playerOne = document.getElementById("p1");
const playerTwo = document.getElementById("p2");

const rollOneDisplay = document.getElementById("player-one-roll");
const rollTwoDisplay = document.getElementById("player-two-roll");

let playerOneScore = 0;
let playerTwoScore = 0;

let playerOneCounter = 0;
let playerTwoCounter = 0;

let roll = 0;
let rollCount = 0;

const rollBtn = document.getElementById("roll-add-btn");
const resetBtn = document.getElementById("reset-btn");
const howToBtn = document.getElementById("how-to-btn");
const gotItBtn = document.getElementById("understood");

rollBtn.addEventListener("click", rollDice)
resetBtn.addEventListener("click", reset);
howToBtn.addEventListener("click", showInstructions);
gotItBtn.addEventListener("click", hideInstructions);

// show/hide instructions

function showInstructions() {
    grayout.classList.remove("hide")
    instructionsOverlay.classList.remove("hide");
}

function hideInstructions() {
    grayout.classList.add("hide");
    instructionsOverlay.classList.add("hide");
}

// get Random number

function getRandomNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min) + min);
}

// check for winner on each iteration

function checkWinner() {
    if (playerOneScore >= 20) {
        grayout.classList.remove("hide");
        winnerOverlay.classList.remove("hide");
        winner.textContent = "1";
    } else if (playerTwoScore >= 20) {
        grayout.classList.remove("hide");
        winnerOverlay.classList.remove("hide");
        winner.textContent = "2";
    }
}

// game mechanics

function rollDice() {
    roll = getRandomNumber();

    if (rollCount === 2) {
        rollCount = 0;
        rollBtn.textContent = "ROLL";
        playerOneScoreDisplay.textContent = playerOneScore;
        playerTwoScoreDisplay.textContent = playerTwoScore;
        rollOneDisplay.textContent = "";
        rollTwoDisplay.textContent = "";
        playerOne.classList.add("on-turn");
        checkWinner();
    } else if (playerOneCounter <= playerTwoCounter) {
        playerOneCounter++;
        rollCount++;
        playerOne.classList.remove("on-turn");
        playerTwo.classList.add("on-turn");
        playerOneScore += roll;
        rollOneDisplay.textContent = roll;
    } else {
        playerTwoCounter++;
        rollCount++;
        playerTwo.classList.remove("on-turn");
        playerTwoScore += roll;
        rollTwoDisplay.textContent = roll;
        rollBtn.textContent = "ADD";
    }
}

// reset after winner

function reset() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneCounter = 0;
    playerTwoCounter = 0;
    roll = 0;
    rollCount = 0;

    playerOneScoreDisplay.textContent = "";
    playerTwoScoreDisplay.textContent = "";
    rollOneDisplay.textContent = "";
    rollTwoDisplay.textContent = "";

    winnerOverlay.classList.add("hide");
    grayout.classList.add("hide");
}