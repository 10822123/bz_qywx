const path = require('path');

async function runGenerator(fileName, moduleName, moduleContent) {
  try {
    const { default: nodePlop } = await import('node-plop');
    const plopfile = path.resolve(__dirname, 'plopfile.js');
    const plop = nodePlop(plopfile, {
      destBasePath: process.cwd(),
    });

    const generator = plop.getGenerator('code');

    const prompts = generator.prompts.map(prompt => ({
      ...prompt,
      default: prompt.default || moduleContent
    }));
    
    // 使用动态 import() 导入 inquirer
    const { default: inquirer } = await import('inquirer');
    
    const answers = await inquirer.prompt(prompts);
    
    const actions = await generator.runActions(answers);
    
    actions.forEach(action => {
      console.log(action.type, action.path);
    });
  } catch (error) {
    console.error('生成代码时出错：', error);
  }
}

const [,, fileName, moduleName, moduleContent] = process.argv;

runGenerator(fileName, moduleName, moduleContent);
