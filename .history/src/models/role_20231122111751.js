const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('role', {
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  });