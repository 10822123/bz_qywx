// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllersPath = path.join(__dirname);

const controllers = {};

async function importCallback(module, file) {
  const moduleName = path.parse(file).name;
  controllers[moduleName] = module;
  console.log(`controllers ${file} 已加载`);
}

// 在这里调用 dynamicImport 函数
dynamicImport(importCallback, path.join(__dirname, './'))

// 导出 controllers 对象
module.exports = controllers;
;
