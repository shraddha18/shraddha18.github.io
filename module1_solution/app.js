(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.yayOrNay = "";
  $scope.testString="";

  $scope.checkMyItems = function () {

    $scope.name=$scope.testString;
    var arrayOfStrings = $scope.name.split(',');

    if($scope.testString.length === 0){
      $scope.yayOrNay = "Please Enter data first";
    }
    else if(arrayOfStrings.length <= 3 && arrayOfStrings.length > 0){
      $scope.yayOrNay = "Enjoy!";
    }
    else{
      $scope.yayOrNay = "Too much!";
    }


  };
}

})();
