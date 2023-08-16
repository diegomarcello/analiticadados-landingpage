var app = angular.module('app', []);

app.controller('ctrl', function ($scope, $http, $window) {

    $scope.sendData = function(formdata, typeform){
        if ( formdata.phonenumber.length < 10 ){
            $scope.message = "Opa! Você precisa informar seu telefone...";
        }else{

            formdata.typeform = typeform;
            var url = 'https://api-stg.flowker.com.br/effce7f4-38d1-4dd5-b849-282f57bf8bd6/0ec4f022ddd4e00ffdb96323a42a3a22', data = formdata, config = 'application/json';
            
    
            $http.post(url, data, config)
            .then(function (response) {
                console.log(response);
                
                if(typeform == "whatsapp"){
                    $window.location.href = 'https://web.whatsapp.com/send?phone=+554184308866&text=Olá tenho interesse em saber informação sobre Consórcio Estruturado...'
                }
    
                $scope.message = "Opa! estamos entrando em contato..."
        
            }, function (response) {
                console.log(response);
        
            });
        }
    }
});