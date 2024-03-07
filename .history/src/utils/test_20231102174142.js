// generateExpressRoute.js

import * as path from 'path';

(async () => {
  const plopfile = path.resolve(__dirname, 'plopfile.js');

  const { default: Plop } = await import('plop');
  const plopInstance = Plop.load(plopfile);

  const fileName = 'myRoute'; // 生成的文件名
  const moduleName = 'myRouteModule'; // 模块名
  const moduleContent = ''; // 模块内容，留空以使用默认内容

  try {
    const result = await plopInstance.getGenerator('expressRoute').runActions({ fileName, moduleName, moduleContent });
    console.log('生成成功');
  } catch (error) {
    console.error(`生成Express路由文件时出错: ${error}`);
  }
})();
