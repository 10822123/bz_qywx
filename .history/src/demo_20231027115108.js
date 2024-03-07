function listToTree(list, options = { idProperty: 'id', parentProperty: 'parent_id', childrenProperty: 'children' }) {
  const { idProperty, parentProperty, childrenProperty } = options;

  const map = {};
  const tree = [];

  list.forEach(item => {
    item[childrenProperty] = [];
    map[item[idProperty]] = item;
  });

  list.forEach(item => {
    if (item[parentProperty] !== null && map[item[parentProperty]]) {
      map[item[parentProperty]][childrenProperty].push(item);
    } else {
      tree.push(item);
    }
  });

  return tree;
}

// 示例用法
const inputList = [
  {
    "id": 169,
    "parent_id": "159",
    "name": "d",
    "title": "AS"
  },
  {
    "id": 167,
    "parent_id": "0",
    "name": "rff",
    "title": "3333bk."
  },
  {
    "id": 166,
    "parent_id": "0",
    "name": "user",
    "title": "用户管理"
  },
  {
    "id": 159,
    "parent_id": "0",
    "name": "usersssfdf",
    "title": "用户管理c555"
  }
]
;
const { listToTree } = require('./utils/listToTree.js');
const tree = listToTree(inputList);

console.log(JSON.stringify(tree, null, 2));
