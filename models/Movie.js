var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
    name: String,
    alias: [String],
    publish: Date,
    create_date: {
        type: Date,
        default: Date.now
    },
    images: {
        coverSmall: String,
        coverBig: String,
    },
    source: [{
        source: String,
        link: String,
        swfLink: String,
        quality: String,
        version: String,
        lang: String,
        subtitle: String,
        create_date: {
            type: Date,
            default: Date.now
        }
    }]
});
var Movie = mongodb.mongoose.model("Movie", MovieSchema);
var MovieDAO = function() {};

MovieDAO.prototype.save = function(obj, callback) {
    var instance = new Movie(obj);
    instance.save(function(err) {
        callback(err);
    });
};

// query
MovieDAO.prototype.findByName = function(name, callback) {
    Movie.findOne({name:name}, function(err, obj){
        console.log(err,obj);
        callback(err, obj);
    });
};

// edit
MovieDAO.prototype.edit = function(queryObj, updateObj, callback) {
    console.log("dddCxccccddddddddaaaa", queryObj, updateObj);
    // var instance = new Movie(obj);
    Movie.findOneAndUpdate(queryObj, updateObj, function(err) {
        callback(err);
    });
};

module.exports = new MovieDAO();