'use strict';

angular.module('ticWithAngularFireApp')
  .controller('GameBoardCtrl', function ($scope, $routeParams, angularFire) {

    // gameBoardId is set to id (generated in match_player.js)
    $scope.gameBoardId = $routeParams.id;

    // mySymbol  is "x" or "o"
    $scope.mySymbol = $routeParams.mySymbol;    
`

    $scope.myTurn = false;
    
    // set  gameBoard to empty array
    $scope.gameBoard = [];

    // create new Firebase reference
    var gameBoardRef = new Firebase("https://3dd13-ttt-game.firebaseio.com/room/" + $routeParams.id);
    // "promises are objects which represent the pending result of an asynchronous operation."
    $scope.promise = angularFire(gameBoardRef, $scope, "gameBoard", []);
    
    // gameBoardRef.on('value')
    // gameBoard = ["", "", "", "", "", "", "", "", ""];
    // gameBoard[5] = "x"
    //
    // gameBoardRef.on('child_added')
    // gameBoard = []
    // gameBoard.push({1: "x"})
    //
    // gameBoardRef.on('child_changed')
    // gameBoard = {room: ["", "", "", "", "", "", "", "", ""]}
    // gameBoard.room[6] = "x"


    // (see $scope.promise above) 
    $scope.promise.then (function () {
      $scope.gameBoard = [];
      if ($routeParams.mySymbol == 'x') {
        console.log("I am First Move: Symbol: " + $routeParams.mySymbol);
        // if mySymbol is x, myTurn function is true
        $scope.myTurn = true;
      } else {
        console.log("I am Second Move: Symbol: " + $routeParams.mySymbol);
        $scope.myTurn = false;
      }
    });
    
    // function is only clled when user makes changes, opponenet changes or clearboard
    gameBoardRef.on('value', function(snapshot) {
      console.log("wait received");
      if ($scope.myTurn) {
        console.log("it is my turn but I receive. do nothing ");
      } else {
        console.log("snapshot val");
        console.log(snapshot.val());
        if (snapshot.val()) {
          console.log("snapshot is empty. do nothing ");
        } else {

          // if remote value and local values not equal, return true
          if (!arrays_equal(snapshot.val(), $scope.gameBoard)) {
            console.log("diff gameboard");
            if ($scope.isLosing()) {
              // print losing
              // redirect to match player if play again
            } else if ($scope.isDraw()) {
              // print draw
              // redirect to match player if play again
            } else {
              $scope.myTurn = true;
            }
          } else {
            console.log("same gameboard. do nothing "); 
          }
        }
      }
    });
    
            
    $scope.handleClick = function(index) {
      if ($scope.myTurn) { 
        $scope.gameBoard[index] = $scope.mySymbol;
      
        if ($scope.isWinning()) {
          // print winning
          // redirect to match player if play again
        } else if ($scope.isDraw()) {
          // print draw
          // redirect to match player if play again
        } else {
          $scope.myTurn = false;
        }
      }
    }
    
    $scope.isLosing = function() {
      return false; 
    }
    
    $scope.isWinning = function() {
      return false; 
    }
    
    $scope.isDraw = function() {
      return false; 
    }    
    
    function arrays_equal(a,b) { return !(a<b || b<a); }
  });