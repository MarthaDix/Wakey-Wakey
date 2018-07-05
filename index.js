var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('Html'))


app.listen(3000);