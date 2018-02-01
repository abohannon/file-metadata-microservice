module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Testing automatic deploys')
  })
}
