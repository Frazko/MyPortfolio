angular.module('personalPortfolio')
.directive('sliderMain', function() {
  return {
      restrict: 'A',
    	link: function (scope, iElement, iAttrs) {
    		 scope.title = "TEST" ;		
    	},
    	controller: function($scope, $rootScope){
            $scope.nombre = 'frazko';
            $scope.apellido = 'Murillo';
    	},
      templateUrl: 'views/slider-main.html'
    };
});
