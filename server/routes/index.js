require('../models/connect');
var pwdHash = require('password-hash');
var Schema = require('../models/schema');
var User = Schema.User;

exports.login = function(req, res){
    console.log(":: Login ::",req.body);
    if(req.body && req.body.uname && req.body.pwd){
        User.findOne({'userName': req.body.uname},function(err, user){
            if(err){
                res.send({"status":false,"message":"This is not a registered username"});
            }else{
                if(pwdHash.verify(req.body.pwd, user.password)){
                    res.send({"status":true,"message":"Logged in Successfully", "response":user});
                }else{
                    res.send({"status":false,"message":"Your password is incorrect"});
                }
            }
        });
    }else{
        res.send({"status":false,"message":"Invalid Request"});
    }
};

exports.createAdmin = function(req, res){
    console.log(":: create admin ::",req.body);
    if(req.body && req.body.accessKey === "qeiurghqwdruil"){
        var user = new User();
        var data = req.body.data;
        user.firstname = data.firstname;
		user.lastname = data.lastname;
		user.username = data.username;
		user.email = data.email;
		user.password = pwdHash.generate(data.password);
		user.mobile = data.mobile;
		user.address = data.address;
		user.status = 'active';
        user.role = 'admin';
        console.log("user created",  user);
        user.save(function(err, user){
            if(err){
                console.log("error" ,err);
                res.send({"status":false,"message":"This is not a registered username"});
            }else{
                res.send({"status":true,"message":"Admin has been created successfully"});
            }
        });
    }else{
        res.send({"status":false,"message":"You are not authorised to make this request"});
    }
};
