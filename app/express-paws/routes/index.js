var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paws Around Motown'} );
});

router.get('/pricing', function(req, res, next) {
  res.render('pricing');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/team', function(req, res, next) {
  res.render('team');
});

router.get('/faq', function(req, res, next) {
  res.render('faq');
});

router.get('/request-more-information', function(req, res, next) {
  res.render('rfi');
});

module.exports = router;
