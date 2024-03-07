const path = require('path');

async function runGenerator(fileName, moduleName, moduleContent) {
  try {
    const { default: nodePlop } = await import('node-plop');
    const plopfile = path.resolve(__dirname, 'plopfile.js');
    const plop = nodePlop(plopfile, {
      destBasePath: process.cwd(),
    });

    const generator = plop.getGenerator('code');
    
    const promptContext = {
      fileName,
      moduleName,
      moduleContent,
    };

    // 使用动态 import() 导入 inquirer
    const { prompt } = await import('inquirer');
    
    const answers = await prompt(generator.prompts, promptContext);
    
    const actions = await generator.runActions(answers, promptContext);
    
    actions.forEach(action => {
      console.log(action.type, action.path);
    });
  } catch (error) {
    console.error('生成代码时出错：', error);
  }
}

const [,, fileName, moduleName, moduleContent] = process.argv;

runGenerator(fileName, moduleName, moduleContent);
