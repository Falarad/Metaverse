var express = require('express');
var router = express.Router();

var passport = require('passport');
var models = require('../routes/db.js');
var multiuser = require('../routes/multiuser.js');

var format = "";
var list = {};
/* GET home page. */
router.get('/', async function(req, res, next) {
  if(req.user) {
    res.redirect(301, '/feed')
  } else if(req.flash){
    res.render('index', { title: 'Metaverse', flash: req.flash('error')});
  } else {
    res.render('index', { title: 'Metaverse', flash: ""});
  }
})
router.get('/discover', async function(req, res, next) {
  list = await models.Post.find({});
  res.render('discover', { title: 'Discover' , list: list });
})
router.get('/feed', async function(req, res, next) {
  res.render('index', { title: 'Feed'});
})
router.get('/signup', async function(req, res, next) {
  res.render('index', { title: 'Metaverse'});
})
router.get('/worlds', async function(req, res, next) {
  res.render('index', { title: 'Metaverse'});
})
router.get('/management', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: db('home') });
})
router.post('/login', passport.authenticate('local', { failureRedirect: '/', failureFlash: true }), function(req, res){
  res.redirect(301, '/' + req.user.username + '/management');
})
router.get('/:user/management', async function(req, res, next) {
  if(req.session.passport.user == req.params.user){
    res.render('management', { title: 'Admin Panel', user: req.user });
  } else {
    res.redirect(301, '/');
  }
})
router.post('/:user/:post', async function(req, res, next) {
})
module.exports = router;
