'use strict'

const express = require("express");
const app = express();
const body = require("body-parser");

//Middlewares
app.use(body.urlencoded({extended:false}));
app.use(body.json());

//Cors

//rutas
app.use('/api', require('./route/index'));
//Exportar
module.exports = app;