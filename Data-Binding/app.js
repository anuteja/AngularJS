
var app = angular.module('testApp', []);

function TestCtrl($scope) {

    var user = {name :"", pwd : ""};
    $scope.user =user;
}