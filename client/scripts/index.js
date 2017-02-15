var app;
(function () {
    'use strict';

    app = angular.module('meanApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap']);

    app.config(['$routeProvider', '$locationProvider',function ($routeProvider,$locationProvider) {
        $routeProvider.when('/', {
                templateUrl: 'views/landing.html'
            }).when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'dboardContrl'
            }).when('/users', {
                templateUrl: 'views/users.html',
                controller: 'userContrl'
            }).when('/books', {
                templateUrl: 'views/books.html',
                controller: 'bookContrl'
            }).when('/issues', {
                templateUrl: 'views/issues.html',
                controller: 'issueContrl'
            }).otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
})();
