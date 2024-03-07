module.exports = (plop) => {
    plop.setGenerator('custom', {
        description: 'Generate custom file with methods',
        prompts: [
            {
                type: 'input',
                name: 'fileName',
                message: 'Enter the file name:',
            },
            {
                type: 'input',
                name: 'methodNames',
                message: 'Enter method names (comma-separated):',
            },
            {
                type: 'input',
                name: 'customModuleContent',
                message: 'Enter custom module content (leave empty for default):',
            },
        ],
        actions: (data) => {
            const actions = [];

            // 检查是否已存在指定文件，如果不存在则创建
            actions.push({
                type: 'add',
                path: '{{fileName}}.js',
                templateFile: 'templates/custom-file.js',
                skipIfExists: true,
            });

            // 添加自定义模块内容（如果存在）
            if (data.customModuleContent) {
                actions.push((data) => {
                    return data.customModuleContent;
                });
            }

            // 添加自定义方法（如果不存在）
            actions.push((data) => {
                const fs = require('fs');
                const filePath = `${data.fileName}.js`;
                const content = fs.readFileSync(filePath, 'utf8');

                const methodNames = data.methodNames.split(',').map((method) => method.trim());
                const methodContent = `
  function {{camelCase method}}() {
    // 实现{{camelCase method}}的逻辑
  }`;

                methodNames.forEach((method) => {
                    if (!content.includes(`function ${method}(`)) {
                        actions.push({
                            type: 'modify',
                            path: filePath,
                            pattern: /(module\.exports \= \{)/g,
                            template: `${methodContent.trim()}\n\n$1`,
                            data: { method },
                        });
                    }
                });

                return actions;
            });

            return actions;
        },
    });
};
