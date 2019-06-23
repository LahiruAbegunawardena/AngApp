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

module.exports.getAllDet = function(response){
    myUser.find(response);
}

module.exports.getUser = function(unm, response){
    myUser.find({username: unm}, response);
}

module.exports.updateUser = function(updt_USr, callback){
    id = updt_USr._id;
    myUser.findOneAndUpdate({_id: id}, updt_USr, callback);
}

module.exports.deleteUser = function(id, callback){
    myUser.findOneAndDelete({_id: id}, callback);
}