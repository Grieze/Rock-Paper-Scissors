function computerPlay() {
  let play = Math.floor(Math.random() * (4 - 1) + 1);
  if (play == 1) {
    return "Rock";
  }
  else if (play == 2) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors") {
    console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
    return 1;
  }
  else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") {
    console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
    return 1;
  }
  else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper") {
    console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
    return 1;
  }
  else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
    console.log('It\'s a tie!');
    return -1;
  }
  else {
    console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
    return 0;
  }
}

function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let move = ""
    let playerChoice = window.prompt("Please make a move", move);
    let result = playRound(playerChoice, computerPlay())
    if (result == 1) {
      score++;
    }
  }
  if (score >= 3) {
    console.log("Player is the winner!");
  }
  else {
    console.log("Computer is the winner!");
  }
}

game();
