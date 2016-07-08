var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('geolocation', { title: 'export' });
});

router.get('/maps', function(req, res, next) {
  res.render('mapgeo', { title: 'export' });
});

router.get('/location', function(req, res, next) {
  res.render('location', { title: 'export' });
});

module.exports = router;
