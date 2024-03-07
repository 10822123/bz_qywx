module.exports.listToTree = function(data, options = {}) {
  consolog.log('data')
  consolog.log(data)
  const { idField = 'id', parentIdField = 'parent_id', childrenField = 'children' } = options;
  
  const tree = [];
  data = JSON.stringify(data, null, 2)
    console.log(result)
 
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