module.exports.listToRouter = async function (data) {
  const map = new Map();
  const result = [];
  console.log(data)
  data.forEach(item => {
      map.set(item.id, { id: item.id, parent_id: item.parent_id, name: item.name, meta: { ...item }, children: [] });
  });

  data.forEach(item => {
      const node = map.get(item.id);
      if (item.parent_id === 0) {
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