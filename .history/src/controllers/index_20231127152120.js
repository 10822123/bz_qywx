// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllers = {};

const loadModels = async () => {
    await dynamicImport(
      async (model, file) => {
        console.log('con模块', model.name.charAt(0).toUpperCase())
        const modelName = underscored
          ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
          : model.name;
  
          controllers[modelName] = model;
         
      },path.join(__dirname, './')
    );
  
    // 执行模型关联
    Object.values(controllers).forEach(model => {
      if (model && model.associate) {
        console.log(`Calling associate for model ${model.name}`);
        model.associate(controllers);
      }
    });
  
    console.log('已加载的模型:', Object.keys(controllers).join(', '));
  };
  
  // 调用加载模型的函数
  loadModels();


// 导出 controllers 对象
module.exports = controllers;
;
