var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var express = require('express');

var server = http.createServer().listen(3000);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = 'ilya_test';
    }

    req.on('data', function (data) {
        body += ' '+ data;
    });

    req.on('end', function () {
        var post = querystring.parse(body);
        console.log(post);
        //res.writeHead(200, {'Content-Type': 'text/plain'});
        console.log("num: " + (5 +6*2)+JSON.stringify({post: post,
        request: req.data}));
    });
    var readSream = fs.createReadStream('index.html','utf8');
    readSream.pipe(res);
});

console.log('Listening on port 3000');