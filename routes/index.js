const todoRoutes = require('./todo');

const mountRoutes = (app) => {
    app.use('/', todoRoutes);
}

module.exports = mountRoutes;