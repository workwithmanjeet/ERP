
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const Students =new Schema({
    name : String,
    regno: { type: Number, unique: true  },
    admissionDate: { type: Date, default: Date.now },
    gender: String,
    fatherName: String,
    motherName: String,
    dob : Date,
    age : { type: Number, min:5, max:22 },
    class : Number,
    division: String,
    Address : String,
    mobileNo : Number,
    estatus: String,

}) 


module.exports =mongoose.model('Students',Students);