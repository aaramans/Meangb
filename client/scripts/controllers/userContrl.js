app.controller('userContrl', ['$scope', function ($scope) {
    var users = [{
        "uId": 1,
        "fname": "Aditya",
        "lname": "Samavedam",
        "uname": "aaramans",
        "password": "123456",
        "utype": "user",
        "email": "aaramans@gmail.com",
        "address": "asdf asdf asd f",
        "mobile": "9676443681",
        "avatarUrl": "www.sdfs.com",
        "status": "Active",
        "no.of.books": 2,
        "accessToken": "gfjsdhgsdfgfdhfsdg",
        "memberSince": "12/01/2017",
        "editedDate": "14/01/2017"
    },{
        "uId": 2,
        "fname": "Viswanath",
        "lname": "Rayala",
        "uname": "vissuR",
        "password": "123456",
        "utype": "user",
        "email": "vissu@gmail.com",
        "address": "kdfghgj fgsd fgs faegsf",
        "mobile": "9546784564",
        "avatarUrl": "www.dfgdh.com",
        "status": "Active",
        "no.of.books": 1,
        "accessToken": "gfjsdhgsdfgfdhfsdg",
        "memberSince": "12/01/2017",
        "editedDate": "14/01/2017"
    },{
        "uId": 3,
        "fname": "Raju",
        "lname": "Annapureddy",
        "uname": "rajuN",
        "password": "123456",
        "utype": "user",
        "email": "raju@gmail.com",
        "address": "ergdhs dsfh js g fgdsa",
        "mobile": "9467456745",
        "avatarUrl": "www.ashs.com",
        "status": "Active",
        "no.of.books": 3,
        "accessToken": "gfjsdhgsdfgfdhfsdg",
        "memberSince": "12/01/2017",
        "editedDate": "14/01/2017"
    },{
        "uId": 4,
        "fname": "Ravi",
        "lname": "Shetty",
        "uname": "ravis",
        "password": "123456",
        "utype": "user",
        "email": "ravi@gmail.com",
        "address": "hjsdga fh sgha sdf",
        "mobile": "9468456748",
        "avatarUrl": "www.dgfhdfgh.com",
        "status": "Active",
        "no.of.books": 0,
        "accessToken": "gfjsdhgsdfgfdhfsdg",
        "memberSince": "12/01/2017",
        "editedDate": "14/01/2017"
    }];

    $scope.users = users;
}]);
