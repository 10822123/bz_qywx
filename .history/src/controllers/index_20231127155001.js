// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllers = {};

async function importCallback(module, file) {
  const moduleName = path.parse(file).name;
  controllers[moduleName] = module;
  console.log(`已加载控制器 ${file}`);

}
console.log(controllers.user.login)
dynamicImport(importCallback, path.join(__dirname));

module.exports = controllers;
