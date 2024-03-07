// dynamicImport.js
const fs = require('fs').promises;
const path = require('path');

/**
 * Dynamically imports modules from a directory.
 * @param {Function} importCallback - Import callback function that receives the module and file name.
 * @param {string[]} [specificModules=[]] - Array of specific module names to import (default is an empty array).
 * @param {string} [directoryPath=__dirname] - Directory path containing the modules (default is the current directory).
 */
async function dynamicImport(importCallback, specificModules = [], directoryPath = __dirname) {
  try {
    const absolutePath = path.resolve(directoryPath);
    const files = specificModules.length > 0
      ? specificModules.map(moduleName => path.join(absolutePath, `${moduleName}.js`))
      : await fs.readdir(absolutePath);

    for (const file of files) {
      const moduleName = path.parse(file).name;

      try {
        const module = require(file);
        await importCallback(module, moduleName);
      } catch (error) {
        console.error(`Error loading module ${moduleName}:`, error);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
  }
}

module.exports = dynamicImport;
