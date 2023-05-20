const userRoute = require('./userRoute')
const newsRoute = require('./newsRoute')
const productRoute = require('./productRoute')

const routes = app => {
    userRoute(app)
    newsRoute(app)
    productRoute(app)
}

module.exports = routes
