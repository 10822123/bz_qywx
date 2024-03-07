// 导入 generateCode 方法
const generateCode = require('./plopGenerateCode.mjs');


// 定义文件名和方法名称
const fileName = 'custom-module';
const methodNames = 'addUser, deleteUser, editUser';

// 调用 generateCode 方法，传递文件名和方法名称
generateCode(fileName, methodNames);

console.log(`生成 ${fileName}.js 文件完成，内容如下：`);
console.log('-------------------------------------');
// 读取生成的文件并输出内容
const fs = require('fs');
const generatedContent = fs.readFileSync(`${fileName}.js`, 'utf8');
console.log(generatedContent);
