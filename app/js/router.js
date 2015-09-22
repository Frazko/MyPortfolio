'use strict';

/**
 * @ngdoc overview
 * @name 
 * @description
 * # 
 *
 * Router module of the application.
 */
angular.module('personalPortfolio')
    .config(["$stateProvider", "$urlRouterProvider",  function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider

            .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: function($analytics) {
                //$analytics.pageTrack('/');
                //$analytics.eventTrack('InicioEvent');
                //$analytics.eventTrack('eventName', {
                //    category: 'category',
                //    label: 'label'
                //});
            }
        })

        .state('resume', {
            url: '/resume',
            templateUrl: 'views/resume.html',
        })

        .state('category', {
            url: '/category',
            templateUrl: 'views/category.html',
            controller: 'CategoryController'
        })

        .state('category.frontend', {
            url: '/:categoryId',
            templateUrl: 'views/category.list.html',
            controller: 'CategoryController'
        })

        .state('category.olahtml', {
            url: '/:categoryId',
            templateUrl: 'views/category.list.html',
            controller: 'CategoryController'
        })

        .state('category.olaflash', {
            url: '/:categoryId',
            templateUrl: 'views/category.list.html',
            controller: 'CategoryController'
        })

        .state('detail', {
            url: '/detail/:typeId/:detailId',
            templateUrl: 'views/detail.html',
            controller: 'DetailController'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        });

    }]);
