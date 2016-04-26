var express = require('express');
var app = express();


app.use(function(request, response, next) {
	console.log(request.method, request.path, response.statusCode);
	next();
});

app.use('/special', function(request, response, next) {
	console.log("special logger");
	next();
});


app.get('/', function(request, response) {
	response.send('hello world');
});


var server = app.listen(3000, function() {
	console.log('server started');
});

