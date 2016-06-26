var express = require('express');
var router = express.Router();

var request = {};
/* GET home page. */
request.index = router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

request.login = router.get('/login', function(req, res, next) {
   res.render('login', {
     title: '用户登陆'
   });
});

request.doLogin = router.post('/doLogin', function(req, res) {
  var user = {
    username: 'admin',
    password: 'admin'
  }

  if (req.body.username === user.username && req.body.password === user.password) {
    res.redirect('/home');
  }
  res.redirect('/login');
});

request.logout = router.get('/logout', function(req, res) {
  res.redirect('/');
});

request.logout = router.get('/home', function(req, res) {
  var user = {
    username: 'admin',
    password: 'admin'
  }
  res.render('home', {
    title: 'Home',
    user: user
  });
});

module.exports = request;