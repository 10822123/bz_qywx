// 引入 Winston  
const winston = require('winston');  
  
// 创建 Winston 日志记录器实例，并配置日志格式和输出位置  
const logger = winston.createLogger({  
  level: 'info', // 日志级别  
  format: winston.format.json(), // 日志格式为 JSON  
  transports: [  
    new winston.transports.Console({ // 控制台输出  
      format: winston.format.printf(({ level, message, label, timestamp }) => {  
        return `${timestamp} [${level}] (${label}) - ${message}`;  
      }) 
    }),  
    new winston.transports.File({ // 文件输出  
      filename: './src/logger/app.log', // 日志文件名为 app.log  
      format: winston.format.simple() // 简单格式输出  
    })  
  ]  
});  
  
// 将日志记录器实例赋值给全局变量，以便在应用的其他模块中使用  
global.logger = logger;  
  
// 导出日志记录器模块  
module.exports = logger;