const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const usrSchema = new scheme({
    firstname:{type:String},
    lastname:{type:String},
    username:{type:String},
    password:{type:String},
});

const myUser = module.exports = mongoose.model("User", usrSchema);

module.exports.addUser = function(nwUser, callback){
    nwUser.save(callback);
}