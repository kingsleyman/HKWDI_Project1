'use strict';

angular.module('tickeyApp')
  .controller('mainCtrl', function ($scope, $rootScope) {
    
    $scope.name = "Tickety";   

    $rootScope.is_how_to_page = false;

    };

  });

  
  angular.module('newLocalStorageApp')
  .controller('mainCtrl', function ($scope, localStorageService) {
   localStorageService.add("names", ["Matt", "peter", "Someone else"]);
    });