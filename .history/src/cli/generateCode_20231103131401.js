const path = require('path');

async function runGenerator(fileName, moduleName, moduleContent) {
  try {
    const { default: nodePlop } = await import('node-plop');
    const plopfile = path.resolve(__dirname, 'plopfile.js');
    const plop = nodePlop(plopfile, {
      destBasePath: process.cwd(),
    });

    const generator = plop.getGenerator('code');

    // 在较新版本中，使用 generator.runPrompts() 而不是 generator.runActions()
    const prompts = generator.prompts.map(prompt => ({
      ...prompt,
      default: prompt.default || moduleContent
    }));
    
    const answers = await inquirer.prompt(prompts);
    
    const actions = await generator.runActions(answers);
    
    actions.forEach(action => {
      console.log(action.type, action.path);
    });
  } catch (error) {
    console.error('生成代码时出错：', error);
  }
}

const inquirer = require('inquirer');

const [,, fileName, moduleName, moduleContent] = process.argv;

runGenerator(fileName, moduleName, moduleContent);
