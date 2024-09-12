require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook', (req, res) => {
  res.send('Kanti ka pyaar!')
})
app.get('/login', (req, res) => {
  res.send(' Enter webapp backend!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})