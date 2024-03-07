// F:\server\src\utils\test.mjs
import nodePlop from 'node-plop';

const plop = nodePlop();
const generator = plop.setGenerator('生成模块', {
  description: '生成新模块',
  prompts: [
    {
      type: 'input',
      name: 'fileName',
      message: '请输入文件名：',
    },
    {
      type: 'input',
      name: 'moduleName',
      message: '请输入模块名：',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '生成/{{ fileName }}.js',
      templateFile: 'templates/module.hbs',
    },
  ],
});

export async function generateModule(fileName, moduleName) {
  const answers = await generator.runActions({ fileName, moduleName });
  console.log(`已生成：${answers.fileName}.js`);
}
