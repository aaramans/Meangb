(function () {
    app.controller('dboardContrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('models/dashboard.json').then(function(stats){
            $scope.dbData = stats.data;
        },function(a,b,c){
            console.log(a,b,c);
        });
    }]);
})();
