// generateCode.js

const plop = require('plop');
const path = require('path');

const plopfile = path.resolve(__dirname, 'Plopfile.js');
const plopInstance = plop(plopfile);

const customCodeGenerator = plopInstance.getGenerator('customCode');

customCodeGenerator
  .runActions({
    fileName: 'MyFile',
    moduleName: 'MyModule',
  })
  .then((results) => {
    console.log('Code generation completed.');
  })
  .catch((error) => {
    console.error('Code generation failed:', error);
  });
