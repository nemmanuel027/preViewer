var express = require('express');
var bodyParser = require("body-parser");
var router = require('./routes/routes');

var appPort=8090;
global.path = __dirname;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/previewer', router);


app.listen(appPort);
console.log("Service started and listening at port:", appPort);