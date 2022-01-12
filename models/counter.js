
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const counter=new Schema({
    lastReg : Number,
    

}) 


module.exports =mongoose.model('counter',counter);