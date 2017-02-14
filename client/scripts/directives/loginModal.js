app.directive('loginModal', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/login.html',
        controller: 'NavController',
        scope: true
            /*,
                    link: function (scope, $elem, $attr) {
                        scope.app.user.signInObj = {};
                        scope.app.user.signInSubmit = function () {
                            console.log('submitting the form', scope.app.user.signInObj);
                            $('.login_box').modal('hide');
                            scope.app.isSignedIn = true;
                        };
                    }*/
    };
});
