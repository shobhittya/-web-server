var express = require('express');
var app = express();
var port = 4000;
app.get('/', function (req, res){
     //res.send('Hello Express !');
     res.send('The port number is' + port);

});



app.get('/about', function (req, res){
    res.send('Hello about us !');

});
app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function(){
    console.log('Express server started');


});