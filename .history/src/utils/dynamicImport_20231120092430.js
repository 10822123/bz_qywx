// dynamicImport.js
const fs = require('fs').promises;
const path = require('path');

/**
 * 动态从目录导入模块
 * @param {string} [directoryPath=当前脚本所在目录] - 包含模块的目录路径
 * @param {string[]} [moduleNames=[]] - 要导入的特定模块名称的可选数组
 * @returns {Promise<Object>} - 导入的模块
 */
async function dynamicImport(directoryPath = __dirname, moduleNames = []) {
  const modules = {};

  try {
    const absolutePath = path.resolve(directoryPath);
    const files = await fs.readdir(absolutePath);

    // 使用 Promise.all 进行并行异步操作
    await Promise.all(files.map(async file => {
      const filePath = path.join(absolutePath, file);

      if ((await fs.stat(filePath)).isFile() && path.extname(file) === '.js') {
        const moduleName = path.basename(file, '.js');

        if (!moduleNames.length || moduleNames.includes(moduleName)) {
          try {
            const module = require(filePath);
            modules[moduleName] = module;
            console.log(`模块 ${moduleName} 已加载。`);
          } catch (error) {
            console.error(`加载模块 ${moduleName} 时出错:`, error);
          }
        }
      }
    }));
  } catch (error) {
    console.error('读取目录时出错:', error);
  }

  return modules;
}

module.exports = dynamicImport;
