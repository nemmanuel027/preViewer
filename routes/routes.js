var express = require('express');
var request = require('request');
var routing = express.Router();

//any routing
routing.get('/', function (req, res, next) {
    res.redirect('/previewer/login');
})

//routing login
routing.get('/login', function (req, res, next) {
    res.sendFile(path + '/public/views/login.html');
})

//routing login
routing.get('/home', function (req, res, next) {
    res.sendFile(path + '/public/views/home.html');
})

routing.post('/writeHtml', function (req, res) {
    const fs = require('fs');
    fs.writeFile(path + '/public/html_generated/index.html', req.body.cHtml, function(err) {
        if(err) {
            return console.log(err);
        }            
    });
    res.send("file saved");
});



module.exports = routing;