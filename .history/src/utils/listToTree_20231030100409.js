module.exports.listToTree = function (data, parentIdField = 'parent_id', childrenField = 'children') {  
  const result = [];  


  // 遍历数据，构建节点映射和子节点列表  
  data.forEach(node => {  
    map[node[parentIdField]] = { ...node, children: [] };  
  });  
  
  // 构建树形结构  
  const stack = [...map.keys()];  
  while (stack.length > 0) {  
    const id = stack.pop();  
    const node = map[id];  
    result.push(node);  
  
    const parent = map[node[parentIdField]];  
    if (parent) {  
      // 将当前节点添加到父节点的子节点列表中  
      parent[childrenField].push(node);  
    } else {  
      // 将当前节点添加到栈中，作为下一层级节点的父节点  
      stack.push(id);  
    }  
  }  
  console.log(result)
  return result;  
}  