(function () {
'use strict';

angular.module('MsgApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.messageError = "";
  $scope.messageSuccess = "";
  $scope.items = "";

  $scope.countItems = function () {
    var commas = $scope.items.split(",").length || 0;

    if ($scope.items.length === 0) {
      $scope.messageError = "Please enter data first"; 
      $scope.messageSuccess = "";
    } else if (commas <= 3){
      $scope.messageSuccess = "Enjoy!";
      $scope.messageError = "";
    } else if (commas > 3){
      $scope.messageSuccess = "Too much!";
      $scope.messageError = "";
    }
  };

}

})();
