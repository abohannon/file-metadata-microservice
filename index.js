const express = require('express')
const app = express()
const multer = require('multer')
const routes = require('./routes')

app.use(express.static(`${__dirname}/public`))
routes(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app
