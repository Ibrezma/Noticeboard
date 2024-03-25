const express = require('express')
const router = express.Router()
const prisma = require('../../db')

// define the home page route
router.get('/', async(req, res) => {
    const events = await prisma.event.findMany()
    res.send(events)
  })
router.get('/:id', async(req, res) => {
    const id = parseInt(req.params.id)
    const event = await prisma.event.findFirst({
        where: {id}
    })
    res.send(event)
})

  router.post('/', async(req,res) => {
    const {
        title, description, starting_date, ending_date
    } = req.body

    const events = await prisma.event.create({
        data: {title, description, starting_date, ending_date}
    })
  
    res.send(events)
    
}
)

router.delete ('/:id', async(req, res) => {
    const id = parseInt(req.params.id)
    const event = await prisma.event.delete({
        where: {id}
    })
    res.send(event)
    }
    )


  module.exports= router