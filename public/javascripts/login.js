var app = angular.module("previewer", []);
app.controller("loginCtrl", function ($scope, $http, $window) {

    $scope.agreeVar = false;

    $scope.checkIf = function()
    {
        if($scope.agreeVar==true)
        {
            window.location = "home";
        }
    }

});