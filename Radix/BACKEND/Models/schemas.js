const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const schemas = {
    const InChargeSchema = new Schema({
        name: {type: String, required: true},
        email: { type: String, required: true},
        password: { type: String , required: true},
        number: { type: String , required: true},
        ID: { type: String , required: true},
        relationship: { type: String , required: true},
        child : [{type: String}]
    }),

    const medicineSchema = new Schema({

            medicineName        : {type : String, required : true},
            date                : {type : Date, required : true}
            //creo que falta duracion.
    }),

    const childSchema = new Schema({
        fullName: {type : String, required : true},
        id      : {type : Number, default   : 0  },
        age     : {type : Number, required : true},
        gender  : {type : String, required : true},
        treatments  : {type : String, required : true},
        background  : {
            medicine :   [medicineSchema],
            treatments : [String],
            diseases : [String]
        },
        ethnic  :{type: String,required : true }
    })
};

module.exports = schemas;
