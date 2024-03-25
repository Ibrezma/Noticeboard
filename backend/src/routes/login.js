const express = require('express')
const router = express.Router()
const prisma = require('../../db')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


// define the home page route
router.get('/', (req, res) => {
  res.send('Login page')

})
router.post('/', async(req, res) => {
  const {
    email, password
  } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email
    }
    })
    const correctpassword = bcryptjs.compareSync(password, user.password)
    if(!correctpassword){
      return res.json({msg: "incorrect password!"})
    }
    
    if(user){
      const token = jwt.sign(user, 'kkkkk')
      console.log({token})
      res.json({token})
    }
  })



module.exports = router