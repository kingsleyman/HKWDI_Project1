'use strict';

angular.module('tickeyApp')
.controller('HowToCtrl', function ($scope, $rootScope) {
    
	$scope.name = "Tickety";
    $scope.how = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. ";
    
    $rootScope.is_how_to_page = true;
    $rootScope.is_game_board_page = false;
    


  });