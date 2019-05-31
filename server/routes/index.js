var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/file', (req, res) => {
  res.render('upload', {
    msg: 'hh'
  })
})


module.exports = router;