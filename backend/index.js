const express = require('express')
const app = express()
const register = require("./src/routes/register")
const login = require("./src/routes/login")
const events = require("./src/routes/events")
const users = require("./src/routes/users")
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
console.log(process.env.DATABASE_URL)


const port = 3000
app.use(express.json())
app.use(cors())
app.use("/api/auth/register", register)
app.use("/api/auth/login", login)
app.use("/api/events", events)
app.use("/api/users", users)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res)=> {
    res.send('api available')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})