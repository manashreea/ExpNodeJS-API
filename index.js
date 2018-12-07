'use strict';

const url = require('url');
var express = require('express');
var app = express();

app.disable('x-powered-by');

var router = require('./router.js');
app.use('/',router);

app.use('/',function(req,res){
    let urlquery = url.parse(req.url,true);
    res.send("Here start your application >> "+ server.address().port);
});

var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log('Server listening on port >> %s', port);
});
