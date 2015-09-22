'use strict';
/*jshint camelcase: false */
/*jshint -W069 */


angular.module('personalPortfolio', ['ui.router', 'angular-flexslider', 'angulartics', 'angulartics.google.analytics'])
    .config(['$analyticsProvider', function($analyticsProvider) {
        // turn off automatic tracking
        //$analyticsProvider.virtualPageviews(false);

    }])
    .run(['myGoogleAnalytics','$rootScope', function($rootScope, myGoogleAnalytics) {
    	
        var wow = new WOW({
            offset: 50
        })
        wow.init();
    }]);

