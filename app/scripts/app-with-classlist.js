/* var currentSymbol = "x";

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
  document.getElementById("cell" + location).classList.add(symbol);
}/*

function swapSymbol() {
  if (currentSymbol == "x") {
    currentSymbol = "o";
  } else {
    currentSymbol = "x";
  }
}


// != means 'not equal to'
function alreadyOccupied(location) {
  return document.getElementById("cell" + location).innerHTML != "";
}

function isWinnning(currentPlayer) {
  // check horizontal

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


} */
var currentSymbol = "x";

function handleClick(location) {
  if (notOccupied(location)) {
    makeNextMove(location, currentSymbol);

    if (isWinning(currentSymbol)) {
      alert( currentSymbol + " wins!");
    } else {
      swapSymbol();
      selectRandomSquare(currentSymbol);
      swapSymbol();
    }
  } else {
    // do nothing
  }
}

function makeNextMove(location, symbol) {
  document.getElementById("cell" + location).innerHTML = symbol;
  document.getElementById("cell" + location).classList.add(symbol);
}

function swapSymbol() {
  if (currentSymbol == "x") {
    currentSymbol = "o";
  } else {
    currentSymbol = "x";
  }
}

//
// <div class="cell">X</div>
function notOccupied(location) {
  var contentAtLocation = document.getElementById("cell" + location).innerHTML;
  var result = (contentAtLocation == "");
  return result;
}

function isWinning(currentPlayer) {
  // check first row horizontal winning condition
  // isSameSymbolsIn(1, 2, 3, currentPlayer);

  // wrong !!
  for (var i=1; i <= 9; i += 3) {
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

function isSameSymbolsIn(first_cell_id, second_cell_id, third_cell_id, currentPlayer) {
  var first_comparison = document.getElementById("cell" + first_cell_id).innerHTML == currentPlayer;
  var second_comparison = document.getElementById("cell" + second_cell_id).innerHTML == currentPlayer;
  var third_comparison = document.getElementById("cell" + third_cell_id).innerHTML == currentPlayer;

  var result = first_comparison && second_comparison && third_comparison;

  return result;
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



// Lab 1
function clearBoard() {
  for ( var i=1 ; i <= 9; i++ ) {
    var currentCell = document.getElementById("cell" + i);

    // <div class="cell x">x</div>
    // <div class="cell o">o</div>
    // <div class="cell">x</div>
    currentCell.innerHTML = "";
    currentCell.classList.remove("x");
    currentCell.classList.remove("o");
  }
  // clear class list
}

// Lab 2
function restartGame() {
  // setTimeout(function() { clearBoard(); }, 1000);
  currentSymbol = "x";
  clearBoard();
}

// Lab 3
function selectRandomSquare(currentPlayer) {
  var randomNumber;

  do {
    randomNumber = Math.floor((Math.random()*9)+1);
  } while( !notOccupied(randomNumber) );

  makeNextMove(randomNumber, currentPlayer);
}

// Lab 4
// add Go Back button at gameboard screen