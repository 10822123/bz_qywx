// models/index.js
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    console.log(file)
    const model = require(path.join(__dirname, file));
    console.log(model)
    const modelName = model.name.charAt(0).toUpperCase() + model.name.slice(1);
    db[modelName] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
console.log(db)
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
