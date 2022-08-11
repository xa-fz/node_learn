const { SuccessModal } = require('../modal/resModal');
const { getGarde, queryClasses } = require('../utils');

// 处理路由
const handleRoutes = (req, _res) => {
    const method = req.method;
    if (method === 'GET' && req.url === '/api/grade') {
        const school = req.query.school;
        // 可以使用入参去做一些业务上的处理查询等操作
        const data = getGarde(school);
        return new SuccessModal(data);
    }

    if (method === 'POST' && req.url === '/api/grade/queryClass') {
        const body = req.body;
        const data = queryClasses(body);
        console.log(data,new SuccessModal(data) )
        return new SuccessModal(data);
    }
}

module.exports = handleRoutes;