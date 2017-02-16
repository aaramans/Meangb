(function () {
    app.controller('issueContrl', ['$scope', '$location', function ($scope, $location) {
        if(!$scope.isSignedIn() || $scope.isSignedIn() === 'false'){
            $location.path('/');
        }else{

        }
    }]);
})();
