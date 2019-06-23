// get access to use express using variable
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//use above classes we create this constants;;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000, function(){
    console.log("listening to port 3000");
});

app.get("/",function (req,res){
    res.send("hello world");
});

mongoose.connect("mongodb://localhost:27017/AngAppDB", {useNewUrlParser: true}, function(err, db){
    if (err) {
        console.log('db connection failed');    
    } if (db) {
        console.log('db connected succesfully..');    
    }
});


//this file contains functions to url detections and do operations
const rguser = require('./routes/users'); 

app.use('/user', rguser); //if route is localhost:3000/user
