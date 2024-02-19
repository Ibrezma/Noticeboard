const express = require('express')
const router = express.Router()
const prisma = require('../../db')

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
router.post('/', async(req, res) => {
   
   
    const {
        firstname, lastname, email, password
    } = req.body

    const users = await prisma.user.create({
        data: {firstname,lastname,email,password}
    })
    console.log(users)
    res.send(users)
  })

module.exports = router