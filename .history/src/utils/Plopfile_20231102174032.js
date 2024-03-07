// plopfile.js

module.exports = function (plop) {
    plop.setGenerator('expressRoute', {
      description: '生成Express路由文件',
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
        {
          type: 'input',
          name: 'moduleContent',
          message: '请输入模块内容（留空以使用默认内容）：',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'routes/{{fileName}}.js',
          templateFile: 'templates/expressRoute.hbs',
        },
      ],
    });
  };
  