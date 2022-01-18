const todoRoutes = require('./todo');

const mountRoutes = (app) => {
    app.use('/todo', todoRoutes);
}

module.exports = mountRoutes;