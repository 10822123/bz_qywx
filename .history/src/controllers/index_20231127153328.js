// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllers = {};

// 异步函数
async function loadControllers() {
  async function importCallback(module, file) {
    const moduleName = path.parse(file).name;
    controllers[moduleName] = module;
  }

  // 使用动态导入加载 controllers 文件夹下的所有模块
  await dynamicImport(importCallback, path.join(__dirname, './'));
}

// 调用异步函数
loadControllers();

// 导出 controllers 对象
module.exports = controllers;
