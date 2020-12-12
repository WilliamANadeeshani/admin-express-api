var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/names', function(req, res, next) {
  res.send('success sample api');
});

module.exports = router;
