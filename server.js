var express = require('express');
var app = express();
var port = process.env.PORT || 3000; 
var middleware = require('./middleware.js');
app.use(middleware.logger);

app.get('/about', function (req, res){
    res.send('Hello about us s');

});
app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function(){
    console.log('Express server started');


});