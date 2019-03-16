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
    
module.exports = router;