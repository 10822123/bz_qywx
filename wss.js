const WebSocket = require('ws');

// 创建一个 WebSocket 服务器，监听在指定端口
const wss = new WebSocket.Server({ port: 3000 });

// 监听连接事件
wss.on('connection', (ws) => {
  console.log('Client connected');

  // 监听消息事件
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // 回复客户端
    ws.send(`Server received your message: ${message}`);
  });

  // 监听关闭事件
  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // 定时向客户端发送消息
  const intervalId = setInterval(() => {
    ws.send('Server is still here!');
  }, 1000); // 5秒间隔

  // 监听连接关闭事件，清除定时器
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId);
  });
});
