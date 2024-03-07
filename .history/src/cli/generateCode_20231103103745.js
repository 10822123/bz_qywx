const path = require('path');

async function runGenerator(fileName, moduleName, moduleContent) {
  try {
    // 使用动态 import() 导入 node-plop
    const { default: nodePlop } = await import('node-plop');
    const plopfile = path.resolve(__dirname, 'plopfile.js');
    const plop = nodePlop(plopfile, {
      destBasePath: process.cwd(),
    });

    const generator = plop.getGenerator('code');

    const results = await generator.runActions({ fileName, moduleName, moduleContent });
    results.forEach((result) => {
      console.log(result);
    });
  } catch (error) {
    console.error('生成代码时出错：', error);
  }
}

const [,, fileName, moduleName, moduleContent] = process.argv;

runGenerator(fileName, moduleName, moduleContent);
