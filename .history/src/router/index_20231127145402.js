// router/index.js
const router = require('express').Router();
const path = require('path'); // 添加 path 模块的引入
const dynamicImport = require('../utils/dynamicImport');

const initRoutes = async () => {
  await dynamicImport( async (route, file) => {
    console.log(route)
    router.use(`/${path.parse(file).name}`, route);
    console.log(`路由 ${file} 已加载`);
  },path.join(__dirname, './'));
};

// 初始化路由
initRoutes();

module.exports = router;
