// controllers/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');


const controllers = {};

async function importCallback(module, file) {
  const moduleName = path.parse(file).name;
  controllers[moduleName] = module;
  console.log(`controllers ${file} 已加载`);
}

dynamicImport(importCallback, path.join(__dirname, './'));

module.exports = controllers;
