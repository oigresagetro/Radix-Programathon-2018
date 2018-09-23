const mongoose = require('mongoose');

const { Schema } = mongoose;

const InChargeSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String , required: true},
    number: { type: String , required: true},
    ID: { type: String , required: true},
    relationship: { type: String , required: true},
    child : [{
        type: String
    }]




});

module.exports = mongoose.model('Employee', InChargeSchema);
