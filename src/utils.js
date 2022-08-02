const arr = [
    {
        grade: 1,
        teacher: 'Lee',
        students: 20
    },
    {
        grade: 2,
        teacher: 'Wang',
        students: 34
    }
]

const getGarde = (data) => {
    console.log(data);
    // 理论上应该从数据库查询数据,暂时写死假数据
    return arr
}

const queryClasses = (data) => {
    return arr.filter((item) => item.grade === data.grade);
}

module.exports = {
    getGarde,
    queryClasses
}