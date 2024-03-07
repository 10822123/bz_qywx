module.exports.buildTree = function sync(data, options) {
  const tree = [];

  const idField = options.idField || 'id';
  const parentIdField = options.parentIdField || 'parent_id';
  const childrenField = options.childrenField || 'children';

  const map = new Map();
  data.forEach((item) => {
    map.set(item[idField], item);
    item[childrenField] = [];
  });
  console.log(data)
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