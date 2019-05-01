// IMPORTS DE TERCERCOS (INSTALADOS)
var express = require('express');
var path = require('path');
// IMPORTS LOCALES
var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var { config } = require('./config');
var db = require('./db')
// INICIALICE EXPRESS
var app = express();
const PORT = config.port

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// RUTAS DE ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));
// ENDPOINTS DE ARCHIVOS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', apiRouter);


app.listen(PORT, function(){
    console.log(`Server listening in port ${PORT}`)
})

module.exports = app;
