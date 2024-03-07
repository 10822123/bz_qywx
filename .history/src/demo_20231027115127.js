
const { listToTree } = require('./utils/listToTree.js');
const tree = listToTree(inputList);

console.log(JSON.stringify(tree, null, 2));
