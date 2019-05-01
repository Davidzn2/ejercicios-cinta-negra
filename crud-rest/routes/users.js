var express = require('express');
var router = express.Router();
const { getUser, getUserWithUsername } = require('../controllers/users')
/* GET users listing. */
// 
router.get("/:id", getUser);
router.get("/user/:username", getUserWithUsername);

module.exports = router;
