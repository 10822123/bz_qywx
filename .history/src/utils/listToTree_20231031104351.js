module.exports.listToTree = async function (data, options = {}) {

  const {
    idField = 'id',
    parentIdField = 'parent_id',
    childrenField = 'children',
  } = options;

  const idToNodeMap = new Map();
  const tree = [];

  data.forEach(item => {
    const id = item[idField];
    idToNodeMap.set(id, { ...item, [childrenField]: [] });
  });
console.log(JSON.stringify(idToNodeMap, null, 2));
  data.forEach(item => {
    const parentId = item[parentIdField];
    if (parentId === null || !idToNodeMap.has(parentId)) {
      // 如果没有父节点或找不到父节点，将其添加到顶层
      tree.push(idToNodeMap.get(item[idField]));
    } else {
      // 如果有父节点，将其添加到父节点的children字段
      idToNodeMap.get(parentId)[childrenField].push(idToNodeMap.get(item[idField]));
    }
  });
  
  return tree;
}