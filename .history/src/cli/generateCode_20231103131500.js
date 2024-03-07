const path = require('path');

async function runGenerator(fileName, moduleName, moduleContent) {
  try {
    const { default: nodePlop } = await import('node-plop');
    const plopfile = path.resolve(__dirname, 'plopfile.js');
    const plop = nodePlop(plopfile, {
      destBasePath: process.cwd(),
    });

    const generator = plop.getGenerator('code');
    
    // 创建一个 prompt 上下文
    const promptContext = {
      fileName,
      moduleName,
      moduleContent,
    };
    
    const answers = await generator.runPrompts(promptContext);
    
    // 使用 answers 创建一个 actions 上下文
    const actions = await generator.runActions(answers, promptContext);
    
    actions.forEach(action => {
      console.log(action.type, action.path);
    });
  } catch (error) {
    console.error('生成代码时出错：', error);
  }
}

const { prompt } = require('inquirer');

const [,, fileName, moduleName, moduleContent] = process.argv;

runGenerator(fileName, moduleName, moduleContent);
