'use strict';
/*jshint camelcase: false */
/*jshint -W069 */


angular.module('personalPortfolio', ['ui.router', 'angular-flexslider'])
    .run(['$rootScope', function($rootScope) {
        var wow = new WOW({
            offset: 50
        })
        wow.init();
    }]);

