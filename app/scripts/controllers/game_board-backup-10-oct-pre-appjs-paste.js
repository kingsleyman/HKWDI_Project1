'use strict';

angular.module('tickeyApp')
.controller('GameBoardCtrl', function ($scope, $rootScope) {
    
    $scope.name = "Tickety";
    $rootScope.is_game_board_page = true;
    $rootScope.is_how_to_page = false;

    $scope.click = function(){
    alert("I've been clicked!");
    };

 

  });

/*


    $scope.minutes = "00";
    $scope.seconds = "00";


    $scope.startTimer = function() {
      $scope.seconds = "01"

    };

  $scope.stop = function() {
      $scope.seconds = "01"

    };








//var currentSymbol = "x";
$scope.currentSymbol ="x"

/* function swapSymbol() {
  if (currentSymbol == "x") {
    currentSymbol = "o";
  } else {
    currentSymbol = "x";
  }
} */

/*
$scope.swapSymbol = function() {
	if ($scope.currentSymbol == "x") {
		$scope.currentSymbol = "o";
	}
	else {
	$scope.currentSymbol = "x";	
	}
};

*/



