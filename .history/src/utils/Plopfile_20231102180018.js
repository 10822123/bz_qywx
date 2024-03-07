const path = require('path');

module.exports = (plop) => {
  plop.setGenerator('生成模块', {
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
};
