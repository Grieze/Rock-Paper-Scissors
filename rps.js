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

function playRound(playerSelection, computerSelection, scores) {
  const results = document.querySelector('.results');
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    results.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    scores[0] = scores[0] + 1;
  }
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    results.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    scores[0] = scores[0] + 1;
  }
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    results.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    scores[0] = scores[0] + 1;
  }
  else if (playerSelection == computerSelection) {
    results.textContent = 'It\'s a tie!';
  }
  else {
    results.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    scores[1] = scores[1] + 1;
  }
  const outputScores = document.querySelector(".current-score")
  outputScores.textContent = "Player Score: " + scores[0] + " Computer Score: " + scores[1];
  if (scores[0] == 5) {
    // output that player won
    outputScores.textContent = "Congratulations you've won!";
    // reset the score to play a new game
    scores[0] = 0;
    scores[1] = 0;
  }
  else if (scores[1] == 5) {
    // ouput that computer won
    outputScores.textContent = "Unfortunately you've lost.";
    // reset the score to play a new game
    scores[0] = 0;
    scores[1] = 0;
  }
  return scores;
}

// DRIVER CODE GOES HERE

// Let playerChoice be a global variable
const buttons = document.querySelectorAll('button');

let scores = [0, 0]

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerSelection = button.innerHTML;
    //game(playerSelection, scores)
    playRound(playerSelection, computerPlay(), scores)
  });
});
