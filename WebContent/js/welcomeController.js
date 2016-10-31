var myApp = angular.module("myModule", []);
var myController = function($scope){
$scope.message = "Welcome to angularjs deepthi";
};
myApp.controller("myController",myController);
/*var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.carname = "Volvo";
});*/