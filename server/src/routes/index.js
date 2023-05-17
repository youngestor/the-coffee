const userRoute = require('./userRoute')

const routes = app => {
    userRoute(app)
}

module.exports = routes
