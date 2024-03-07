// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllers = {};

async function importCallback(module, file) {
  const moduleName = path.parse(file).name;
  controllers[moduleName] = module;
  console.log(`Loaded module: ${moduleName}`);
}

dynamicImport(importCallback, ,path.join(__dirname, './'));

// 导出 controllers 对象
module.exports = controllers;
