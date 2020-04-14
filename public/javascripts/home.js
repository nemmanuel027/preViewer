var app = angular.module("previewer", []);
app.controller("homeCtrl", function ($scope, $http, $window) {

$scope.htmlArea = "";

$scope.powerOff = function()
{
    window.location ="login"
}

$scope.changeHtml = function()
{
        
    var parameter = {"cHtml":$scope.htmlArea};
    $http({
        url: '/previewer/writeHtml',
        method: "POST",
        data: parameter,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) { 
            // download("index.html",completeHtml);
            // window.location="newproject"
            document.getElementById('iframeHtml').contentWindow.location.reload(true);
        }, function (response) { });
}

$scope.changeHtml();
});