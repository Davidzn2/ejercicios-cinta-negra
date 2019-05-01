var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/david', function(req,res, next){
  res.send(
    `<h2>Hola David</h2>`
)
})
module.exports = router;
