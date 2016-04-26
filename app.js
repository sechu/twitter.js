var express = require('express');
var app = express();
var swig = require('swig');
swig.setDefaults({cache: false});


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

app.use(function(request, response, next) {
	console.log(request.method, request.path, response.statusCode);
	next();
});

app.use('/special', function(request, response, next) {
	console.log("special logger");
	next();
});


app.get('/', function(request, response) {
	response.render('index', {
		title: "An Example",
		people: [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}]
	});
	//response.send(result);
});


var server = app.listen(3000, function() {
	console.log('server started');
});
