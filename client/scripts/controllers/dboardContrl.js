app.controller('dboardContrl', ['$scope', function ($scope) {
    var data = {
        "Total Users": 1835,
        "User Approvals": 8,
        "User Requests": 25,
        "Total Books": 5675,
        "Available Books": 4362,
        "Books with Users": 1313
    }

    $scope.dbData = data;
}]);
