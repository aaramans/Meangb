(function () {
    'use strict';

    var app = angular.module('meanApp', []);

    app.controller('NavController', ['$scope', function ($scope) {
        $scope.isSignedIn = false;
        $scope.user = {};

        $scope.signIn = function () {
            $scope.signInObj = {};
            $('.login_box').modal('show');
        };

        $scope.signOut = function () {
            $scope.isSignedIn = false;
        };
    }]);

    app.directive('loginModal', function(){
        return {
            restrict : 'E',
            replace : true,
            templateUrl : 'views/login.html',
            controller : 'NavController',
            link : function (scope, $elem, $attr) {
                scope.signInObj = {};
                scope.signInSubmit = function(isValid){
                    if(isValid){
                        console.log('submitting the form',scope.signInObj);
                        //$scope.isSignedIn = true;
                    }
                };
            }
        };
    })
})();
