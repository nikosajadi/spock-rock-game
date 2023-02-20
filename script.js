import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

// All of this element that have in this class (far)
const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

console.log(allGameIcons);

// let computerChoice = '';

// Reset all 'selected' icons, remove confetti
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// // Random computer choice
// function computerRandomChoice() {
//   const computerChoiceNumber = Math.random();
//   if (computerChoiceNumber < 0.2) {
//     computerChoice = 'rock';
//   } else if (computerChoiceNumber <= 0.4) {
//     computerChoice = 'paper';
//   } else if (computerChoiceNumber <= 0.6) {
//     computerChoice = 'scissors';
//   } else if (computerChoiceNumber <= 0.8) {
//     computerChoice = 'lizard';
//   } else {
//     computerChoice = 'spock';
//   }
// }

// //call function to process turn inorder to creat logic for the moputer to make a random selection
// function checkResult () {
//   //I want to make seperate function for each thing , it is easier to troubleshoot
//   //resetSelected();
//   computerRandomChoice();
// }

// passing player selection value and styling icons
function select(playerChoice) {
  // Add 'selected' styling & computerChoice
  // function displayComputerChoice() {
  switch (playerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
