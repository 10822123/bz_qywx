// generateExpressRoute.js

const path = require('path');
const plop = require('plop');

const plopfile = path.resolve(__dirname, 'plopfile.js');

const plopInstance = plop.load(plopfile);

const fileName = 'myRoute'; // 生成的文件名
const moduleName = 'myRouteModule'; // 模块名
const moduleContent = ''; // 模块内容，留空以使用默认内容

plopInstance.getGenerator('expressRoute').runActions({ fileName, moduleName, moduleContent })
  .then(result => {
    console.log('生成成功');
  })
  .catch(error => {
    console.error(`生成Express路由文件时出错: ${error}`);
  });
