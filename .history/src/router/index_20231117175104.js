// router/index.js
const router = require('express').Router();
const dynamicImport = require('../utils/dynamicImport');

const initRoutes = async () => {
  await dynamicImport(__dirname, async (route, file) => {
    router.use(`/${path.parse(file).name}`, route);
    console.log(`路由 ${file} 已加载`);
  });
};

// 初始化路由
initRoutes();

module.exports = router;
