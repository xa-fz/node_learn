const { executeSql } = require('./database/mysql');

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
    let sql = `select * from myschool where grade=${data}`;
    return executeSql(sql)
}

const queryClasses = (data) => {
    return arr.filter((item) => item.grade === data.grade);
}

// 创建班级
const addClass = (_data) => {
    return 'Successfully'
}

const updateClass = (data) => {
    const arr_new = arr.map((item) => item.grade === data.grade ? data: item)
    return arr_new.length > 0
}

module.exports = {
    getGarde,
    queryClasses,
    addClass,
    updateClass
}