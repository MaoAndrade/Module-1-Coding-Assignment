(function(){
'use strict';

 angular.module('LunchCheck', [])

 .controller('LunchCheckController', LunchCheckController);

 LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope){

   $scope.message = "";
   $scope.menus = "";

   $scope.checkIfTooMuch = function (){
     var menus = $scope.menus;

     if (menus == "")
     {
       $scope.message = "Please enter data first."
       $scope.status = "warning";
     }
     else {
       var cntMenus = menus.split(',').length;
       $scope.status = "success";
       if (cntMenus > 3)
       {
         $scope.message = "Too Much!";
       }
       else {
         $scope.message = "Enjoy!";
       }
     }
   };

 };

})();
