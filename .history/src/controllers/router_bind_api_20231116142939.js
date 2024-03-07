module.exports.router_list = async (req, res, next) => {
  const list = require('../config/router')
  res.send({
    code: 200,
    message: 'success',
    data: list,
  })
}



module.exports.do_edit = async (req, res, next) => {
  const { router } = require('../models/router')
  try {
    const { id, router_id, api_id} = req.body;

    const data = { router_id: router_id, api_id: api_id, logging: console.log };
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
  const { router_bind_api } = require('../models/router_bind_api')
  try {
    const { bind_array,  router_id ,  api_id } = req.body;

    const data = {  router_id: router_id, api_id: api_id, logging: console.log };

    await router_bind_api.sync();

    const existingRecords = await router_bind_api.findAll({
      where: {
        router_id: bind_array.map(item => item.router_id),
        api_id: bind_array.map(item => item.api_id),
      }
    });

    const existingRouterApiPairs = existingRecords.map(record => ({ router_id: record.router_id, api_id: record.api_id }));   //创建一个数组，包含了数据库中已存在记录的 router_id 和 api_id 组合。
    const recordsToCreate = bind_array.filter(item => !existingRouterApiPairs.some(pair => pair.router_id === item.router_id && pair.api_id === item.api_id));  //通过比较 dataArray 中的每一项的 router_id 和 api_id 组合是否在 existingRouterApiPairs 中存在，筛选出在数据库中不存在的记录，即需要插入的记录。
    const recordsToDelete = existingRecords.filter(record => !bind_array.some(item => item.router_id === record.router_id && item.api_id === record.api_id));  //通过比较数据库中已存在的记录与 dataArray 中的每一项的 router_id 和 api_id 组合，筛选出在 dataArray 中不存在的记录，即需要从数据库中删除的记录。
    
    await router_bind_api.transaction(async (t) => {
      if (recordsToCreate.length > 0) {
        await router_bind_api.bulkCreate(recordsToCreate, { transaction: t });
      }

      if (recordsToDelete.length > 0) {
        await router_bind_api.destroy({ where: { id: recordsToDelete.map(record => record.id) }, transaction: t });
      }

      // 具体的更新逻辑可以在这里添加

    });
    res.send({
      status: 200,
      message: 'success',
      data: ''
    })
  } catch (error) {
    next(error);
  }
};