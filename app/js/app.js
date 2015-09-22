'use strict';
/*jshint camelcase: false */
/*jshint -W069 */


angular.module('personalPortfolio', ['ui.router', 'angular-flexslider'])
    .config(function($httpProvider) {})
    .run(function($rootScope, $http, $location, $state, $window) {
        var wow = new WOW({
            offset: 50
        })
        wow.init();
    });
