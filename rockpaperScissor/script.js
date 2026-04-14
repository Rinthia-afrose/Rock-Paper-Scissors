let userScore = 0;
let compScore = 0;
let drawScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  // switch screens
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  // show hands
  const userHand = document.getElementById("user-hand");
  const compHand = document.getElementById("comp-hand");

  userHand.innerText = "✊";
  compHand.innerText = "✊";

// add animation
  userHand.classList.add("shake-left");
  compHand.classList.add("shake-right");

// after animation → show result
setTimeout(() => {
  userHand.classList.remove("shake-left");
  compHand.classList.remove("shake-right");

  userHand.innerText = getEmoji(userChoice);
  compHand.innerText = getEmoji(compChoice);

   // game logic
  let result = "";

  if (userChoice === compChoice) {
    result = "It's a Tie!";
    drawScore++;
  } 
  else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = "You Win!";
    userScore++;
  } 
  else {
    result = "Computer Wins!";
    compScore++;
  }

  // show result text
  document.getElementById("result-text").innerText = result;

  // update score
  updateScore();

 }, 1000);

}

function playAgain() {
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

function updateScore() {
  const scoreText = `Win: ${userScore} | Loss: ${compScore} | Draw: ${drawScore}`;

  // update both score panels
  document.querySelectorAll("#score").forEach(el => {
    el.innerText = scoreText;
  });
}

function getEmoji(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  return "✌️";
}