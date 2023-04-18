// Maak een lege variabel genaamd userMove;
let userMove;
// Maak een variabel genaamd computerNumber;
let computerNumber;
// spelregels
// 1. papier wint van steen
// 2. steen wint van schaar
// 3. schaar wint van papier

// Elementen declareren // "To retrieve this from an HTML element, use an ID"
let file = document.getElementsByTagName("body");
let body = file[0];
let resultaat = document.getElementById("resultaat");
let playerBox = document.getElementById("player_score");
let computerBox = document.getElementById("computer_score");
let computerResult = 0;
let playerResult = 0;

let moveArray = ["paper", "rock", "scissors"];
function computerNumberGenerator() {
  //   get the lengh of the array
  const moveArrayLength = moveArray.length;

  return (computerNumber = Math.floor(Math.random() * moveArrayLength)); //moveArray.lenght means the length of moveArray
}

function paper() {
  // Array met mogelijke moves maken
  let computerNumber = computerNumberGenerator();
  let computerMove = moveArray[computerNumber];
  // give value to userMove
  resultaat.innerHTML = "";

  userMove = "paper";

  //  check if userMove is equal to computerMove
  if (userMove == computerMove) {
    resultaat.innerHTML = `Het is gelijkspel want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: orange;";
  } else if (computerMove == "rock") {
    resultaat.innerHTML = `Jij hebt gewonnen want jij koos ${userMove} en de computer koos ${computerMove}`;
    playerResult = playerResult + 1;
    body.style = "background-color: green;";
    // add the +1 to the id "playerBox" for the HTML element
    playerBox.innerHTML = playerResult;
  } else if (computerMove == "scissors") {
    resultaat.innerHTML = `Jij hebt verloren want jij koos ${userMove} en de computer koos ${computerMove}`;
    computerResult = computerResult + 1;
    // add the +1 to the id "computerBox" for the HTML element
    computerBox.innerHTML = computerResult;
    body.style = "background-color: red;";
  }
  computerMove = moveArray[computerNumber];
}

function rock() {
  let computerNumber = computerNumberGenerator();
  // set computerMove
  let computerMove = moveArray[computerNumber];
  // give value to userMove
  resultaat.innerHTML = "";

  userMove = "rock";
  //  check if userMove is equal to computerMove
  if (userMove == computerMove) {
    resultaat.innerHTML = `Het is gelijkspel want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: orange;";
  } else if (computerMove == "paper") {
    resultaat.innerHTML = `Jij hebt verloren want jij koos ${userMove} en de computer koos ${computerMove}`;
    computerResult = computerResult + 1;
    body.style = "background-color: red;";
    // add the +1 to the id "computerBox" for the HTML element
    computerBox.innerHTML = computerResult;
  } else if (computerMove == "scissors") {
    resultaat.innerHTML = `Jij hebt gewonnen want jij koos ${userMove} en de computer koos ${computerMove}`;
    playerResult = playerResult + 1;
    body.style = "background-color: green;";
    // add the +1 to the id "playerBox" for the HTML element
    playerBox.innerHTML = playerResult;
  }
}

function scissors() {
  let computerNumber = computerNumberGenerator();
  // set computerMove
  let computerMove = moveArray[computerNumber];
  // give value to userMove
  resultaat.innerHTML = "";
  userMove = "scissors";
  //  check if userMove is equal to computerMove
  if (userMove == computerMove) {
    resultaat.innerHTML = `Het is gelijkspel want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: orange;";
  } else if (computerMove == "rock") {
    computerResult = computerResult + 1;
    resultaat.innerHTML = `Je bent verloren want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: red;";
    // add the +1 to the id "computerBox" for the HTML element
    computerBox.innerHTML = computerResult;
  } else if (computerMove == "paper") {
    playerResult = playerResult + 1;
    resultaat.innerHTML = `Je bent gewonnen want jij koos ${userMove} en de computer koos ${computerMove}`;
    body.style = "background-color: green;";
    // add the +1 to the id "playerBox" for the HTML element
    playerBox.innerHTML = playerResult;
  }
}
//call the function test 👆

// this is a reload button to refresh your game!
function reload() {
  location.reload();
}
