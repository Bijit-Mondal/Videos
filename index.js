var express = require('express');
var formidable = require('formidable');
var port = process.env.PORT || 5000;
var app = express();
app.get('/', function (req, res){
    res.sendFile(__dirname + '/error.html');
});
app.get('/1',function(req,res){
    res.sendfile(__dirname + '/1.html');
});
app.listen(port);
