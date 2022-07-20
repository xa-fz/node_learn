// 首先引入http
const http = require('http');
// 可以指定一个端口号的变量
const PORT = 8080;
// 创建服务
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    // 设置相应数据
    const resData = { name: 'Tom', age: 20 }

    // 返回数据
    res.end(JSON.stringify(resData))
})

server.listen(PORT, () => {
    console.log('nodejs is running at 8080');
})