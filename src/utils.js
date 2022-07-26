const getList = (data) => {
    console.log(data);
    // 理论上应该从数据库查询数据,暂时写死假数据
    return [
        {
            garde: 1,
            teacher: 'Lee',
            students: 20
        },
        {
            garde: 1,
            teacher: 'Wang',
            students: 34
        }
    ]
}

module.exports = {
    getList
}