var app = angular.module('app', []);

app.controller('ctrl', function ($scope, $http) {

    $scope.sendData = function(formdata){

        var url = 'https://api-stg.flowker.com.br/effce7f4-38d1-4dd5-b849-282f57bf8bd6/0ec4f022ddd4e00ffdb96323a42a3a22', data = formdata, config = 'application/json';

        $http.post(url, data, config)
        .then(function (response) {
            console.log(response);
    
        }, function (response) {
            console.log(response);
    
        });
    }

});