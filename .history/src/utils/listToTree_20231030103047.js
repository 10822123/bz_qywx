module.exports.buildTree = function sync(data, options = {}) {
  const { idField = 'id', parentIdField = 'parentId', childrenField = 'children' } = options;
  const tree = [];

  const map = new Map();
  data.forEach((item) => {
    map.set(item[idField], item);
    item[childrenField] = [];
  });

  data.forEach((item) => {
    const parent = map.get(item[parentIdField]);
    if (parent) {
      parent[childrenField].push(item);
    } else {
      tree.push(item);
    }
  });

  return tree;
}