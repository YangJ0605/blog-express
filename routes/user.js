const express = require('express')
const router = express.Router()


router.post('/login',(req, res, next) => {
  console.log(req.body)
  const {username, password} = req.body
  res.send({
    errCode: 0,
    data: {
      msg:'登录成功',
      username,
      password
    }
  })
})

module.exports = router