var express = require('express');
var router = express.Router();
var redis = require('redis'),
    client = redis.createClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'export' });
});

router.get('/webp', function(req, res, next) {
  res.render('webp', { title: 'export' });
});

router.get('/redis', function(req, res, next) {

  var redis_data=[];
  client.on('error',function(err) {
  		console.log(err);
  });	

  client.set("string key", "string val", redis.print);

  client.hset("node key","node redis1",'value',redis.print);
  client.hset("node key","node redis2",'value',redis.print);
  client.hkeys("node key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
        redis_data[i] = reply; 
    });
    // client.quit();
    console.log("redis data："+redis_data);
    res.render('redis', { title: 'redis' , data: redis_data});
	});

  
});

module.exports = router;
