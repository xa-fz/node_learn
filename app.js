const queryString = require('querystring');

const handleRoutes = require('./src/routes/interfaces');

const serverHeadler = (req, res) => {
    res.setHeader('Content-type', 'application/json');

    const url = req.url;
    req.url = url.split('?')[0];

    // 解析get接口的参数
    req.query = queryString.parse(url.split('?')[1]);

    const blogData = handleRoutes(req, res);

    if (blogData) {
        res.end(JSON.stringify(blogData));
        return
    }
    // 如果访问的url并没有声明
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('404 Not Found')
    res.end();
}

module.exports = serverHeadler;