export default {
    getUser: function() {
        return 'select * from table_user'
    },
    searchUser: function(str) {
        return `select * from table_user where name = '${str}'`
    }
}