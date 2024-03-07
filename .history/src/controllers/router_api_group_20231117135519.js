module.exports.get_list = async (req, res, next) => {
  const { Op } = require('sequelize');
  const { models } = require('../models');
  console.log(models)
  // const RouterApiGroup = models.RouterApiGroup
  next()
  try {
    const { name = '',  page = 1, limit = 15 } = req.query;
    const offset = (page - 1) * limit; // 计算偏移量  


    const result = await RouterApiGroup.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
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
      data: { list: result, total: result.length }
    })
  } catch (error) {
    console.log(error)
    console.error('数据验证错误信息:', error.errors);
    next('Error finding user:', error);
  }
};

module.exports.get_list_api_tree = async (req, res, next) => {
  const { router_api, Op } = require('../models/routerApi');
  const { router_api_group } = require('../models/routerApiGroup');

  try {
    
    router_api_group.hasMany(router_api, {
      foreignKey: 'group_id', // 指定外键
      sourceKey: 'id', // 指定源字段
    });

    const result = await router_api_group.findAll({
      where: {
        
      },
      // raw: true,
      include: [
        {
          model: router_api,
          attributes: ['id','group_id','name','notes','status'], // 指定要输出的关联模型字段
        },
      ],
      attributes: [['id', 'gid'], 'name', 'notes', 'status'],
      order: [
        // 将转义 title 并针对有效方向列表进行降序排列
        ['id', 'DESC'],
      ],
    });
    res.send({
      status: 200,
      message: 'success',
      data: { list: result }
    })
  } catch (error) {
    console.log(error)
    console.error('数据验证错误信息:', error.errors);
    next('Error finding user:', error);
  }
};


module.exports.do_edit = async (req, res, next) => {
  const { router_api_group } = require('../models/routerApiGroup')
  try {
    const { id,  name, notes ,status} = req.body;


    const data = { name: name, notes: notes,status:status, logging: console.log };
    if (id) {
      const where = { id: id }
      const result = await router_api_group.update(data, { where: where });
      res.send({
        status: 200,
        message: 'success',
        data: result
      })
    } else {

      const result = await router_api_group.create(data);
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
  const { router_api_group, Op } = require('../models/routerApiGroup')
  try {
    const { ids } = req.body; // 假设传递的参数为数组形式的 IDs 
    // // 删除多条记录  
    const result = await router_api_group.destroy({ where: { id: { [Op.in]: ids.toString().split(",") } } });
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