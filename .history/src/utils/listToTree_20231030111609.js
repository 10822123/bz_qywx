module.exports.listToTree = function sync(JSON.stringify(data, null, 2), options = {}) {
  
  const map = new Map();
  data.forEach((item) => {
    map.set(item[idField], { ...item, [childrenField]: [] });
  });

  const tree = [];

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