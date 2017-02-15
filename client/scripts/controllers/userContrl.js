(function () {
    app.controller('userContrl', ['$scope', 'serviceCall', function ($scope, serviceCall) {
        $scope.users = [];
        serviceCall.fetchData('users').then(function(res){
            $scope.users = res;
        });
    }]);
})();
