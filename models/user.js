const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const passportlocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    userType:{
        type: String,
        required: true,
        enum : ['teacher','admin','student']
    }
})


UserSchema.plugin(passportlocalMongoose);

module.exports =mongoose.model('User',UserSchema)