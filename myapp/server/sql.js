export default {
    getUser: function () {
        return 'select * from table_user'
    },
    searchUser: function (str) {
        return `select * from table_user where name = '${str}'`
    },
    addUser: function ({ name, password, timestamp }) {
        return `insert into table_user(name,password,timestamp) values ('${name}','${password}',${timestamp})`
    }
}