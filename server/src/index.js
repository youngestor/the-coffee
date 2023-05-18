const express = require('express')
const connectDB = require('./config')
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const PORT = 7000

app.use(cors())

connectDB()

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

routes(app)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
