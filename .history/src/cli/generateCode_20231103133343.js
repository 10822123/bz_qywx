const yeoman = require('yeoman-environment');
const path = require('path');
const fs = require('fs');

function generateCode(fileName, methodName, methodContent) {
  const env = yeoman.createEnv();
  env.lookup();

  const generatorPath = path.resolve(__dirname, 'path-to-your-generator'); // 替换成你的生成器的绝对路径
  env.register(generatorPath, 'user-generator');

  const generatorArgs = {
    fileName,
    methodName,
    methodContent,
  };

  env.run('user-generator', generatorArgs);
}

// 传递文件名、方法名和方法内容作为参数
const fileName = 'user.js';
const methodName = 'myMethod';
const methodContent = 'console.log("Hello, World!");';

generateCode(fileName, methodName, methodContent);
