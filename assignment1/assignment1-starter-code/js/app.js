(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.message = "";
  $scope.items = "";

  $scope.feedYaakov = function () {
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
