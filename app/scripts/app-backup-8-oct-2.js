var currentSymbol = "x";

function handleClick(location) {
  if (alreadyOccupied(location)) {

  } else {
    makeNextMove(location, currentSymbol);
    if (isWinnning(currentSymbol)) {
      alert( currentSymbol + " wins!");
    } else {
      swapSymbol();
    }
  }
}

function makeNextMove(location, symbol) {
  document.getElementById("cell" + location).innerHTML = symbol;
}

function swapSymbol() {
  if (currentSymbol == "x") {
    currentSymbol = "o";
  } else {
    currentSymbol = "x";
  }
}


// if there is content, evaluates to true
// != means is not the same
function alreadyOccupied(location) {
  return document.getElementById("cell" + location).innerHTML != "";
}

function isWinnning(currentPlayer) {
  // check horizontal

  // function isSameSymbolsIn(currentPlayer){}

  for (var i=1; i <= 3; i++) {
    if (isSameSymbolsIn(i, i + 1, i +2, currentPlayer)) {
      return true;
    }
  }

  // check vertical
  for (var i=1; i <= 3; i++) {
    if (isSameSymbolsIn(i, i + 3, i +6, currentPlayer)) {
      return true;
    }
  }

  // check diagonal
  return isDiagonalSameSymbols(currentPlayer);
}

function isSameSymbolsIn(first, second, third, currentPlayer) {
  return document.getElementById("cell" + first).innerHTML == currentPlayer
    && document.getElementById("cell" + second).innerHTML == currentPlayer
    && document.getElementById("cell" + third).innerHTML == currentPlayer
}

function isDiagonalSameSymbols(currentPlayer) {
  var firstDiagonalCheck = (document.getElementById("cell1").innerHTML == currentPlayer &&
    document.getElementById("cell5").innerHTML == currentPlayer &&
    document.getElementById("cell9").innerHTML == currentPlayer);
  var secondDiagonalCheck = (document.getElementById("cell3").innerHTML == currentPlayer &&
    document.getElementById("cell5").innerHTML == currentPlayer &&
    document.getElementById("cell7").innerHTML == currentPlayer);
  return firstDiagonalCheck || secondDiagonalCheck;

}



Lab 1 - answer 2
function clearBoard (){
  for (var i=0); i<9 ; i <==9;) {
  var currentCell = document.getElementById("cell" + i)

  // <div class="cell x">x</div>
  // <div class="cell o">x</div>
  currentCell.innerHTML = "";
  currentCell.classList.remove("x");
  currentCell.classList.remove("o");


  }
}
/*Lab 1 - answer 2
function clearBoard (){
  for (var i=0); i<9 ; i <==9;) {
  var currentCell = document.getElementById("cell" + i)

  // <div class="cell x">x</div>
  // <div class="cell o">x</div>
  currentCell.innerHTML = "";
  currentCell.classList.remove("x");
  currentCell.classList.remove("o");


  }
}/*

/* Lab 1 - answer 1
function clearBoard (){
  for (var i=0); i<9 ; i <==9;) {
  document.getElementById("cell" + i).innerHTML = "";


  }
}
/*


/* Lab 1
function clearBoard(){

  document.getElementById("cell1").innerHTML == "";
  document.getElementById("cell2").innerHTML == "";
  document.getElementById("cell3").innerHTML == "";
  document.getElementById("cell4").innerHTML == "";
  document.getElementById("cell5").innerHTML == "";
  document.getElementById("cell6").innerHTML == "";
  document.getElementById("cell7").innerHTML == "";
  document.getElementById("cell8").innerHTML == "";
  document.getElementById("cell9").innerHTML == "";
} */


// Lab 2
function restartGame(){

currentSymbol = "x";
clearBoard();

}


// Lab 3
function randomSelectRandomSquare(){
  var randomNumber
  // assign opponent symbol to random square
  // square that has not been occupied

  //generate random number under no collision found
  do {
  randomNumber  = Math.floor((Math.random()*9)+1);
  } while ( !notOccupied(randomNumber));

  makeNextMove(randomNumber, currentPlayer);
}

// Lab 4 
// add Go back button at gameboard screen







