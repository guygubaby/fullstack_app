const router = require('express').Router()
const uploadUtil = require('../utils/upload_file')

router.post('/upload', (req, res) => {
  uploadUtil(req, res, err => {
    if (err) {
      res.render('upload', {
        msg: err
      })
    } else {
      res.render('upload', {
        msg: '/uploads/' + req.file.filename || ''
      })
    }
  })
})

module.exports = router