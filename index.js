const express = require('express')
const app = express()




app.get('/user', (req, res) => {
  res.send('user')
})

app.get('/user/lggin', (req, res) => {
  res.send('user login')
})

app.listen(8000)