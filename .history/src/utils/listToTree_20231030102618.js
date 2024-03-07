module.exports.buildTree = function sync(data, options) {
  const tree = [];
console.log(data)
  const idField = options.idField || 'id';
  const parentIdField = options.parentIdField || 'parentId';
  const childrenField = options.childrenField || 'children';

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