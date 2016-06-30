var Movie = require('./../models/Movie.js');
exports.movieAdd = function(req, res) {
    if (req.params.name) { //update
        return res.render('movie', {
            title: req.params.name + '|电影|管理|moive.me',
            label: '编辑电影:' + req.params.name,
            movie: req.params.name
        });
    } else {
        return res.render('movie', {
            title: '新增加|电影|管理|moive.me',
            label: '新增加电影',
            movie: false
        });
    }
};
// exports.doMovieAdd = function(req, res) {
//     res.send({
//         'success': true
//     });
// };


exports.doMovieAdd = function(req, res) {
    var json = req.body.content;
    if (json && json._id) { //update
    } else { //insert
        Movie.save(json, function(err) {
            if (err) {
                res.send({
                    'success': false,
                    'err': err
                });
            } else {
                res.send({
                    'success': true
                });
            }
        });
    }
};

exports.movieJSON = function(req, res) {
    Movie.findByName(req.params.name,function(err, obj){
        res.send(obj);
    });
}

exports.doEditMovie = function(req, res) {
    var name = req.params.name;
    var json = req.body.content;
    console.log("name json",name, json);
    if(name){
        Movie.edit({name: name}, json, function(err) {
            if (err) {
                res.send({
                    'success': false,
                    'err': err
                });
            } else {
                res.send({
                    'success': true
                });
            }
        });
    }
}

