module.exports.listToRouter =  function (data) {
  const map = new Map();
  const result = [];
 
  data.forEach(item => {
      map.set(item.id, { id: item.id, parent_id: item.parent_id, name: item.name,path: item.path,component: item.component, meta: { ...item }, children: [] });
  });

  data.forEach(item => {
      const node = map.get(item.id);
      if (item.parent_id === 1) {
          result.push(node);
      } else {
          const parent = map.get(item.parent_id);
          if (parent) {
              parent.children.push(node);
          } else {
              console.error(`Parent node with id ${item.parent_id} not found for node with id ${item.id}.`);
          }
      }
  });
  return result;
}