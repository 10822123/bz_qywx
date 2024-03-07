// router/index.js
const router = require('express').Router(); // 直接创建路由实例

const fs = require('fs').promises;
const path = require('path');

const initRoutes = async () => {
  try {
    const files = await fs.readdir(path.join(__dirname, '../routes'));

    for (const file of files) {
      if (path.extname(file) === '.js') {
        try {
          const route = require(path.join(__dirname, '../routes', file));
          router.use(`/${path.parse(file).name}`, route);
          console.log(`路由 ${file} 已加载`);
        } catch (error) {
          console.error(`加载路由 ${file} 时出错:`, error);
        }
      }
    }
  } catch (error) {
    console.error('读取路由目录时出错:', error);
  }
};

// 初始化路由
initRoutes();

module.exports = router;