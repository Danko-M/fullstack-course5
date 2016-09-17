(function () {
'use strict';

angular.module('MsgApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.items = "";

  $scope.countItems = function () {
    var commas = $scope.items.split(",").length || 0;

    if ($scope.items.length === 0) {
        $scope.message = "Please enter data first"; 
    }
     else if (commas <= 3){
      $scope.message =  "Enjoy!";
    } else if (commas > 3){
      $scope.message =  "To much!";
    }
  };
}

})();
