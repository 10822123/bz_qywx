// models/index.js
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

// 设置 underscored 选项为 false，保留驼峰式命名
const underscored = false;

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    console.log('file:',file)
    const model = require(path.join(__dirname, file));
    console.log('model:',model)
    // 根据 underscored 选项决定是否进行驼峰式转下划线
    const modelName = underscored
      ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
      : model.name;

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
