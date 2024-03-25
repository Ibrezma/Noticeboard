const express = require('express')
const router = express.Router()
const prisma = require('../../db')

//define the homepage route
router.get('/', async(req, res) => {
    const users = await prisma.user.findMany()
    res.send(users)
})
router.get('/:id', async(req, res) => {
    const id = parseInt(req.params.id)
    const users = await prisma.user.findFirst({
        where: {id}
    })
    res.send(users)
})
router.delete('/:id', async(req, res) => {
    const id = parseInt(req.params.id)
    const users = await prisma.user.delete({
        where: {id}

    })
    res.send(users)



})
module.exports= router