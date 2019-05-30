var express = require('express');
var router = express.Router();
const userController = require('../controller/user')
const Result = require('../models/result')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.redirect('/user/all')
});

router.post('/register', (req, res, next) => {
  userController.register(req.body).then(ret => {
    res.send(Result.ok())
  }).catch(e => {
    res.send(Result.error(e.message))
  })
})

router.post('/login', async (req, res, next) => {
  try {
    const ret = await userController.login(req.body)
    res.send(Result.ok(ret))
  } catch (e) {
    res.send(Result.error(e.message))
  }
})

router.get('/all', (req, res, next) => {
  userController.getAll().then(ret => {
    res.send(Result.ok(ret))
  }).catch(e => {
    res.send(Result.error(e.message))
  })
})

router.post('/del', (req, res, next) => {
  userController.del(req.body).then(ret => {
    res.send(Result.ok(ret))
  }).catch(e => {
    res.send(Result.error(e))
  })
})

module.exports = router;