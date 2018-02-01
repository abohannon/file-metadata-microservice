const express = require('express')
const app = express()
const routes = require('./routes')

routes(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app
