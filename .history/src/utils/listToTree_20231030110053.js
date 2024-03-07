module.exports.buildTree = function sync(data, options = {}) {
  const { idField = 'id', parentIdField = 'parent_id', childrenField = 'children' } = options;
  const map = new Map();
  data.forEach((item) => {
    map.set(item[idField], { ...item, [childrenField]: [] });
  });

  const tree = [];
  
  data.forEach((item) => {
    const parent = map.get(Number(item[parentIdField]));

    if (parent) {
      parent[childrenField].push(item);      
      console.log(item)
    } else {
      tree.push(item);
    }
  });
  return tree;
}