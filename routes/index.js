var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.cookies)
  res.render('index', { title: 'Express index' }); // 引擎渲染html
});

module.exports = router;
