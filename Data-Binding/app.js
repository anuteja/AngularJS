
var app = angular.module('testApp', []);

app.controller('TestCtrl', ['$scope',
    function($scope){
        var personDetails = {username : "Sample", password : "password"}
       $scope.user ={name :"", pwd : ""};
        $scope.message ="";

        $scope.authenticateUser = function(){
            if(personDetails.username === $scope.user.name && personDetails.password === $scope.user.pwd){
                $scope.message = "You are authenticated"
            }else{
                $scope.message = "Invalid Username or Password.";
            }
            $scope.user ={name :"", pwd : ""};
        };

}]);

