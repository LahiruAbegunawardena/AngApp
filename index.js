// get access to use express using variable
var express = require('express');

//use above classes we create this constants;;
const app = express();

app.listen(3000, function(){
    console.log("listening to port 3000");
});

app.get("/",function (req,res){
    res.send("hello world");
});