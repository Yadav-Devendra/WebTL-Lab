var ngApp = angular.module('myApp', []);

        ngApp.controller('personCtrl', function ($scope) {
            //$scope.message = "Hello World!"; 
            $scope.firstName = "John",
    $scope.lastName = "Doe",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
       
        });