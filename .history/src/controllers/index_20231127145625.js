// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

const controllersPath = path.join(__dirname);

const controllers = {};

async function importCallback(module, file) {
  const moduleName = path.parse(file).name;
  controllers[moduleName] = module;
  console.log('动态导入controllers')
}

dynamicImport(importCallback, controllersPath);

module.exports = controllers;