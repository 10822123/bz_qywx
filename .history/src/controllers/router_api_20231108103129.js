
module.exports.get_list = async (req, res, next) => {
  const { router_api, Op } = require('../models/router_api');
  try {
    const { name = '', page = 1, limit = 2 } = req.query;
    const offset = (page - 1) * limit; // 计算偏移量  
    // 获取查询结果的总条数  
    const total = await router_api.count({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
        ]
      }
    });

    const result = await router_api.findAll({
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
      data: { list: result, total: total }
    })
  } catch (error) {
    console.error('数据验证错误信息:', error.errors);
    next('Error finding user:', error);
  }
};


module.exports.do_edit = async (req, res, next) => {
  const { router_api } = require('../models/router_api')
  try {
    const { id, group_id, name, path, } = req.body;


    const data = { group_id: group_id, name: name, path: path, logging: console.log };
    if (id) {
      const where = { id: id }
      const result = await router_api.update(data, { where: where });
      res.send({
        status: 200,
        message: 'success',
        data: result
      })
    } else {

      const result = await router_api.create(data);
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