const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

const MES = require('./MES')
const others = require('./others')
MES.use(app)
others.use(app)

app.listen(3000, () => {
  console.log('app listening on port 3000')
})