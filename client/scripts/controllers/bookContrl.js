(function(mod){
    mod.controller('bookContrl', ['$scope', function ($scope) {
        if(!$scope.isSignedIn() || $scope.isSignedIn() === 'false'){
            $location.path('/');
        }else{

        }
    }]);
})(app);
