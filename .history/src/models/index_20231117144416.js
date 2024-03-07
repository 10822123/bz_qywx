// models/index.js
const fs = require('fs').promises;
const path = require('path');
const { Sequelize, Op } = require('sequelize');
const sequelize = require('../config/database');

const underscored = false;

const db = {};

const loadModels = async () => {
  try {
    const files = await fs.readdir(__dirname);

    files
      .filter(file => path.basename(file) !== 'index.js')
      .forEach(file => {
        try {
          const model = require(path.join(__dirname, file));
          const modelName = underscored
            ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
            : model.name;

          db[modelName] = model;
        } catch (error) {
          console.error(`加载模型 ${file} 时出错:`, error);
        }
      });

    // 执行模型关联
    Object.values(db).forEach(model => {
      if (model && model.associate) {
        model.associate(db);
      }
    });

    console.log('已加载的模型:', Object.keys(db).join(', '));

  } catch (error) {
    console.error('读取目录时出错:', error);
  }
};

// 调用加载模型的函数
loadModels();

// 将 Op 对象添加到 db 中
db.Op = Op;

// 将 sequelize 对象添加到 db 中
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
