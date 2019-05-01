var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send(
        {"Inicio":"Todo chido my friend"}
    )
})

module.exports = router;