module.exports.listToTree = function sync(data, options = {}) {
  const { idField = 'id', parentIdField = 'parent_id', childrenField = 'children' } = options;
  consolog.log(data)
  const tree = [];
  data = JSON.stringify(data, null, 2)

 
  const map = new Map();
  data.forEach((item) => {
    map.set(item[idField], { ...item, [childrenField]: [] });
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