// models/index.js
const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const path = require('path'); // 添加 path 模块的引入
const dynamicImport = require('../utils/dynamicImport');

const underscored = false;
const db = {};

const loadModels = async () => {
  await dynamicImport(
    async (model, file) => {
      const modelName = underscored
        ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
        : model.name;

      db[modelName] = model;
    },'../models'
  );

  // 执行模型关联
  Object.values(db).forEach(model => {
    if (model && model.associate) {
      console.log(`Calling associate for model ${model.name}`);
      model.associate(db);
    }
  });

  console.log('已加载的模型:', Object.keys(db).join(', '));
};

// 调用加载模型的函数
loadModels();

// 将 sequelize 对象添加到 db 中
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
