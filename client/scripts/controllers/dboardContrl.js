(function () {
    app.controller('dboardContrl', ['$scope', 'serviceCall', '$location', function ($scope, serviceCall, $location) {
        if(!$scope.isSignedIn() || $scope.isSignedIn() === 'false'){
            $location.path('/');
        }else{
            serviceCall.fetchData('dbData').then(function(res){
                $scope.dbData = res;
            });
        }
    }]);
})();
