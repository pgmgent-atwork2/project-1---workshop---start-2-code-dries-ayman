// spelregels
// 1. paper wins from rock
// 2. rock wins from scissors
// 3. scissors wins from paper
// Create an empty variable named userMove;
let userMove;
// Create an empty variable named computerNumber;
let computerNumber;
// Declare the elements // "To retrieve this from an HTML element, use an ID"
let file = document.getElementsByTagName("body");
let body = file[0];
let resultaat = document.getElementById("resultaat");
let playerBox = document.getElementById("player_score");
let computerBox = document.getElementById("computer_score");
// Set the score to 0;
let computerResult = 0;
let playerResult = 0;
// Create an array with possible moves
let moveArray = ["paper", "rock", "scissors"];
// Create a function that generates a random number between 0 and 2 (both included);
function computerNumberGenerator() {
  //   Get the length of the array
  const moveArrayLength = moveArray.length;
  return (computerNumber = Math.floor(Math.random() * moveArrayLength)); //moveArray.lenght means the length of moveArray
}

function paper() {
  // Call the function computerNumberGenerator to give computerNumber a value
  let computerNumber = computerNumberGenerator();
  let computerMove = moveArray[computerNumber];
  // Reset the result text
  resultaat.innerHTML = "";
  // Give value to userMove
  userMove = "paper";

  //  check if userMove is equal to computerMove
  if (userMove == computerMove) {
    resultaat.innerHTML = `Het is gelijkspel want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: orange;";
  } else if (computerMove == "rock") {
    resultaat.innerHTML = `Jij hebt gewonnen want jij koos ${userMove} en de computer koos ${computerMove}`;
    playerResult = playerResult + 1;
    body.style = "background-color: green;";
    // add the +1 to the id "playerBox" / score for the HTML element
    playerBox.innerHTML = playerResult;
  } else if (computerMove == "scissors") {
    resultaat.innerHTML = `Jij hebt verloren want jij koos ${userMove} en de computer koos ${computerMove}`;
    computerResult = computerResult + 1;
    // add the +1 to the id "computerBox" / score for the HTML element
    computerBox.innerHTML = computerResult;
    body.style = "background-color: red;";
  }
  computerMove = moveArray[computerNumber];
}

function rock() {
  // Call the function computerNumberGenerator to give computerNumber a value
  let computerNumber = computerNumberGenerator();
  // set computerMove
  let computerMove = moveArray[computerNumber];
  // Reset the result text
  resultaat.innerHTML = "";
  // give value to userMove
  userMove = "rock";
  //  check if userMove is equal to computerMove
  if (userMove == computerMove) {
    resultaat.innerHTML = `Het is gelijkspel want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: orange;";
  } else if (computerMove == "paper") {
    resultaat.innerHTML = `Jij hebt verloren want jij koos ${userMove} en de computer koos ${computerMove}`;
    computerResult = computerResult + 1;
    body.style = "background-color: red;";
    // add the +1 to the id "computerBox" / score for the HTML element
    computerBox.innerHTML = computerResult;
  } else if (computerMove == "scissors") {
    resultaat.innerHTML = `Jij hebt gewonnen want jij koos ${userMove} en de computer koos ${computerMove}`;
    playerResult = playerResult + 1;
    body.style = "background-color: green;";
    // add the +1 to the id "playerBox" / score for the HTML element
    playerBox.innerHTML = playerResult;
  }
}

function scissors() {
  // Call the function computerNumberGenerator to give computerNumber a value
  let computerNumber = computerNumberGenerator();
  // set computerMove
  let computerMove = moveArray[computerNumber];
  // Reset the result text
  resultaat.innerHTML = "";
  // Give value to userMove
  userMove = "scissors";
  //  Check if userMove is equal to computerMove
  if (userMove == computerMove) {
    resultaat.innerHTML = `Het is gelijkspel want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: orange;";
  } else if (computerMove == "rock") {
    computerResult = computerResult + 1;
    resultaat.innerHTML = `Je bent verloren want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: red;";
    // add the +1 to the id "computerBox" / score for the HTML element
    computerBox.innerHTML = computerResult;
  } else if (computerMove == "paper") {
    playerResult = playerResult + 1;
    resultaat.innerHTML = `Je bent gewonnen want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: green;";
    // add the +1 to the id "playerBox" / score for the HTML element
    playerBox.innerHTML = playerResult;
  }
}

// this is a reload button to refresh your game!
function reload() {
  location.reload();
}
