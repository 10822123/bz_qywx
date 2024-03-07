// dynamicImport.js
const fs = require('fs').promises;
const path = require('path');

async function dynamicImport(importCallback, directoryPath = __dirname, specificModules = []) {
  try {
    const files = specificModules.length ? specificModules : await fs.readdir(directoryPath);
    for (const file of files) {
      if (path.extname(file) === '.js') {
        try {
          const moduleName = path.parse(file).name;

          if (specificModules.length && !specificModules.includes(moduleName)) {
            continue;
          }

          const module = require(path.join(directoryPath, file));
          await importCallback(module, file);
        } catch (error) {
          console.error(`Error loading module ${file}:`, error);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
  }
}

module.exports = dynamicImport;
