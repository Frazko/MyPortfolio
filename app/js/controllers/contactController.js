angular.module('personalPortfolio')
    .controller('ContactController', ['$scope', '$http', '$state', '$rootScope', 'ContactFactory', function($scope, $http, $state, $rootScope, ContactFactory) {
        console.log("ContactController Loaded");
        $scope.resultMessage="";
        $scope.formSent=false;
        $scope.formData = {
            inputSubject: "",
            inputMessage: "",
            inputName: "",
            inputEmail: ""
        };


        $scope.formData.inputSubject = "Contacto desde FranciscoMurillo.com";
       

        $scope.submit = function(contactform) {
            console.log("submitting");

            if (contactform.$valid) {
                console.log("contactform.$valid");
                ContactFactory($scope.formData)
                    .then(function(res) {
                        console.warn("Success:: " + JSON.stringify(res));
                        //$state.go('thanks');
                        $scope.formSent=true;
                    }, function(error) {
                        console.warn("Error:: " + JSON.stringify(error));
                    });
            } else {
                console.log("!!!form not valid");
                $scope.resultMessage = 'Problemas con el servidor, por favor intente de nuevo más tarde, gracias.';
            }
        }
    }]);

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map

//# sourceMappingURL=../../maps/controllers/contactController.js.map
