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
            var params = {};
            params.username = $scope.user.username;
            params.accessToken = $scope.user.accessToken;
            serviceCall.postData('logout', params, 'on').then(function(res){
                if(res.status){
                    localStorageService.clearAll();
                    $scope.status.isSignedIn = $scope.isSignedIn();
                    $location.path('/');
                    toastr.success("You have been logged out successfully");
                }else{
                    toastr.error(res.message);
                }
            });
        };

        $scope.signInSubmit = function () {
            serviceCall.postData('login', $scope.signInObj, 'on').then(function(res){
                if(res.status){
                    localStorageService.set('user',JSON.stringify(res.response));
                    localStorageService.set('isSignedIn',true);
                    $scope.status.isSignedIn = $scope.isSignedIn();
                    $scope.user = $scope.userDetails();
                    $('.login_box').modal('hide');
                    $location.path('/dashboard');
                    toastr.success(res.message);
                }else{
                    toastr.error(res.message);
                }
            });
        };
    }]);
})();
