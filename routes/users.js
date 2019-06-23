const express = require('express');
const router = express.Router();

const userMod = require('../models/users');

router.post("", function(req, res){
    res.send("hello User..");
});

router.post("/regUsr", function(req, res){
    const nwUser = new userMod({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    });
    userMod.addUser(nwUser, function(err, nwUser){
        if(err) {
            res.json({
                status: false,
                msg: 'registration failed'
            });
        } if(nwUser) {
            res.json({
                status: true,
                msg:'User registered successfully',
                data: nwUser
            });
        }
    });
});
    
router.post('/getAll', function(req, res){      // post :- localhost:3000/user/getAll
    userMod.getAllDet(function(err, result) {
        if(err) { throw err;}
        if(result) {
            res.json({
                users : result
            });
        }
    });
});

router.post('/getOne', function(req, res){
    userMod.getUser(req.body.username, function(err, user){
        if(err){ throw err; }
        
        if(user) {
            res.json({
                result_user: user
            });
        }
    });
});

router.post('/updtOne', function(req, res){
    userMod.updateUser(req.body, function(err, user){
        if(err){ throw err; }
        
        if(user) {
            res.json({
                status: 'updated',
                result_user: user
            });
        }
    });
});

router.post('/dltOne', function(req, res){
    userMod.deleteUser(req.body._id, function(err, user){
        if(err){ throw err; }
        
        if(user) {
            res.json({
                status: 'deleted',
                result_user: user
            });
        }
    });
});

module.exports = router;
