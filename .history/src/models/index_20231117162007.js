// models/index.js
// ...（现有的导入语句）

/**
 * @typedef {import('sequelize').Model} SequelizeModel
 */

/**
 * @param {SequelizeModel} model
 */
const associateModel = (model) => {
  if (model && model.associate) {
    console.log(`调用模型 ${model.name} 的关联方法`);
    model.associate(db);
  }
};

/**
 * 从当前目录动态加载模型。
 */
const loadModels = async () => {
  try {
    const files = await fs.readdir(__dirname);

    files
      .filter(file => path.basename(file) !== 'index.js')
      .forEach(file => {
        try {
          /** @type {SequelizeModel} */
          const model = require(path.join(__dirname, file));
          const modelName = underscored
            ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
            : model.name;

          db[modelName] = model;
          associateModel(model); // 在这里关联模型
        } catch (error) {
          console.error(`加载模型 ${file} 时出错:`, error);
        }
      });

    console.log('已加载的模型:', Object.keys(db).join(', '));

  } catch (error) {
    console.error('读取目录时出错:', error);
  }
};

// 调用加载模型的函数
loadModels();

// 将 sequelize 对象添加到 db 中
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
