const express = require('express')
const http = require('http')
const jwt = require('express-jwt')

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 3000
const freeMusic = [{"Jaja":"Jejee"}]
const todaLaMusic = [{"beyonce":"Alguna de beyonce"},{"Salo Zirdok":"Reggeton"}]
//creando el secret
const secret  = { secret: process.env.SECRET || 'pedo' }

app.get('/api/users', jwt(secret),(req, res) => {
  //validando que el usuario sea admin
  if(req.user.admin){
    if(req.user.plan=="free"){
        return res.status(200).send(freeMusic)
    }else if(req.user.plan=="supermegapago"){
        return res.status(200).send(todaLaMusic)
    }
  }
  //respuesta para el usuario que no es admin
  res.status(401).send({ message: 'not authorized' })
})

server.listen(PORT, () => console.log(`server runnig in http://localhost:${PORT}`))