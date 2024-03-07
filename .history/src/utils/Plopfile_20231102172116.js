// Plopfile.js

module.exports = function (plop) {
    plop.setGenerator('customCode', {
      description: 'Generate custom code',
      prompts: [
        {
          type: 'input',
          name: 'fileName',
          message: 'Enter the file name:',
          validate: function (value) {
            if (/.+/.test(value)) {
              return true;
            }
            return 'File name is required.';
          },
        },
        {
          type: 'input',
          name: 'moduleName',
          message: 'Enter the module name:',
        },
      ],
      actions: function (data) {
        const templateContent = data.moduleName || 'hello world';
        const template = `module.exports = function () {\n  console.log('${templateContent}');\n};\n`;
  
        return [
          {
            type: 'add',
            path: 'output/{{fileName}}.js',
            template,
          },
        ];
      },
    });
  };
  