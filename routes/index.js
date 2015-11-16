var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/student-corner', function(req, res, next) {
  res.render('student-corner');
});

router.get('/upcoming-events', function(req, res, next) {
  res.render('upcoming-events');
});

router.get('/classroom-needs', function(req, res, next) {
  res.render('classroom-needs');
});

router.get('/resources', function(req, res, next) {
  res.render('resources');
});

module.exports = router;
