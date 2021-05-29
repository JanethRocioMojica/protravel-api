'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3001;
mongoose.Ppromise = global.Promise;
mongoose.connect('mongodb://localhost:27017/destinos', {useUnifiedTopology:true,useNewUrlParser: true})
    .then(()=>{
        console.log('conexion exitosa a la base de datos.');
        app.listen(port, ()=>{
            console.log('servidor creado correctamente');
        })
    })

    .catch(err=> console.log(err));
   
