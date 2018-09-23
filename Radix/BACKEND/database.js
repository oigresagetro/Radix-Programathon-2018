const mongoose = require('mongoose');

const URL = 'mongodb://localhost/Users';

mongoose.connect(URL, {useNewUrlParser:true})
    .then(db => console.log('DB IS CONNECTED'))
    .catch( err => console.error(err));

module.exports = mongoose;
