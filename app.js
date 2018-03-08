// app.js
var express = require('express');
var app = express();
var db = require('./db'); // REQUISIÇAO PARA USO DO BANCO DE DADOS

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;
