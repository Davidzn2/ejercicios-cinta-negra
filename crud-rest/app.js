// IMPORTS DE TERCERCOS (INSTALADOS)
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
// IMPORTS LOCALES
var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api')
var { config } = require('./config')

// INICIALICE EXPRESS
var app = express();

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// RUTAS DE ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

// ENDPOINTS DE ARCHIVOS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', apiRouter);

mongoose.connect(config.db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
	.once("open", () => console.log("Connected to database"));

const PORT = config.port
app.listen(PORT, function(){
    console.log(`Server listening in port ${PORT}`)
})

module.exports = app;
