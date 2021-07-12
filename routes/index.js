var express = require('express');
var router = express.Router();

var passport = require('passport');
var models = require('../routes/db.js');
var passportConfig = require('../routes/multiuser.js')

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
  res.render('signup');
})
router.post('/signup', passport.authenticate('local-signup', {successRedirect: '/management', failureRedirect: '/', failureFlash: true }));
router.get('/worlds', async function(req, res, next) {
  res.render('index', { title: 'Metaverse'});
})
router.get('/management', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: db('home') });
})
router.post('/login', passport.authenticate('local-login', {successRedirect: '/management', failureRedirect: '/', failureFlash: true }));
router.get('/management', isLoggedIn, async function(req, res, next) {
    res.render('management', { title: 'Admin Panel', user: req.user });
})
router.get('/logout', isLoggedIn, async function(req, res, next) {
  req.logout();
  res.redirect(301, '/');
})
function isLoggedIn(req, res, next){
  if(req.isAuthenticated())
    return next();
  res.redirect('/');
}
module.exports = router;
