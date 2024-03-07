// models/index.js
const path = require('path');
const dynamicImport = require('../utils/dynamicImport');

// 指定包含模型的目录路径
const modelsDirectory = path.join(__dirname);

// 动态导入所有模型
const allModels = dynamicImport(modelsDirectory);


// 记录已加载的模型和方法
console.log('所有模型和方法:', allModels);

// 导出已加载的模型和方法，或者根据需要使用它们
module.exports = allModels