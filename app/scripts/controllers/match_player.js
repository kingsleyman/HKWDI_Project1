'use strict';

angular.module('tickeyApp')
  .controller('MatchPlayerCtrl', function ($scope, $rootScope, angularFire, $location) {
  	
  	// hide Match Player hyperlink
  	$rootScope.is_match_player_page = true;

  	$scope.waitingRoom = {};
  	var waitingRoomRef = new Firebase("https://kingsley.firebaseio.com/waiting_room");
  	$scope.promise = angularFire(waitingRoomRef, $scope, "waitingRoom");

  	/*
  	// Step 1
  	$scope.waitingRoom = {xJoined: true, gameBoardNumber: generateGameBoardNumber()};

	});
	*/

  	// Step 2
  	/*
  	$scope.promise.then (function () {
  		$scope.createWaitingRoom();
  	});

  	$scope.createWaitingRoom = function() {
  		$scope.waitingRoom = {xJoined: true, gameBoardNumber: generateGameBoardNumber()};
  		$scope.noticeMessage = "You are x, waiting for opponent";
  	}
  	*/


  	/*
  	$scope.createWaitingRoom = function() {
  		$scope.waitingRoom = {xJoined: true, gameBoardNumber: generateGameBoardNumber()}
  		$scope.noticeMessage = "You are x, waiting for opponent.";

  		waitingRoomRef.on('child removed',)
  	}
  	*/

  	
	function generateGameBoardNumber() {
		// 2 ^ 23 -1
		return Math.floor(Math.random() * 16777215).toString(16);
	}
	


	// Step 4
	// 
	$scope.promise.then(function() {
		if ($scope.waitingRoom.xJoined == true) {
			$scope.joinWaitingRoom();
		} else {
			$scope.createWaitingRoom();
		}
	});

	$scope.createWaitingRoom = function() {
		$scope.waitingRoom = {xJoined: true, gameBoardNumber: generateGameBoardNumber()};
		$scope.noticeMessage = "You are x, waiting for an opponent.";


		// snapshot
		waitingRoomRef.once('child_removed', function(snapshot) {
			// TODO should double check if I am paired
			$location.path('game_board/' + $scope.waitingRoom.gameBoardNumber + '/x');
		});
	}
	
	$scope.joinWaitingRoom = function() {
		var gameBoardNumber = $scope.waitingRoom.gameBoardNumber;
		$scope.waitingRoom = {}; // trigger child_removed

		$location.path('game_board/' + gameBoardNumber + 'o');
	}


});


