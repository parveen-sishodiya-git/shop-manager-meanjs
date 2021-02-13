console.log("I am home grocer");
//const packageName = require('mongo');

let app = angular.module("shopper",["ngRoute"]);

app.config($routeProvider => {
    $routeProvider.when("/",{
        templateUrl:"assets/views/dynamic/dashboard.html"
    });
    $routeProvider.when("/register",{
        templateUrl:"assets/views/static/register.html",
        controller:"registrationController"
    });
});

app.controller("registrationController",function ($scope) {
       $scope.registerUser = ()=>{
           console.log($scope.user);
       }
})