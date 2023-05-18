const userRoute = require('./userRoute')
const newsRoute = require('./newsRoute')
const accessoryRoute = require('./accessoryRoute')

const routes = app => {
    userRoute(app)
    newsRoute(app)
    accessoryRoute(app)
}

module.exports = routes
