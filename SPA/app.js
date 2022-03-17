var app = angular.module('myApp', ['ngRoute']);
app.controller('HomeController', function ($scope) {
    $scope.message = 'Hello from HomeController';
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })

        .when('/blog', {
            templateUrl: 'pages/blog.html',
            controller: 'BlogController'
        })

        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'AboutController'
        })

        .otherwise({ redirectTo: '/' });
});