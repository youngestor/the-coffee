const userRoute = require('./userRoute')
const newsRoute = require('./newsRoute')

const routes = app => {
    userRoute(app)
    newsRoute(app)
}

module.exports = routes
