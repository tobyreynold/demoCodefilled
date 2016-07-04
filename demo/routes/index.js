var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'export' });
});

router.get('/webp', function(req, res, next) {
  res.render('webp', { title: 'export' });
});

module.exports = router;
