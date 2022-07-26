const { SuccessModal } = require('../modal/resModal');
const { getList } = require('../utils');

// 处理路由
const handleRoutes = (req, res) => {
    const method = req.method;
    if (method === 'GET' && req.url === '/api/list') {
        const grade = req.query.grade;
        // 可以使用入参去做一些业务上的处理查询等操作
        const data = getList(grade);
        return new SuccessModal(data);
    }
}

module.exports = handleRoutes;