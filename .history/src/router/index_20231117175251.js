// router/index.js
const router = require('express').Router();
const path = require('path'); // 添加 path 模块的引入
const dynamicImport = require('../utils/dynamicImport');

const initRoutes = async () => {
  await dynamicImport(path.join(__dirname, '../router'), async (route, file) => {
    router.use(`/${path.parse(file).name}`, route);
    console.log(`路由 ${file} 已加载`);
  });
};

// 初始化路由
initRoutes();

module.exports = router;
