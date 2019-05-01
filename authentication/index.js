//IMPORTS DE TERCEROS
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport')

// IMPORTS PROPIOS
const { db } = require('./config')
const UserDetails = require('./models/users')
const authentication = require('./authentication')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session())


app.get('/', (req, res) => res.sendFile('login.html', { root : __dirname + '/views'}));
app.get('/success', (req, res)=>{
    res.send(`Bienvenido ${req.query.username}`)
})
app.get('/error', (req, res)=>{
    res.send('Error al iniciar sesión')
})

mongoose.connect(db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
	.once("open", () => console.log("Connected to database"));

app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });
const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));