module.exports.listToTree = function sync(data, options = {}) {
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
      tree.push(parent);
    } else {
      tree.push(item);
    }

  });
  
  console.log(JSON.stringify([0], null, 2));
  return tree;
}