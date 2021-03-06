const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads/'),
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage
}).single('myFiles')

module.exports = upload