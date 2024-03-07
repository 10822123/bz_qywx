const nodePlop = require('node-plop');
const path = require('path');

const plop = nodePlop(path.join(__dirname, 'plopfile.js'));

async function generateModule(fileName, moduleName) {
  const generator = plop.getGenerator('生成模块');
  const answers = await generator.runActions({ fileName, moduleName });
  console.log(`已生成：${answers.fileName}.js`);
}

// 调用生成模块方法
generateModule('MyModule', 'myModule'); // 替换为自定义的文件名和模块名
