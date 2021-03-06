var express = require('express');
var app = express();
var swig = require('swig');
var bank = require('./tweetBank');
var routes = require('./routes/');
var parser = require('body-parser');
var socketio = require('socket.io');
swig.setDefaults({cache: false});


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

app.use(parser.urlencoded());
app.use(parser.json());

app.use(function(request, response, next) {
	console.log(request.method, request.path, response.statusCode);
	next();
});

var server = app.listen(3000, function() {
	console.log('server started: listening');
});
var io = socketio.listen(server);

app.use('/', routes(io));
app.use(express.static('public'));

// app.post('/tweets', function(request, response) {
// 	bank.add('sabrina tweets', 'hello world');
// 	bank.add('jason tweets', 'that is lame');
// 	response.status(200);
// });




