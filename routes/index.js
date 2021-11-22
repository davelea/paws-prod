const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paws Around Motown', page: 'home'} );
});

router.get('/pricing', function(req, res, next) {
  res.redirect(301, '/dog-walking');
});

router.get('/dog-walking-and-pet-sitting-services', function(req, res, next) {
  res.redirect(301, '/dog-walking');
});

router.get('/dog-walking', function(req, res, next) {
  req.path = 'dog-walking';
  res.render('dog-walking', { title: 'Paws Around Motown: Dog Walking Services', page: 'dog-walking'});
});

router.get('/training*', function(req, res, next) {
  res.redirect(301, '/dog-training');
});

router.get('/dog-training', function(req, res, next) {
  res.render('dog-training', { title: 'Paws Around Motown: Dog Training Services', page: 'dog-training'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Paws Around Motown: About Us', page: 'about'});
});

router.get('/team', function(req, res, next) {
  res.redirect(301, '/about');
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Paws Around Motown: FAQ', page: 'faq'});
});

router.get('/request-more-information', function(req, res, next) {
  res.render('request-more-information', { title: 'Paws Around Motown: Request More Information'});
});

module.exports = router;
