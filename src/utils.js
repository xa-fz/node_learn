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

const getGarde = ({ grade, teacher }) => {
    let sql = `select * from myschool where grade=${grade}`;
    if (teacher) {
        sql += ` and teacher like '%${teacher}%'`
    }
    return executeSql(sql)
}

// 创建班级
const addGrade = ({grade, teacher, students}) => {
    let sql = `insert into myschool (grade, teacher, students) values (${grade}, '${teacher}', ${students})`;
    return executeSql(sql)
}

const updateClass = (data) => {
    const arr_new = arr.map((item) => item.grade === data.grade ? data: item)
    return arr_new.length > 0
}

module.exports = {
    getGarde,
    addGrade,
    updateClass
}