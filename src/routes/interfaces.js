const { SuccessModal } = require('../modal/resModal');
const { getGarde, queryClasses, addClass, updateClass } = require('../utils');

// 处理路由
const handleRoutes = (req, _res) => {
    const method = req.method;
    if (method === 'GET' && req.url === '/api/grade') {
        const num = req.query.num;
        // 可以使用入参去做一些业务上的处理查询等操作
        const dataPromise = getGarde(num);
        return dataPromise.then((data) => {
            return new SuccessModal(data);
        })
    }

    // 查询某个年级信息
    if (method === 'POST' && req.url === '/api/grade/queryClass') {
        const body = req.body;
        const data = queryClasses(body);
        return new SuccessModal(data);
    }

    // 新增年级
    if (method === 'POST' && req.url === '/api/grade/add') {
        const body = req.body;
        const data = addClass(body);
        return new SuccessModal(data);
    }
    // 更新年级信息
    if (method === 'POST' && req.url === '/api/grade/update') {
        const body = req.body;
        const data = updateClass(body);
        return data ? new SuccessModal('Update Successfully'): new ErrorModal('Update Failed');
    }
}

module.exports = handleRoutes;