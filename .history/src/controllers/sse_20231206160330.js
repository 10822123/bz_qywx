module.exports.see_server = async (req, res, next) => {
    console.log('start see server')
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 模拟实时事件，每秒发送一个消息
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        const timestamp = new Date().toLocaleTimeString();

        // 发送包含时间戳的消息
       
        res.write(`data: Message ${count}   ${timestamp}\n\n`);
        res.flush();
    }, 1000);

    // 当客户端断开连接时，清除定时器
    req.on('close', () => {
        clearInterval(intervalId);
    });




};
