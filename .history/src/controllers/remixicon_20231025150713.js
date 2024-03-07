module.exports.get_list = async (req, res, next) => {
    const { remixicon, Op } = require('../models/remixicon');
    try {





        const { name='', page = 1, limit = 16 } = req.query;
        const offset = (page - 1) * limit; // 计算偏移量  
        // 获取查询结果的总条数  
        const total = await remixicon.count({
            where: {
                name: { [Op.like]: `%${name}%` },
            }
        });

        const result = await remixicon.findAll({
            attributes: ['name'] , 
            where: {
                name: { [Op.like]: `%${name}%` },
            },
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
