const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicine = new Schema({

        medicineName        : {type : String, required : true},
        date                : {type : Date, required : true}
        //creo que falta duracion.
});

const background  = new Schema({
    medicine : [medicine],
    treatments : [String],
    diseases : [String]
  });

const childSchema = new Schema({
    fullName: {type : String, required : true},
    id      : {type : Number, default   : 0  },
    age     : {type : Number, required : true},
    gender  : {type : String, required : true},
    treatments  : {type : String, required : true},
    background : [background],
    ethnic  :{type: String,required : true }
});

module.exports = mongoose.model('Child', childSchema);
