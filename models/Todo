const sequelize = require('sequelize');
const db = require("../config/database");
const Todo = db.define('Todos', {
  // Model attributes are defined here
  todo_id: {
    type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
  },
  todo_name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  todo_title: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  todo_desc: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  todo_state: {
    type: sequelize.DataTypes.CHAR,
    allowNull: false
  }
}, {
  timestamps: false
});
module.exports = Todo