// 首先引入http
const http = require('http');
// 可以指定一个端口号的变量
const PORT = 8080;
const serverHeadler = module.require('./app');
// 创建服务
const server = http.createServer(serverHeadler)

server.listen(PORT, () => {
    console.log('nodejs is running at 8080');
})