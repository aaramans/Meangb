(function () {
    app.controller('NavContrl', ['$scope', 'localStorageService', '$location', function ($scope, localStorageService, $location) {
        $scope.status = {
            isSignedIn: $scope.isSignedIn()
        };
        $scope.user = {};

        $scope.signIn = function () {
            //$('.login_box').modal('show');
            localStorageService.set('isSignedIn',true);
            $scope.status.isSignedIn = $scope.isSignedIn();
            $location.path('/dashboard');
        };

        $scope.signOut = function () {
            localStorageService.clearAll();
            $scope.status.isSignedIn = $scope.isSignedIn();
            $location.path('/');
        };

        $scope.signInSubmit = function () {
            //console.log('submitting the form', $scope.signInObj);
            $('.login_box').modal('hide');
            localStorageService.set('isSignedIn',true);
            $scope.status.isSignedIn = $scope.isSignedIn();
            $location.path('/dashboard');
        };
    }]);
})();
