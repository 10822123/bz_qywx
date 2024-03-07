
module.exports = function (plop) {
    plop.setGenerator('code', {
      description: '生成代码文件',
      prompts: [
        {
          type: 'input',
          name: 'fileName',
          message: '请输入生成的文件名（不包括扩展名）：'
        },
        {
          type: 'input',
          name: 'moduleName',
          message: '请输入生成的模块名字：'
        },
        {
          type: 'input',
          name: 'moduleContent',
          message: '请输入生成模块的内容（留空则默认生成 "Hello World"）：',
          default: 'Hello World'
        }
      ],
      actions: [
        {
          type: 'add',
          path: 'output/{{fileName}}.js',
          templateFile: 'templates/module.hbs'
        }
      ]
    });
  };
  