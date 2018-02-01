const multer = require('multer')
const upload = multer()

module.exports = (app) => {
  app.post('/api/upload', upload.any(), (req, res) => {
    if (req.files.length < 1) res.send("No file selected")

    const result = req.files.reduce((fileData, file) => {
      fileData = {
        filename: file.originalname,
        'bytes': file.size
      }
      return fileData
    }, [])

    res.send(result)
  })
}
