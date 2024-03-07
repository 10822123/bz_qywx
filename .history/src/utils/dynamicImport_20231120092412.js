// dynamicImport.js
const fs = require('fs').promises;
const path = require('path'); // 添加 path 模块的引入

/**
 * 动态从目录导入模块
 * @param {string} directoryPath - 包含模块的目录路径
 * @param {Function} importCallback - 导入回调函数，接受导入的模块并返回处理后的结果
 */
async function dynamicImport(directoryPath, importCallback) {
  try {
    const files = await fs.readdir(directoryPath);

    for (const file of files) {
      if (path.extname(file) === '.js') {
        try {
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
