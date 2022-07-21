// 处理路由
const handleRoutes = (req, res) => {
    const method = req.method;
    if (method === 'GET' && req.url === '/api/blog/list') {
        return {
            message: '获取列表的接口'
        }
    }
}

module.exports = handleRoutes;