const sequelize = require('sequelize');
const db = require("../config/database");
const User = db.define('Users', {
  // Model attributes are defined here
  id: {
    type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
  },
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique : true
  },
  password: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  created_on: {
    type: sequelize.DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false
});
module.exports = User;