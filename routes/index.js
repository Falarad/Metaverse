var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' });
});
router.get('/discover', async function(req, res, next) {
  res.render('discover', { title: 'Discover' , list: await db('readAll') });
});
router.get('/signup', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: await db('home') });
});
router.get('/worlds', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: await db('home') });
});
router.get('/characters/:character', async function(req, res, next) {
  if(req.params.character.toLowerCase() == "jake"){
    var format = "Elysee"
    var list = {highConcept: "A highly litigious Olephem", trouble:"Freakin’ Crazy", heritage1: 'Always a loophole', heritage2: "Let's make a deal", focus: "Qualis disciple of Omega"}
  } else if (req.params.character.toLowerCase() == "cornelius") {
    var format = "Elysee"
    var list = {
      firstTable: {
        name: "Cornelius IV, Esq.", name2: "Augustus Ibn. Cornelius", mind: "[1][2][3]", refresh: "3/3", body: "[1][2]", player: "Miguel Pimentel", legend: "2/2", cred:"3 | 0/10"
      }, secondTable:{
        skills: {
          deceive: "4", deceive2: "0", athletics: "3", bureaucracy: "3", fight: "2", stealth: "2", will: "2", academics: "1", notice: "1", notice2: "0", provoke: "1", rapport: "1", rapport2: "4", empathy: "0", empathy2: "1", investigation:"0", investigation2: "1"
        }, aspects: {
          highConcept: "A highly litigious Olephem", highConcept2: "'All will know my name!'", trouble:"Freakin’ Crazy", trouble2: "Zero Subtlety", heritage1: 'Always a loophole', heritage2: "Let's make a deal", focus: "Qualis disciple of Omega"
        }
      }, thirdTable:{
        stunts: {
          legalEagle: "+2 to overcome or create an advantage with Bureaucracy, whenever you are finding or exploiting loopholes in the law.", solarCourt: "Your exposure to interplanetary law is so extensive that you’re at ease in any situation involving legal wrangling, wherever you are. You never suffer any increased difficulty from a lack of familiarity with the laws of your locale; your experience is so broad that you either know it already, or can make highly educated guesses about how it functions.", throwTheBookAtEm: "You may use bureaucracy instead of provoke to scare someone into doing something for you. If you succeed with style, your charges are legitimate and can be pursued. They, however, may also use Bureaucracy to defend if they wish instead of Will."
        }, extra: {
          twinSouls: "Flip a coin at the start of every session, heads is Cornelius, tails is Augustus. You may Roll Will at difficulty +4 to switch between Augustus Ibn. Cornelius and Cornelius IV. You may guarantee your switch for a legend.",
          objection: "If you notice a macical ability being activated, you may actively contest them instead of them having a passive difficulty."
        }, equipment: {
        }
      }
    }
  }
  res.render('character', { title: req.params.character , list: list, template: format, regex: /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])|([A-Z]|[a-z])([0-9])|^(a-z)/g });
});
router.get('/management', async function(req, res, next) {
  res.render('index', { title: 'Metaverse' , list: await db('home') });
});

module.exports = router;
