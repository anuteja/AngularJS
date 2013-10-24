
var app = angular.module('testApp', []);

app.controller('TestCtrl', ['$scope', 'PersonService',
    function($scope, PersonService){

       $scope.user ={name :"", pwd : ""};
        $scope.message ="";

        $scope.authenticateUser = function(){

            console.log(PersonService.getPersonName(), "Person Name");
            console.log(PersonService.getPersonPassword(), "Person Password");


            if(PersonService.getPersonName() === $scope.user.name
                && PersonService.getPersonPassword() === $scope.user.pwd){
                $scope.message = "You are authenticated"
            }else{
                $scope.message = "Invalid Username or Password.";
            }
            $scope.user ={name :"", pwd : ""};
        };

}]);




app.service('PersonService',[
    function(){

        var personDetails = {username : "Sample", password : "password"};
       return {
           getPersonName : function(){
                       return personDetails.username;
           },

           getPersonPassword : function(){

               return personDetails.password;
           }

       }


    }
]);