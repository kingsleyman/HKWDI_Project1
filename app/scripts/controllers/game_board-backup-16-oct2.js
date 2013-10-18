'use strict';

angular.module('tickeyApp')
.controller('GameBoardCtrl', function ($scope, $rootScope, angularFire) {
    

  // Start Firebase
  var ref = new Firebase('https://kingsley.firebaseio.com/');
  $scope.leaderData = {};
  var p = angularFire(ref, $scope, "leaderData");
  
    // console.log($scope.leaderData);
    
    p.then(function(){

  $scope.leaderData = {
    name: {
      SeededValue: 1
    }
  };      
      console.log("data: " + $scope.leaderData.name);
    });

    $scope.getName = function() {
      $scope.userName = prompt("What's your name?");
      console.log($scope.userName);
    }

      $scope.addWinToLeaderBoard = function() {
        if ($scope.userName) {
          if ($scope.leaderData.name.hasOwnProperty($scope.userName)) {
            $scope.leaderData.name[$scope.userName]++;
          } else {
            $scope.leaderData.name[$scope.userName] = 1;
          }
        }
      };

  // End Firebase






    $scope.name = "Tickety";
    $rootScope.is_game_board_page = true;
    $rootScope.is_how_to_page = false;

$scope.currentSymbol = "x";
$scope.turnNum = 0;

$scope.handleClick = function (location) {

  if ($scope.notOccupied(location)) {
    $scope.makeNextMove(location, $scope.currentSymbol);

    if ($scope.isWinning($scope.currentSymbol)) {
      alert($scope.currentSymbol + " wins!");

      
      

    } else {
      $scope.swapSymbol();

      if ($scope.turnNum < 9) {
        $scope.selectRandomSquare($scope.currentSymbol);
        if ($scope.isWinning($scope.currentSymbol)) {
          alert( "o wins!");

        // restart game
        $scope.restartGame();

        } else {
          $scope.swapSymbol();
        }
      } else {
        $scope.swapSymbol();
      }
      
    }
  } else {
    // do nothing
  }
  if ($scope.turnNum == 9) {
    alert("Draw!");

    // restart game
    $scope.restartGame(); 
  }
}

  $scope.makeNextMove = function(location, symbol) {
  document.getElementById("cell" + location).innerHTML = symbol;
  document.getElementById("cell" + location).classList.add(symbol);
  $scope.turnNum++;
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
  $scope.result = ($scope.contentAtLocation == "");
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
  console.log (currentPlayer);
  $scope.first_comparison = document.getElementById("cell" + first_cell_id).innerHTML == currentPlayer;
  $scope.second_comparison = document.getElementById("cell" + second_cell_id).innerHTML == currentPlayer;
  $scope.third_comparison = document.getElementById("cell" + third_cell_id).innerHTML == currentPlayer;

  $scope.result = $scope.first_comparison && $scope.second_comparison && $scope.third_comparison;

  return $scope.result;
}

$scope.isDiagonalSameSymbols = function(currentPlayer) {
  console.log (currentPlayer);
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
    $scope.currentCell.innerHTML = "";
    $scope.currentCell.classList.remove("x");
    $scope.currentCell.classList.remove("o");


  }
  // clear class list
}

// Lab 2
$scope.restartGame = function() {
  // setTimeout(function() { clearBoard(); }, 1000);
  $scope.currentSymbol = "x";
  $scope.clearBoard(); 
  $scope.turnNum =0;
}

// Lab 3
  $scope.selectRandomSquare = function(currentPlayer) {
  $scope.randomNumber;

  do {
    $scope.randomNumber = Math.floor((Math.random()*9)+1);
  } while( !$scope.notOccupied($scope.randomNumber) );

  $scope.makeNextMove($scope.randomNumber, currentPlayer);
}

});



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




















