// models/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

// 指定包含模型的目录路径
const modelsDirectory = path.join(__dirname);

// 动态导入所有模型
 dynamicImport(modelsDirectory);
