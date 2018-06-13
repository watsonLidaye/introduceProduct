// sql语句
var sqlMap = {
	// 用户
	user: {
		add: 'insert into 01_first(id, name, sex) values (0, ?, ?)'
	}
}

module.exports = sqlMap;