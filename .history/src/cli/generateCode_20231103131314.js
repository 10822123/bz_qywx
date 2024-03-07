const path = require('path');

async function runGenerator(fileName, moduleName, moduleContent) {
  try {
    const { default: nodePlop } = await import('node-plop');
    const plopfile = path.resolve(__dirname, 'plopfile.js');
    const plop = nodePlop(plopfile, {
      destBasePath: process.cwd(),
    });

    const generator = plop.getGenerator('code');
    
    // 使用 create() 方法创建一个新的 generator 实例
    const generatorInstance = generator.create();
    
    const results = await generatorInstance.runActions({ fileName, moduleName, moduleContent });
    results.forEach((result) => {
      console.log(result);
    });
  } catch (error) {
    console.error('生成代码时出错：', error);
  }
}

const [,, fileName, moduleName, moduleContent] = process.argv;

runGenerator(fileName, moduleName, moduleContent);
