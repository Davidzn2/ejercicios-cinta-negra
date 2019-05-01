var mongoose = require('mongoose');
var { config } = require('../config');

mongoose.connect(config.db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
	.once("open", () => console.log("Connected to database"));

module.exports = mongo;