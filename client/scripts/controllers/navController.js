app.controller('NavController', ['$scope', function ($scope) {
    $scope.status = {isSignedIn : false};
    $scope.user = {};

    $scope.signIn = function () {
        //$('.login_box').modal('show');
        $scope.status.isSignedIn = true;
    };

    $scope.signOut = function () {
        $scope.status.isSignedIn = false;
    };

    $scope.signInSubmit = function () {
        console.log('submitting the form', $scope.signInObj);
        $('.login_box').modal('hide');
        $scope.status.isSignedIn = true;
    };
}]);
