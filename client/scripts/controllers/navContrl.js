/*
* NavContrl is related to header.
* has all functionalities related to navigation menu
*/
(function () {
    app.controller('NavContrl', ['$scope', 'localStorageService', '$location', 'serviceCall', function ($scope, localStorageService, $location, serviceCall) {
        $scope.status = {
            isSignedIn: $scope.isSignedIn()
        };
        $scope.user = $scope.userDetails();

        $scope.signIn = function () {
            $('.login_box').modal('show');
        };

        $scope.signOut = function () {
            localStorageService.clearAll();
            $scope.status.isSignedIn = $scope.isSignedIn();
            $location.path('/');
            toastr.success("You have been logged out successfully");
        };

        $scope.signInSubmit = function () {
            serviceCall.postData('login', $scope.signInObj, 'on').then(function(res){
                if(res.status){
                    localStorageService.set('user',res.response);
                    localStorageService.set('isSignedIn',true);
                    $scope.status.isSignedIn = $scope.isSignedIn();
                    $scope.user = $scope.userDetails();
                    $('.login_box').modal('hide');
                    $location.path('/dashboard');
                }
                toastr.success(res.message);
            });
        };
    }]);
})();
