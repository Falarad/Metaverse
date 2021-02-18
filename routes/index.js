var express = require('express');
var router = express.Router();
var models = require('../routes/db.js');
var format = "";
var list = {};
/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' });
})
router.get('/discover', async function(req, res, next) {
  list = await models.Char.find({});
  res.render('discover', { title: 'Discover' , list: list })
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
router.get('/:user/newcharacter', async function(req, res, next) {
  res.render('index', { title: 'Admin Panel' });
})
router.post('/:user/:character', async function(req, res, next) {
})
module.exports = router;
