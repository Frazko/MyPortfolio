angular.module('personalPortfolio')
    .factory('ContactFactory', ['$http', function($http) {
        return function(message) {
            console.log("ContactFactory Called");
            return $http({
                method: 'POST',
                url: 'contact-form.php',
                data: $.param(message), //param method from jQuery
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                } //set the headers so angular passing info as form data (not request payload)
            });
        };
    }]);
