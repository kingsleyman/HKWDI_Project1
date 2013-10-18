angular.module('tickeyApp')
.controller('GameBoardCtrl', function ($scope, $rootScope, angularFire) {
    

    var ref = new Firebase('https://kingsley.firebaseio.com/');
    $scope.leaderData = {};
    var p = angularFire(ref, $scope, "leaderData");
    
    

    // console.log($scope.leaderData);
    
    p.then(function(){
    	$scope.leaderData.testValue = "123";

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

/*
p.then(function() {
console.log("data: " + $scope.leaderData.name);
})

$scope.leaderData = {person: 
{name: 'Deepak', 
value: '1'}
};

*/