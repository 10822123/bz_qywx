const path = require('path');
const { run } = require('plop');

plopGenerateCode =function (fileName, methodNames, customModuleContent = null) {
  // 定义 Plop 配置文件的路径
  const plopfile = path.join(__dirname, 'plopfile.js');
  console.log(plopfile)
  // 运行 Plop 生成器并传递参数
  run(plopfile, {
    fileName,
    methodNames,
    customModuleContent,
  }, () => {
    console.log('生成器运行完成。');
  });
}

module.exports = plopGenerateCode;
