const express = require('express')
const router = express.Router()

router.get('/list', (req, res, next) => {
  res.json({
    errCode: 0,
    msg: 'ok'
  })
})

module.exports = router