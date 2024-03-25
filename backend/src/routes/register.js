const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const prisma = require('../../db')
const jwt = require('jsonwebtoken')

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
router.post('/', async(req, res) => {
   
   
    const {
        firstname, lastname, email, password
    } = req.body
    try {
      const salt = bcryptjs.genSaltSync(10)
      const encryptpassword = bcryptjs.hashSync(password, salt)
      console.log(encryptpassword)
      const user_exist = await prisma.user.findUnique({
        where:{
          email
        }
      })

      if(user_exist){
        return res.json({masg: "user already exist"})
      }
      const users = await prisma.user.create({
          data: {firstname,lastname,email,password: encryptpassword}
      })
      const token = jwt.sign(users, 'kkkkk')
      // console.log({token})
      res.json({token})  
    } catch (error) {
      res.send(error)
    }
    
  })

module.exports = router