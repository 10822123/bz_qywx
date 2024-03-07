module.exports.listToTree = (data, parentId = null) {
  const tree = [];

  for (const item of data) {
    if (item.parent_id === parentId) {
      const children = await buildTree(data, item.id);

      if (children.length > 0) {
        item.dataValues.children = children;
      }

      tree.push(item.dataValues);
    }
  }

  return tree;
}