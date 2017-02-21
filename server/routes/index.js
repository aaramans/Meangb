require('../models/connect');
var User = Schema.User;

exports.login = function(req, res){
    console.log(":: Login ::",req.body);
    if(req.body && req.body.uname && req.body.pwd){
        User.findOne({'userName': req.body.uname},function(err, user){
            if(err){
                res.send({"status":false,"message":"This is not a registered username"});
            }else{
                if(req.body.pwd === user.password){
                    res.send({"status":true,"message":"Logged in Successfully"});
                }else{
                    res.send({"status":false,"message":"Your password is incorrect"});
                }
            }
        });
    }else{
        res.send({"status":false,"message":"Invalid Request"});
    }
};
