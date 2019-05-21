const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb://localhost:27017/test';
 
MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('test') 

})
module.exports= MongoClient