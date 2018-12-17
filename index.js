// get access to use express using variable
var express = require('express');
var mongoose = require('mongoose');

//use above classes we create this constants;;
const app = express();

app.listen(3000, function(){
    console.log("listening to port 3000");
});

app.get("/",function (req,res){
    res.send("hello world");
});

const dbconnection = mongoose.connect("mongodb://localhost:27017/AngAppDB", {useNewUrlParser: true});

if (dbconnection != null) {
    console.log('db connected successfully');
} else if(dbconnection == null){
    console.log('db connection failed');    
}

//this file contains functions to url detections and do operations
const rguser = require('./routes/users'); 

app.use('/user', rguser); //if route is localhost:3000/user
