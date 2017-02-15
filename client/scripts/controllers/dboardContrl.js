(function () {
    app.controller('dboardContrl', ['$scope', 'serviceCall', function ($scope, serviceCall) {
        serviceCall.fetchData('dbData').then(function(res){
            $scope.dbData = res;
        });
    }]);
})();
