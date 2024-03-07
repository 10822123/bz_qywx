module.exports.router_list = async (req, res, next) => {
  const list = require('../config/router')
  res.send({
    code: 200,
    message: 'success',
    data: list,
  })
}

function buildTree(data, parent_id = 0) {
  const tree = [];
  data.forEach(item => {
    if (item.parent_id == parent_id) {

      const children = buildTree(data, item.id);
      
      if (children.length > 0) {
       
        item.children= children;
        console.log(JSON.stringify(item, null, 2))
      }

      //console.log(JSON.stringify(item, null, 2))
      tree.push(item);
    }
  });
  return tree;
}

function listToTree2(list) {  
  const map = {}; // 用于存储节点ID和节点对象的映射关系  
  const tree = []; // 存储树结构的数组  
  
  // 将列表中的节点添加到map中  
  list.forEach(item => {  
    map[item.id] = { ...item, children: [] };  
  });  
  
  // 构建树结构  
  list.forEach(item => {  
    const parent = map[item.parent_id];  

    if (parent) {  
      // 如果当前节点的父节点存在，则将当前节点作为子节点添加到父节点中  
      parent.children.push(map[item.id]); 
    } else {  
      // 如果当前节点的父节点不存在，则将当前节点添加到树结构数组中  
      tree.push(map[item.id]);  
    }  
  });  
  console.log(Array.from(tree)); 
  return tree;  
}
module.exports.get_list_tree = async (req, res, next) => {
  const { router, Op } = require('../models/router');
  try {
    const { name = '', title = '' } = req.query;
    const result = await router.findAll({
      attributes: ['id','parent_id','name','title'] , 
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
          { title: { [Op.like]: `%${title}%` } },
        ]
      },
      order: [
        // 将转义 title 并针对有效方向列表进行降序排列
        ['id', 'DESC'],
      ],
    });
  
    const inputList = [
      {
        "id": 169,
        "parent_id": "159",
        "name": "d",
        "title": "AS"
      },
      {
        "id": 167,
        "parent_id": "0",
        "name": "rff",
        "title": "3333bk."
      },
      {
        "id": 166,
        "parent_id": "0",
        "name": "user",
        "title": "用户管理"
      },
      {
        "id": 159,
        "parent_id": "0",
        "name": "usersssfdf",
        "title": "用户管理c555"
      }
    ];


    
    const { listToTree } = require('../utils/listToTree');

    const tree = listToTree(inputList);


    // console.log(JSON.stringify(listToTree(result), null, 2));
    // console.log(JSON.stringify(listToTree(inputList), null, 2));
    res.send({
      status: 200,
      message: 'success',
      data: { list: result }
    })
  } catch (error) {
    console.error('数据验证错误信息:', error.errors);
    next('Error finding user:', error);
  }

}

module.exports.get_list = async (req, res, next) => {
  const { router, Op } = require('../models/router');
  try {
    const { name = '', title = '', page = 1, limit = 2 } = req.query;
    const offset = (page - 1) * limit; // 计算偏移量  
    // 获取查询结果的总条数  
    const total = await router.count({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
          { title: { [Op.like]: `%${title}%` } },
        ]
      }
    });

    const result = await router.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
          { title: { [Op.like]: `%${title}%` } },
        ]
      },
      order: [
        // 将转义 title 并针对有效方向列表进行降序排列
        ['id', 'DESC'],
      ],
      offset: offset, // 设置偏移量  
      limit: Number(limit) // 设置每页条数  
    });

    res.send({
      status: 200,
      message: 'success',
      data: { list: result, total: total }
    })
  } catch (error) {
    console.error('数据验证错误信息:', error.errors);
    next('Error finding user:', error);
  }
};


module.exports.do_edit = async (req, res, next) => {
  const { router } = require('../models/router')
  try {
    const { id, parent_id, name, title, path, component, redirect, icon, badge, dot, hidden, levelHidden, no_closable, no_keepalive } = req.body;

    console.log(req.body)
    const data = { parent_id: parent_id, name: name, title: title, path: path, component: component, redirect: redirect, icon: icon, badge: badge, dot: dot, hidden: hidden, levelHidden: levelHidden, no_closable: no_closable, no_keepalive: no_keepalive, logging: console.log };
    if (id) {
      const where = { id: id }
      const result = await router.update(data, { where: where });
      res.send({
        status: 200,
        message: 'success',
        data: result
      })
    } else {
      const result = await router.create(data);
      res.send({
        status: 200,
        message: 'success',
        data: result
      })
    }
  } catch (error) {
    next(error);
  }
};

module.exports.do_delete = async (req, res, next) => {
  const { router, Op } = require('../models/router')
  try {
    const { ids } = req.body; // 假设传递的参数为数组形式的 IDs 
    // // 删除多条记录  
    const result = await router.destroy({ where: { id: { [Op.in]: ids.toString().split(",") } } });
    //console.log(result) 
    //const result = await router.destroy({ where: { id: req.query.id } });
    res.send({
      status: 200,
      message: 'success',
      data: ids
    })
  } catch (error) {
    console.error(error);
  }
};