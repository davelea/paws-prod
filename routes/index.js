const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paws Around Motown', page: 'home'} );
});

router.get('/pricing', function(req, res, next) {
  res.render('pricing', { title: 'Paws Around Motown: Pricing', page: 'pricing'});
});

router.get('/new-pricing', function(req, res, next) {
  res.render('new-pricing', { title: 'Paws Around Motown: Pricing', page: 'new-pricing'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Paws Around Motown: About Us', page: 'about'});
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Paws Around Motown: Our Team', page: 'team'});
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Paws Around Motown: FAQ', page: 'faq'});
});

router.get('/request-more-information', function(req, res, next) {
  res.render('request-more-information', { title: 'Paws Around Motown: Request More Information'});
});

module.exports = router;
