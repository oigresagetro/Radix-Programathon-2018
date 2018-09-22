const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crude';

mongoose.connect(URI)
    .then(db => console.log('DB IS CONNECTED'))
    .catch( err => console.error(err));

module.exports = mongoose;