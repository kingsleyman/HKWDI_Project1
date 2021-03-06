var currentSymbol = "x";
var turnNum = 0;


// handleClick function referenced in each cell (in index.html) with location parameter already assigned.
function handleClick(location) {
// notOccupied function returns true or false (whether "", "x" or "o" == "")
// if notOccupied returns true, execute makeNextMove
// makeNextMove adds "x" or "o" 
  if (notOccupied(location)) {
    makeNextMove(location, currentSymbol);

    // isWinning checks if there is a winner
    if (isWinning(currentSymbol)) {
      alert( currentSymbol + " wins!");
      clearBoard();

    } 

    // 
    else {
      swapSymbol();

      if (turnNum < 9){
        selectRandomSquare(currentSymbol);
      }
      swapSymbol();

    }
  } else {
    // do nothing
  }
}

// adds "x" or "o" 
function makeNextMove(location, symbol) {
  document.getElementById("cell" + location).innerHTML = symbol;
  document.getElementById("cell" + location).classList.add(symbol);
  turnNum++;
}

function swapSymbol() {
  if (currentSymbol == "x") {
    currentSymbol = "o";
  } else {
    currentSymbol = "x";
  }
}

// notOccupied function returns true or false (whether "", "x" or "o" == "")
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

   console.log ("clearBoard");

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






angular.module('tickeyApp', [])
  .config(function ($routeProvider){
    $routeProvider
        .when('/game_board', {
          templateUrl: 'views/game_board.html',
          controller: 'GameBoardCtrl'
        })

        .when('/how_to', {
          templateUrl: 'views/how_to.html',
          controller: 'HowToCtrl'
        })

         .when('/', {
          templateUrl: 'views/mainCtrl.html',
          controller: 'mainCtrl'
        })


        .otherwise ({
          redirectTo: '/'
        })

  });














