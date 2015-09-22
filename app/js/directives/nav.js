angular.module('personalPortfolio')
    .directive('topNav', function() {
        return {
            restrict: 'AE',            
            controller: function($scope, $rootScope) {
                $scope.showMobileMenu = function showMobileMenu() {
                   console.log("showMobileMenu!!!!!!");
                   $("#items").toggleClass("mobileMenuHidden");

                };
            },
            templateUrl: 'views/nav.html'
        };
    });
