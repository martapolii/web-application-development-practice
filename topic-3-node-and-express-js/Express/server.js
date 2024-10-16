var express = require('express'); 
var app = express(); 

app.set('view engine', 'ejs'); //setting view engine to ejs
app.use('/', function(req, res) { 
	res.send('Hello World'); 
}); 

app.listen(3000); 
console.log('Server running at http://localhost:3000/'); 
module.exports = app;  //export instance 
