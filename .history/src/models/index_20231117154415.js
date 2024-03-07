const loadModels = async () => {
  const models = {};

  try {
    const files = await fs.readdir(__dirname);

    files
      .filter(file => path.basename(file) !== 'index.js')
      .forEach(file => {
        try {
          const model = require(path.join(__dirname, file));
          const modelName = underscored
            ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
            : model.name;

          models[modelName] = model;
        } catch (error) {
          console.error(`加载模型 ${file} 时出错:`, error);
        }
      });

    // 执行模型关联
    Object.values(models).forEach(model => {
      if (model && model.associate) {
        model.associate(models);
      }
    });

    console.log('已加载的模型:', Object.keys(models).join(', '));

  } catch (error) {
    console.error('读取目录时出错:', error);
  }

  return models;
};

// 调用加载模型的函数
const models = await loadModels();

module.exports = models;
