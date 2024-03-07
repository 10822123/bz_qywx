// dynamicImport.js
const fs = require('fs').promises;
const path = require('path');

/**
 * 动态从目录导入模块
 * @param {Function} importCallback - 导入回调函数，接受导入的模块并返回处理后的结果
 * @param {string[]} [specificModules=[]] - 要导入的特定模块名称的数组
 * @param {string} [directoryPath=__dirname] - 包含模块的目录路径
 */
async function dynamicImport(importCallback, directoryPath = __dirname, specificModules = []) {
  try {
    const files = specificModules.length ? specificModules : await fs.readdir(directoryPath);
    for (const file of files) {
      if (path.extname(file) === '.js') {
        try {
          const moduleName = path.parse(file).name;
          console.log('检查',moduleName)
          // 如果指定了特定模块数组，并且当前模块不在数组中，则跳过
          if (specificModules.length && !specificModules.includes(moduleName)) {
            continue;
          }

          const module = require(path.join(directoryPath, file));
          await importCallback(module, file);
        } catch (error) {
          console.error(`加载模块 ${file} 时出错:`, error);
        }
      }
    }
  } catch (error) {
    console.error(`读取目录 ${directoryPath} 时出错:`, error);
  }
}

module.exports = dynamicImport;
