var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' });
});
router.get('/discover', async function(req, res, next) {
  res.render('index', { title: 'Discover' , list: await db('home') });
});
router.get('/signup', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: await db('home') });
});
router.get('/worlds', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: await db('home') });
});
router.get('/characters', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: await db('home') });
});
router.get('/management', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: await db('home') });
});

module.exports = router;
