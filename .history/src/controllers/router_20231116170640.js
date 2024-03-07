module.exports.router_list = async (req, res, next) => {
  const list = require('../config/router')
  res.send({
    code: 200,
    message: 'success',
    data: list,
  })
}

module.exports.get_list_tree = async (req, res, next) => {
  const { router, Op } = require('../models/router');
  // const { listToTree } = require('../utils/listToTree');
  try {
    const { name = '', title = '' } = req.query;
    const result = await router.findAll({
      // raw: true,
      attributes: ['id','parent_id','name','title'] , 
      where: {
        parent_id: {
          [Op.ne]: 0, 
        }, 
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
    // const tree =await  listToTree(result);
    res.send({
      status: 200,
      message: 'success',
      data: { list: result  }
    })
  } catch (error) {
    console.error('数据验证错误信息:', error.errors);
    next('Error finding user:', error);
  }
}

module.exports.get_list = async (req, res, next) => {
  const { router, Op } = require('../models/router');
  const { router_bind_api } = require('../models/router');
  const { router_api } = require('../models/router');
  try {
    const { name = '', title = '', page = 1, limit = 15 } = req.query;
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
      include: [
        {
          model: router_bind_api,
          include: [router_api],
        },
      ],
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
    console.log(result)
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
    const { id, parent_id, name, title, path, component, redirect, icon, badge, dot, hidden, levelHidden, no_closable, no_keepalive , status } = req.body;

    const data = { parent_id: parent_id, name: name, title: title, path: path, component: component, redirect: redirect, icon: icon, badge: badge, dot: dot, hidden: hidden, levelHidden: levelHidden, no_closable: no_closable, no_keepalive: no_keepalive,status:status, logging: console.log };
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


module.exports.do_authorize_api = async (req, res, next) => {
  const { router } = require('../models/router')
  try {
    const { id,  api_id } = req.body;

    console.log(req.body)
    const data = {  api_id: api_id, logging: console.log };
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