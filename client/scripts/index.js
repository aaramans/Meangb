(function () {
    'use strict';

    var app = angular.module('meanApp', []);

    app.controller('NavController', ['$scope', function ($scope) {
        $scope.isSignedIn = false;
        $scope.userName = "Aditya";

        $scope.signIn = function () {
            $scope.isSignedIn = true;
        };

        $scope.signOut = function () {
            $scope.isSignedIn = false;
        };
    }]);
})();
