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
      .forEach(async file => {
        try {
          const model = require(path.join(__dirname, file));
          const modelName = underscored
            ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
            : model.name;

          db[modelName] = model;
        } catch (error) {
          console.error(`Error loading model ${file}:`, error);
        }
      });

    // 在循环之外等待所有模型加载完成
    await Promise.all(Object.values(db).map(model => model.sync()));

    // 执行关联
    Object.values(db).forEach(model => {
      if (model.associate) {
        model.associate(db);
      }
    });

    console.log('Models loaded:', Object.keys(db).join(', '));

  } catch (error) {
    console.error('Error reading directory:', error);
  }
};

// 调用加载模型的函数
loadModels();

// 将 Op 对象添加到 db 对象中
db.Op = Op;

// 将 sequelize 对象添加到 db 对象中
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
