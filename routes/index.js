var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: "Hola mundo ec2Node" }, null, 3));
});

module.exports = router;
