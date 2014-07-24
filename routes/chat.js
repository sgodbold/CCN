var express = require('express');
var router = express.Router();
var passport = require('passport');

var chatGroup = require('../models/chatGroup.js');

function needsLogin(req, res) {
  if(typeof(req.user) === 'undefined') {
    res.redirect('/');
  }
}

/* GET main chat page. */
router.get('/', function(req, res) {
  needsLogin(req, res);

  res.render('chat', {
    title: 'Chat',
  });
});

/* POST main chat page. */
router.post('/new', function(req, res) {
  //var group = new chatGroup(

  res.redirect('/chat');
});

module.exports = router;
