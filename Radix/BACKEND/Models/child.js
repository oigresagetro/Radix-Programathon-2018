const mongoose = require('mongoose');

const { Schema } = mongoose;

const childSchema = new Schema({
    fullName: {type : String, required : true},
    ID      : {type : String,default   : 0   },
    age     : {type : String, required : true},
    gender  : {type : String, required : true},

    medicine: {
        medicineName        : {type : String, required : true},
        date                : {type : Date, required : true}
    },

    treatments  : {type : String, required : true},
    background  : {
        medicine :   [medicine],
        treatments : [treatments],
        diseases : [String]
    },
    ethnic  :{type: String,required : true }



});

module.exports = mongoose.model('Employee', childSchema);
