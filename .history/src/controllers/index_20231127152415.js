// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllers = {};

const loadControllers = async () => {
  await dynamicImport(
    async (controller, file) => {
      // 使用文件名作为控制器名称
      const controllerName = path.parse(file).name;
      controllers[controllerName] = controller;
    },
    path.join(__dirname, './')
  );

  // 执行模型关联
  Object.values(controllers).forEach(controller => {
    if (controller && controller.associate) {
      console.log(`Calling associate for controller ${controller.name}`);
      controller.associate(controllers);
    }
  });

  console.log('已加载的控制器:', Object.keys(controllers).join(', '));
};

// 调用加载控制器的函数
loadControllers();

// 导出 controllers 对象
module.exports = controllers;
