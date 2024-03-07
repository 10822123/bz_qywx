module.exports.see_server = async (req, res, next) => {
    res.send({
        status: 200,
        message: 'success',
    })
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 模拟实时事件，每秒发送一个消息
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        res.write(`data: Message ${count}\n\n`);
    }, 1000);

    // 当客户端断开连接时，清除定时器
    req.on('close', () => {
        clearInterval(intervalId);
    });




};
