const express = require('express')
const app = express()
const register = require("./src/routes/register")
const login = require("./src/routes/login")


const port = 3000
app.use(express.json())
app.use("/api/auth/register", register)
app.use("/api/auth/login", login)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res)=> {
    res.send('api available')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})