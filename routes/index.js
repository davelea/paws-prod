const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paws Around Motown', page: 'home'} );
});

router.get('/pricing', function(req, res, next) {
  res.redirect(301, '/dog-walking-and-pet-sitting-services')
});

router.get('/dog-walking-and-pet-sitting-services', function(req, res, next) {
  req.path = 'dog-walking-and-pet-sitting-services';
  res.render('pricing', { title: 'Paws Around Motown: Dog Walking and Pet Sitting Services', page: 'dog-walking-and-pet-sitting-services'});
});

router.get('/training*', function(req, res, next) {
  res.render('training', { title: 'Paws Around Motown: Training Services', page: 'training'});
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
