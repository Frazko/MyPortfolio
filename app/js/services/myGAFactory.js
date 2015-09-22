angular.module('personalPortfolio')
    .factory('myGoogleAnalytics', [
        '$rootScope', '$window', '$location',
        function($rootScope, $window, $location) {

            var myGoogleAnalytics = {};

            /**
             * Set the page to the current location path
             * and then send a pageview to log path change.
             */


            myGoogleAnalytics.sendPageview = function() {
                if ($window.ga) {
                    $window.ga('set', 'page', $location.path());
                    //$window.ga('send', 'pageview');
                    ga('send', {
                        'hitType': 'event',
                        'eventCategory': 'button',
                        'eventAction': 'click',
                        'eventLabel': 'page view',
                        'hitCallback': function() {
                            console.warn(">>>>>>>> GA Event received ");
                        }
                    });
                    console.log("myGoogleAnalytics :: sendPageview");
                }
            }

            // subscribe to events
            $rootScope.$on('$viewContentLoaded', myGoogleAnalytics.sendPageview);

            return myGoogleAnalytics;
        }
    ]);
