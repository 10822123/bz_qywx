module.exports.listToTree = function (list, options = { idProperty: 'id', parentProperty: 'parent_id', childrenProperty: 'children' }) {
  const { idProperty, parentProperty, childrenProperty } = options;

  const map = {};
  const tree = [];

  list.forEach(item => {
    item[childrenProperty] = [];
    map[item[idProperty]] = item;
  });

  list.forEach(item => {
    if (item[parentProperty] != null && map[item[parentProperty]]) {
      map[item[parentProperty]][childrenProperty].push(item);
    } else {
      tree.push(item);
    }
  });
  console.log(list)

  return tree;
}
