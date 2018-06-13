var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conn = mysql.createConnection(models.mysql);
conn.connect();
router.get('/', function(req, res, next) {
	conn.query('select * from 01_first', function(err, rows) {
		if (err) {
			res.json({
				code: 1,
				data: []
			}); // this renders "views/users.html"
		} else {
			res.json({
				code: 2,
				data: rows
			});
		}
	})
});
module.exports = router;