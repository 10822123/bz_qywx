const fs = require('fs').promises;
const path = require('path');
const { Sequelize, Op } = require('sequelize');
const sequelize = require('../config/database');

const underscored = false;

const db = {};

const loadModels = async () => {
  try {
    const files = await fs.readdir(__dirname);

    files
      .filter(file => path.basename(file) !== 'index.js')
      .forEach(async file => {
        try {
          const model = require(path.join(__dirname, file));
          const modelName = underscored
            ? model.name.charAt(0).toUpperCase() + model.name.slice(1)
            : model.name;

          db[modelName] = model;
        } catch (error) {
          console.error(`Error loading model ${file}:`, error);
        }
      });

    // Ensure all models are loaded before syncing
    await Promise.all(Object.values(db).map(model => {
      if (model && typeof model.sync === 'function') {
        return model.sync();
      }
      return Promise.resolve();
    }));

    // Execute associations
    Object.values(db).forEach(model => {
      if (model && model.associate) {
        model.associate(db);
      }
    });

    console.log('Models loaded:', Object.keys(db).join(', '));

  } catch (error) {
    console.error('Error reading directory:', error);
  }
};

// Call the loadModels function
loadModels();

// Add Op object to db
db.Op = Op;

// Add sequelize object to db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
