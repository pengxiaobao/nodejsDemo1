var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Movie');
exports.mongoose = mongoose;