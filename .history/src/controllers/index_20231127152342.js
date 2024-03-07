// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllers = {};

const loadControllers = async (underscored = false) => {
    await dynamicImport(
      async (controller, file) => {
        const controllerName = underscored
          ? controller.name.charAt(0).toUpperCase() + controller.name.slice(1)
          : controller.name;
  
          controllers[controllerName] = controller;
         
      }, path.join(__dirname, './')
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
  
  // 调用加载控制器的函数，这里传入了 `underscored` 参数
  loadControllers(true);

// 导出 controllers 对象
module.exports = controllers;
