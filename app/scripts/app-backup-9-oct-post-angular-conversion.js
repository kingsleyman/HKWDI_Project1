$scope.currentSymbol = "x";
$scope.turnNum = 0;

  $scope.handleClick = function(location) {
  if ($scope.notOccupied(location)) {
    $scope.makeNextMove(location, $scope.currentSymbol);

    if ($scope.isWinning(currentSymbol)) {
      alert( $scope.currentSymbol + " wins!");
      $scope.clearBoard();

    } else {
      $scope.swapSymbol();

      if (turnNum < 9){
        $scope.selectRandomSquare(currentSymbol);
      }
      $scope.swapSymbol();

    }
  } else {
    // do nothing
  }
}

  $scope.makeNextMove = function(location, symbol) {
  document.getElementById("cell" + location).innerHTML = symbol;
  document.getElementById("cell" + location).classList.add(symbol);
  turnNum++;
}

  $scope.swapSymbol = function() {
  if ($scope.currentSymbol == "x") {
    $scope.currentSymbol = "o";
  } else {
    $scope.currentSymbol = "x";
  }
}

//
// <div class="cell">X</div>
  $scope.notOccupied = function(location) {
  $scope.contentAtLocation = document.getElementById("cell" + location).innerHTML;
  $scope.result = (contentAtLocation == "");
  return $scope.result;
}

  $scope.isWinning = function(currentPlayer) {
  // check first row horizontal winning condition
  // isSameSymbolsIn(1, 2, 3, currentPlayer);

  // wrong !!
  for (var i=1; i <= 9; i += 3) {
    if ($scope.isSameSymbolsIn(i, i + 1, i +2, currentPlayer)) {
      return true;
    }
  }

  // check vertical
  for (var i=1; i <= 3; i++) {
    if ($scope.isSameSymbolsIn(i, i + 3, i +6, currentPlayer)) {
      return true;
    }
  }

  // check diagonal
  return $scope.isDiagonalSameSymbols(currentPlayer);
}

$scope.isSameSymbolsIn = function(first_cell_id, second_cell_id, third_cell_id, currentPlayer) {
  $scope.first_comparison = document.getElementById("cell" + first_cell_id).innerHTML == currentPlayer;
  $scope.second_comparison = document.getElementById("cell" + second_cell_id).innerHTML == currentPlayer;
  $scope.third_comparison = document.getElementById("cell" + third_cell_id).innerHTML == currentPlayer;

  $scope.result = first_comparison && second_comparison && third_comparison;

  return $scope.result;
}

function isDiagonalSameSymbols(currentPlayer) {
  $scope.firstDiagonalCheck = (document.getElementById("cell1").innerHTML == currentPlayer &&
    document.getElementById("cell5").innerHTML == currentPlayer &&
    document.getElementById("cell9").innerHTML == currentPlayer);
  $scope.secondDiagonalCheck = (document.getElementById("cell3").innerHTML == currentPlayer &&
    document.getElementById("cell5").innerHTML == currentPlayer &&
    document.getElementById("cell7").innerHTML == currentPlayer);
  return $scope.firstDiagonalCheck || $scope.secondDiagonalCheck;
}



// Lab 1
$scope.clearBoard = function() {

   console.log ("clearBoard");

  for ( var i=1 ; i <= 9; i++ ) {
    $scope.currentCell = document.getElementById("cell" + i);

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
$scope.restartGame = function() {
  // setTimeout(function() { clearBoard(); }, 1000);
  currentSymbol = "x";
  $scope.clearBoard();
}

// Lab 3
  $scope.selectRandomSquare = function(currentPlayer) {
  $scope.randomNumber;

  do {
    $scope.randomNumber = Math.floor((Math.random()*9)+1);
  } while( !notOccupied(randomNumber) );

  $scope.makeNextMove(randomNumber, currentPlayer);
}

// Lab 4
// add Go Back button at gameboard screen


/* conversion examples
var currentSymbol = "x";
$scope.currentSymbol ="x"

function swapSymbol() {
  if (currentSymbol == "x") {
    currentSymbol = "o";
  } else {
    currentSymbol = "x";
  }
} 


$scope.swapSymbol = function() {
  if ($scope.currentSymbol == "x") {
    $scope.currentSymbol = "o";
  }
  else {
  $scope.currentSymbol = "x"; 
  }
};
*/





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














