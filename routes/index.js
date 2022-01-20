const todoRoutes = require('./todo');
const authRoutes = require('./auth');


const mountRoutes = (app) => {
    app.use('/', todoRoutes);
    app.use('/auth', authRoutes);
}

module.exports = mountRoutes;
    