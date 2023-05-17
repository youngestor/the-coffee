const express = require('express')
const connectDB = require('./config')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const PORT = 7000

app.use(cors())
connectDB()
routes(app)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
