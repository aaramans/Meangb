(function () {
    app.controller('NavContrl', ['$scope', 'localStorageService', '$location', 'serviceCall', function ($scope, localStorageService, $location, serviceCall) {
        $scope.status = {
            isSignedIn: $scope.isSignedIn()
        };
        $scope.user = {};

        $scope.signIn = function () {
            //$('.login_box').modal('show');
            var params = {
                'uname' : 'Aditya',
                'pwd' : '123456'
            }
            serviceCall.postData('login', params, 'on').then(function(res){
                localStorageService.set('isSignedIn',true);
                $scope.status.isSignedIn = $scope.isSignedIn();
                $location.path('/dashboard');
                toastr.success(res.message);
            });
        };

        $scope.signOut = function () {
            localStorageService.clearAll();
            $scope.status.isSignedIn = $scope.isSignedIn();
            $location.path('/');
            toastr.success("You have been logged out successfully");
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
