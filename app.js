const queryString = require('querystring');

const handleRoutes = require('./src/routes/interfaces');

// post接口会出现异步，使用promise
const getPromiseData = (req) => {
    const promise = new Promise((resolve) => {
        let strData = '';
        req.on('data', (chunk) => {
            strData += chunk.toString();
        })

        req.on('end', () => {
            console.log('over');
            if (!strData) {
                resolve({});
                return
            } else {
                resolve(JSON.parse(strData))
            }
        })
    })
    return promise
}

const serverHeadler = (req, res) => {
    res.setHeader('Content-type', 'application/json');

    const url = req.url;
    req.url = url.split('?')[0];
    
    if (req.method === 'POST') {
        // getPromiseData(req).then((data) => {
        //     req.body = data;
        //     // 返回res
        //     const resData = handleRoutes(req, res);
        //     if (resData) {
        //         res.end(JSON.stringify(resData));
        //         return
        //     }
        //     // 如果访问的url并没有声明
        //     res.writeHead(404, {'Content-type': 'text/plain'});
        //     res.write('404 Not Found')
        //     res.end();
        // })
        let strData = '';
        req.on('data', (chunk) => {
            strData += chunk.toString();
        })
        // 如果不在回调中执行会产生异步
        req.on('end', () => {
            req.body = JSON.parse(strData);
            const resData = handleRoutes(req, res);
            if (resData) {
                res.end(JSON.stringify(resData));
                return
            }
            res.writeHead(404, {'Content-type': 'text/plain'});
            res.write('404 Not Found')
            res.end();
        })
    } else if (req.method === 'GET') {
        // 解析get接口的参数
        req.query = queryString.parse(url.split('?')[1]);
        // 返回res
        const resData = handleRoutes(req, res);
        if (resData) {
            res.end(JSON.stringify(resData));
            return
        }
        // 如果访问的url并没有声明
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('404 Not Found')
        res.end();
    }
}

module.exports = serverHeadler;