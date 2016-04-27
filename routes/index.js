var express = require('express');
var router = express.Router();
var bank = require('../tweetBank');
var path = require('path');


router.get('/', function (req, res) {
	var tweets = bank.list();
	res.render('index', {title: 'The Real Twitter', showForm: true, tweets: tweets});
});

router.get('/users/:name', function(req, res, next) {
	var name = req.params.name;
	var tweets = bank.find(['name', name]);
	res.render('index', {title: 'The Real Twitter', tweets: tweets});
})

router.get('/tweets/:id', function(req, res, next) {
	var id = +req.params.id;
	var tweets = bank.find(['id', id]);
	console.log(tweets);
	res.render('index', {title: 'The Real Twitter', tweets: tweets});
})

router.post('/tweets', function(req, res) {
	var name = req.body.name;
	var text = req.body.text;
	res.redirect('/');
})
// router.get('/stylesheets/style.css', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
// })

module.exports = router;