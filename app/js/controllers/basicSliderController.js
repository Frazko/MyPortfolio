angular.module('personalPortfolio')
    .controller('BasicSliderController', function($scope) {

        $scope.slides = [
            '../images/1.jpg',
            '../images/2.jpg',
            '../images/3.jpg',
            '../images/4.jpg',
            '../images/5.jpg'
        ];

        $scope.nombre = "Frazko";
    });