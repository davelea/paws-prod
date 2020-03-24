var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paws Around Motown'} );
});

router.get('/pricing', function(req, res, next) {
  res.render('pricing', { title: 'Paws Around Motown: Pricing'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Paws Around Motown: About Us'});
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Paws Around Motown: Our Team'});
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Paws Around Motown: FAQ'});
});

router.get('/request-more-information', function(req, res, next) {
  res.render('request-more-information', { title: 'Paws Around Motown: Request More Information'});
});

module.exports = router;
