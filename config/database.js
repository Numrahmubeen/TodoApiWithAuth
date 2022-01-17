const Sequelize = require('sequelize');

module.exports = new Sequelize('todo_app_db', 'postgres', '9398', {
    host: 'localhost',
    dialect: 'postgres',
    port: '9398'
  });
