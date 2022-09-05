const { SuccessModal } = require('../modal/resModal');
const { getGarde, addGrade, updateClass } = require('../utils');

// 处理路由
const handleRoutes = (req, _res) => {
    const method = req.method;
    if (method === 'GET' && req.url === '/api/grade') {
        
        const grade = req.query.grade;
        const teacher = req.query.teacher;
        // 可以使用入参去做一些业务上的处理查询等操作
        const dataPromise = getGarde({ grade, teacher });
        return dataPromise.then((data) => {
            console.log('data:', data);
            return new SuccessModal(data);
        })
    }

    // 新增年级
    if (method === 'POST' && req.url === '/api/grade/add') {
        const body = req.body;
        const dataPromise = addGrade(body);
        return dataPromise.then((_data) => {
            return new SuccessModal(null, 'Add grade successfully');
        })
    }
    // 更新年级信息
    if (method === 'POST' && req.url === '/api/grade/update') {
        const body = req.body;
        const data = updateClass(body);
        return data ? new SuccessModal('Update Successfully'): new ErrorModal('Update Failed');
    }
}

module.exports = handleRoutes;