const mongoose = require('mongoose');
const child = require('../Models/child')

const { Schema } = mongoose;

const InChargeSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String , required: true},
    number: { type: String , required: true},
    id : { type: String , required: true},
    relationship: { type: String , required: true},
    child : [{
        type: child
    }]
});

module.exports = mongoose.model('Parent', InChargeSchema);
