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
      $scope.color = "color:#ff0000";
      $scope.borderColor = "border-color:#ff0000"; 
    } else if (commas <= 3){
      $scope.message = "Enjoy!";
      $scope.color = "color:#00ff00";
      $scope.borderColor = "border-color:#00ff00";
    } else if (commas > 3){
      $scope.message = "Too much!";
      $scope.color = "color:#00ff00";
      $scope.borderColor = "border-color:#00ff00";
    }
  };

}

})();
