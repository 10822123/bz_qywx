// models/index.js
const fs = require('fs').promises;
const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const underscored = false;

const loadModels = async () => {
  const models = {};

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

          models[modelName] = model;
        } catch (error) {
          console.error(`加载模型 ${file} 时出错:`, error);
        }
      });

    // 执行模型关联
    Object.values(models).forEach(model => {
      if (model && model.associate) {
        model.associate(models);
      }
    });

    console.log('已加载的模型:', Object.keys(models).join(', '));

  } catch (error) {
    console.error('读取目录时出错:', error);
  }

  return models;
};

// 异步函数包装
(async () => {
  const models = await loadModels();

  // 将 sequelize 对象添加到 models 中
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  // 导出 models 对象
  module.exports = models;
})();
