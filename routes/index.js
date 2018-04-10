var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getStudents(function(err, result) {
    if(err) {
      next(err);
    }
    
    res.send(result);
  });

});

module.exports = router;
